import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import cards from './cards'
export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      cards
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
