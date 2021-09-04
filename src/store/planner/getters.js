export const getters = {
   setPlanner(state, data){
      state.colorLabels = data.colorLabels
      state.dailyTasks = data.dailyTasks
   }
}