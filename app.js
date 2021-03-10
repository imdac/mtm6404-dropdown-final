const app = Vue.createApp({})

app.component('dropdown-button', {
  props: ['text', 'variant'],
  data: function () {
    return {
      expanded: false
    }
  },
  methods: {
    toggle: function () {
      this.expanded = !this.expanded
    }
  },
  computed: {
    buttonVariant: function () {
      return this.variant ? 'btn-' + this.variant : 'btn-secondary'
    }
  },
  template: `
  <div class="dropdown">
    <button type="button" 
            id="dropdownMenuButton1" 
            class="btn dropdown-toggle" 
            :aria-expanded="expanded"
            @click="toggle"
            :class="buttonVariant">
      {{ text }}
    </button>
    <ul class="dropdown-menu" :class="{show: expanded}" aria-labelledby="dropdownMenuButton1">
      <slot></slot>
    </ul>
  </div>
  `
})

app.component('dropdown-item', {
  template: `
  <li>
    <a class="dropdown-item" href="#">
      <slot></slot>
    </a>
  </li>
  `
})

const vm = app.mount('#app')
