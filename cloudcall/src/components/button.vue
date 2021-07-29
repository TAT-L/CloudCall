<template>
  <div class="btn"
   :style="style"
 
   >
      <span >{{name}}</span>
  </div>   
</template>

<script>
export default {
  name: "Button",
  data(){
      
      return {
        style: {
            background : this.color,
            width: '80px'
        }
      
      }
      
  },
  props:['name','color','width']
};
</script>

<style lang="less" scoped>
    .btn {
        display: flex;
        height: 30px; 
        //  padding:0 10px;
        //  background-color: rgb(0,150,135);
         margin: 3px 10px;
         border-radius: 3px;
        span {
           
            display: flex;
            color: white;
            margin: 0 10px;
            justify-content: center;
            align-items: center;
            min-width: 60px;
        //    padding: 0 10px;
            // width: 35px;
            
            
           
            font-size: 13px;
        }
    }
</style>