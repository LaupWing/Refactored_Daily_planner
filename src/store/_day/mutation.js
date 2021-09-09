export const mutations = {
   setProp(state, {type, value}){
      if(state[type] === value){
         return
      }
      console.log('setting', type)
      console.log('setting', value)
      state[type] = value
   },
   set_showed_task_null(state, value){
      if(state.showed_task === value){
         state.showed_task = null
      }
   }
}