export const mutations = {
   setProp(state, {type, value}){
      state[type] = value
   },
   set_showed_task_null(state, value){
      if(state.showed_task === value){
         state.showed_task = null
      }
   }
}