const app = {
  state: {
    all:true,
    customer:''
  },
  mutations: {
    setAll: (state, value) => {
       state.all = value
    },
    setCustomer:(state, value) => {
      state.customer = value
    }
  }
}

export default app
