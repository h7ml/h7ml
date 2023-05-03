<template>
  <div class="chatgpt">
    <input type="text" v-model="input" />
    <button @click="setQuery">搜索</button>
    <ul>
      <li v-for="item of hits" :key="item.objectID">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { reactive, onMounted, watchEffect } from 'vue';

  export default {
    setup() {
      const state = reactive({
        input: 'vue',
        query: 'vue',
        hits: [],
      });
      const fetchData = async (query) => {
        const data = new EventSource(`https://api.gpt87.com/api/send?message=${query}`);
        data.onmessage = function (event) {
          //var data = JSON.parse(event.data);
          //$('#msgCount').text(data + "</br>")
          document.body.innerHTML += event.data + '<br>';
        };
        state.hits = data.hits;
      };
      onMounted(() => {
        watchEffect(() => {
          fetchData(state.query);
        });
      });

      const setQuery = () => {
        state.query = state.input;
        fetchData(state.query);
      };
      return { setQuery, state };
    },
  };
</script>
<style>
  .chatgpt {
    width: 125px;
    position: fixed;
    z-index: 9999999999;
    right: 10px;
    top: 120px;
    padding: 10px;
    background-color: #fff;
    border-radius: 3px;
    font-size: 13px;
    text-align: center;
  }
</style>
