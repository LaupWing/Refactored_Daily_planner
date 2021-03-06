import {getHoursMinutes} from '@/utils/date'

export const actions = {
   moveToCurrentTime({state}){
      const {hours, minutes} = getHoursMinutes()

      const distanceHours = state.timeline_positions
         .find(tl=>tl.time.split(':')[0]===String(hours))
         .midpoint
            
      const li = state.timeline_el.querySelector('li')
      const totalDistance = li.offsetHeight * 2
      const distancePerMinute = totalDistance/60
      const distanceMinutes = distancePerMinute * minutes
      const moveTo = ((distanceHours + distanceMinutes) - state.container_el.offsetHeight / 2)
      
      setTimeout(()=>{
         state.container_el.scrollTo(0, moveTo)
      })
   }
}