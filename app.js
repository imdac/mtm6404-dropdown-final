const app = Vue.createApp({
  data: function () {
    return {
      expanded: false
    }
  },
  methods: {
    toggle: function () {
      this.expanded = !this.expanded
    }
  }
})

const vm = app.mount('#app')
