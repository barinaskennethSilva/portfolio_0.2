<template>
  <div>
      <img src="./img/background2.png" alt="Image" class="background">
 <h1 class="mt-4">Services we offer</h1>
  <div class="container">
   <div class="services shadow">
       <div class="serveCon mt-3">
   <i class="bi bi-laptop"></i>
    <label>Web Design</label> 
    <p>We offer to design your website</p>
  <button class="btn btn-primary">View Sample</button>
   </div>
</div>
     <div class="services shadow">
        <div class="serveCon mt-3">
<i class="bi bi-laptop"></i>
    <label>Web Application</label> 
    <p>We offer to design your website</p>
     <button class="btn btn-primary">View Sample</button>
   </div>
   </div>
  <div class="services shadow">
    <div class="serveCon mt-3">
<i class="bi bi-laptop"></i>
    <label>Offline System</label> 
    <p>We offer to design your website</p>
  <button class="btn btn-primary">View Sample</button>
   </div>
   </div>
</div>
    </div>
</template>
<script >
export default {
  name:'Service_pages'
}
</script>
<style lang='scss' scoped>
.background{
  height: 100%;
  width: 100%;
  position: absolute;
  left:0px;
  top: 0px;
  z-index: -10;
}
.container{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 20px;
  width:100%;
}
.services{
  height: 250px;
  max-width:250px;
  background-color: #fff;
  border-radius: 10px;
  transform: rotate(48deg);
  position: relative;
  bottom: 20px;
  margin-left: 20px;
  flex: 1 0 auto;
}
.serveCon{
  transform: rotate(-45deg);
}
@media(max-width:600px){
  .background{
  display: none;
  }
  h1{
    font-size: 34px;
    text-align: center;
    position: relative;
    top: 30px;
  }
 .services{
   border: 1px solid lightgrey;
   height: 210px;
  max-width:280px;
  margin-left: 20px;
  padding: 10px;
  flex: 1 0 auto;
  text-align: center;
  transform: rotate(0deg);
  .serveCon{
    display: flex;
    flex-direction: column;
    transform: rotate(0deg);
   i{
     font-size: 38px;
 }
    label{
     font-size: 20px;
     font-family: cursive;
  

 }
 }
 } 
 .container::-webkit-scrollbar{
  display: none;
}
 .container{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 20px;
  width:100%;
  overflow-x: auto;
  overflow-y: hidden !important;
  position: relative;
  top: 50px;
}
}
</style>