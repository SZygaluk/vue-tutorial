import { createApp } from 'vue';
import { createStore }from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state) {
      state.counter ++
    },
    increase(state, payload) {
      state.counter += payload
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter * 3;
      if(finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  },
  actions: {
    increaseAsync(context) {
      console.log(context)
      setTimeout(() => {
        context.commit('increment')
      },2000)
    }
  }
});
const app = createApp(App);

app.use(store)
app.mount('#app');