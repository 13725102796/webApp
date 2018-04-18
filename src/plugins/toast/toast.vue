<template>
<div>
  <div class="container" v-if="mask" v-show="show">
    <div class="position">
      <p :class="[!show && 'leave']">{{msg}}</p>
    </div>   
  </div>
  <div class="nomask" v-else v-show="show">
    <div class="position">
      <p class="tips" >{{msg}}</p>
    </div> 
  </div>
</div>

</template>
<script>
export default {
  data(){
    return {
      show: true,
      msg: '',
      mask: true
    }
  },
  methods: {
    delayed(msg,mask,ms){
      
      this.msg = msg 
      this.mask = mask
      setTimeout(()=>{
        this.show = false
      },ms)
    }
  },

}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin.sass'
.nomask
  .tips
    background: rgba(0,0,0,.75)
    color: #fff
    padding: .25rem .5rem
    border-radius: .15rem 
    font-size: $title-size
.position
  position: fixed
  left: 50%
  top: 50%
  transform: translate3d(-50%,-50%,0)
  font-size: $desc-size
  color: $desc-color
.container
  +mask(rgba(0,0,0,.3),9999)
  p   
    padding: .5rem 1rem
    background: #fff
    transform-style: preserve-3d
    -webkit-animation: entry 1s ease
  .leave
    -webkit-animation: leave .5s ease
      
@keyframes entry 
  from 
    opacity: 0
    transform: rotateY(70deg)
  to 
    opacity: 1
    transform: rotateY(0deg)
@keyframes leave
  to 
    opacity: 0
    transform: rotateY(-70deg)
</style>


