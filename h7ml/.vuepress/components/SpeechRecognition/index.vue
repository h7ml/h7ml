<template>
  <div>
    <button @click="startRecognition">Start Recognition</button>
    <button @click="stopRecognition">Stop Recognition</button>
    <p>{{ recognitionStatus }}</p>
    <p>{{ recognizedText }}</p>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'SpeechRecognition',
    setup() {
      const recognition = webkitSpeechRecognition ? new webkitSpeechRecognition() : null;
      const recognitionStatus = ref('Recognition not started');
      const recognizedText = ref('');

      if (recognition) {
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
          recognitionStatus.value = 'Recognition started';
        };

        recognition.onend = () => {
          recognitionStatus.value = 'Recognition ended';
        };

        recognition.onresult = (event) => {
          const recognized = event.results[event.results.length - 1][0].transcript;
          recognizedText.value = recognized;
        };
      } else {
        recognitionStatus.value = 'Recognition not supported';
      }

      const startRecognition = () => {
        if (recognition) {
          recognition.start();
        }
      };

      const stopRecognition = () => {
        if (recognition) {
          recognition.stop();
        }
      };

      return {
        startRecognition,
        stopRecognition,
        recognitionStatus,
        recognizedText,
      };
    },
  };
</script>
