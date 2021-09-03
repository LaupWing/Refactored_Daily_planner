import Vue from 'vue'

const requireGlobal = require.context(
   './components/Globals',
   false,
   /\w+\.(vue|js)$/
)

requireGlobal.keys().forEach(fileName => {
   const componentConfig = requireGlobal(fileName)
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

const requireIcon = require.context(
   './components/Icons',
   false,
   /\w+\.(vue|js)$/
)

requireIcon.keys().forEach(fileName => {
   const componentConfig = requireIcon(fileName)
   const componentName = fileName
      .replace('./', '')
      .replace('.vue', '')
      .match(/[A-Z][a-z]+/g)
      ?.join("-")
      .toLowerCase()
   Vue.component(
      `icon-${componentName}`, 
      componentConfig.default || componentConfig
   )
})