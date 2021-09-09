export const actions = {
   moveToCurrentTime({getters, state}){
      const {hours, minutes} = getters.time

      const distanceHours = state.timeline_positions
         .find(tl=>tl.time.split(':')[0]===String(hours))
         .midpoint
            
      const li = state.timeline_el.querySelector('li')
      const totalDistance = li.offsetHeight * 2
      const distancePerMinute = totalDistance/60
      const distanceMinutes = distancePerMinute * minutes
      const moveTo = ((distanceHours + distanceMinutes) - state.container.offsetHeight / 2)
      
      setTimeout(()=>{
         this.$el.scrollTo(0, moveTo)
      })
   }
}