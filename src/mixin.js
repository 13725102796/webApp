export default {
  methods: {
    toOpen(name) {
      this[name] = true
    },
    toClose(name) {
      this[name] = false
    },
    toRoute(path,params = {}) {
      this.$router.push({path: path , query: params} )
    },
    select(name,value) {
      this[name] = value
    },
  }
}