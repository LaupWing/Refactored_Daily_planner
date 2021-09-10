export const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

export const addZero = (number) =>{
   return number < 10 ? '0'+ number : number
}

export const getHoursMinutes = ()=>{
   const date = new Date()
   const hours = addZero(date.getHours())
   const minutes = addZero(date.getMinutes())
   
   return {
      hours,
      minutes
   }     
}