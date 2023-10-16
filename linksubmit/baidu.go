package linksubmit

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

const (
	baiduURL    = "http://data.zz.baidu.com/urls?site=https://www.h7ml.cn&token=unmWrGQ9puPdyCug"
	logDirPath  = "log/submit"
	logFilePath = logDirPath + "/baidu.log"
)

func Baidu() {
	filePath := "urls.txt"
	linesPerFile := 98

	lines, err := readLines(filePath)
	if err != nil {
		fmt.Println("Failed to read the file:", err)
		return
	}

	fileCount := len(lines) / linesPerFile
	if len(lines)%linesPerFile > 0 {
		fileCount++
	}

	// 日志记录器
	logFile, err := os.OpenFile(logFilePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		fmt.Println("Failed to open log file:", err)
		return
	}
	defer logFile.Close()
	logger := log.New(logFile, "", log.Ldate|log.Ltime)

	for i := 0; i < fileCount; i++ {
		start := i * linesPerFile
		end := start + linesPerFile
		if end > len(lines) {
			end = len(lines)
		}

		fileName := fmt.Sprintf("urls_%d.txt", i+1)
		err := writeLines(fileName, lines[start:end])
		if err != nil {
			fmt.Printf("Failed to write file %s: %v\n", fileName, err)
			logger.Printf("Failed to write file %s: %v\n", fileName, err)
			continue
		}

		err = submitFile(fileName)
		if err != nil {
			fmt.Printf("Failed to submit file %s: %v\n", fileName, err)
			logger.Printf("Failed to submit file %s: %v\n", fileName, err)
			continue
		}

		fmt.Printf("Submitted file %s (%d/%d)\n", fileName, i+1, fileCount)
		logger.Printf("Submitted file %s (%d/%d)\n", fileName, i+1, fileCount)
	}
}

func readLines(filePath string) ([]string, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	var lines []string
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return lines, nil
}

func writeLines(fileName string, lines []string) error {
	file, err := os.Create(fileName)
	if err != nil {
		return err
	}
	defer file.Close()

	writer := bufio.NewWriter(file)
	for _, line := range lines {
		fmt.Fprintln(writer, line)
	}

	return writer.Flush()
}

func submitFile(fileName string) error {
	filePath := fmt.Sprintf("./%s", fileName)
	file, err := os.Open(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	client := http.DefaultClient
	req, err := http.NewRequest(http.MethodPost, baiduURL, file)
	if err != nil {
		return err
	}
	req.Header.Set("Content-Type", "text/plain")

	res, err := client.Do(req)
	if err != nil {
		return err
	}
	defer res.Body.Close()

	bodyBytes, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return err
	}

	bodyStr := string(bodyBytes)
	fmt.Println(bodyStr)

	if res.StatusCode != http.StatusOK {
		logFailure(bodyStr)
	}

	return nil
}

func logFailure(message string) {
	if _, err := os.Stat(logDirPath); os.IsNotExist(err) {
		err := os.MkdirAll(logDirPath, 0755)
		if err != nil {
			fmt.Println("Failed to create log directory:", err)
			return
		}
	}

	file, err := os.OpenFile(logFilePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		fmt.Println("Failed to open log file:", err)
		return
	}
	defer file.Close()

	logger := log.New(file, "", log.Ldate|log.Ltime)
	logger.Println("Submission failure:", message)
}
