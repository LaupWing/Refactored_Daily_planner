export const getters = {
   time(){
      const date = new Date()
      const hours = addZero(date.getHours())
      const minutes = addZero(date.getMinutes())
      return {
         hours,
         minutes
      }   
   }
}