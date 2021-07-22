package main

import (
	"github.com/h7ml/h7ml/lib"
	"github.com/h7ml/h7ml/utils"
)

func main() {
	zhihu := lib.Zhihu("https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=100&desktop=true")
	bilibili := lib.Bilibili("https://www.bilibili.com/v/popular/rank/all")
	readme := utils.GenerateReadme([]string{
		"zhihu",
		"bilibili",
	}, zhihu,bilibili)
	utils.WriteStringToFile(readme)
}
