export const mutations = {
   setProp(state, {type, value}){
      if(type === 'showed_task'){
         console.log('showing')
      }
      state[type] = value
   }
}