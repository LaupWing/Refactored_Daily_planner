import {days} from '@/utils/date'

export const getters = {
   tasksOfToday(state){
      const tasks = state.dailyTasks 
      const today = days[new Date().getDay()]
      if(tasks){
         return tasks
            .filter(task=> task.days.find(day=> day.day === today))
            .map(task =>{
               task.time = task.days.find(day=> day.day === today)
               delete task.days
               return task
            })
      }
      return null
   } 
}