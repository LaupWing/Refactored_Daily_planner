import Vue from 'vue'

const requireComponent = require.context(
   './components/Globals',
   false,
   /\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
   const componentConfig = requireComponent(fileName)
   const componentName = fileName
      .replace('./', '')
      .replace('.vue', '')
      .match(/[A-Z][a-z]+/g)
      ?.join("-")
      .toLowerCase()
   Vue.component(
      `app-${componentName}`, 
      componentConfig.default || componentConfig
   )
})