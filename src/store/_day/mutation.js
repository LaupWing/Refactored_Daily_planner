export const mutations = {
   setProp(state, {type, value}){
      console.log(value)
      state[type] = value
   },
   set_showed_task_null(state, value){
      if(state.showed_task === value){
         if(state.showed_task !== null){
            console.log('setting null')
            state.showed_task = null
         }
      }
   }
}