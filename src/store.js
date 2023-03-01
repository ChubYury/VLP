import { createStore } from 'vuex'
import { counterModule } from './storag/CounterModule.js'
import { authModule } from './storag/AuthModule.js'

const store = createStore({
  modules: {
    numbers: counterModule,
    auth: authModule
  },
  
})

export default store