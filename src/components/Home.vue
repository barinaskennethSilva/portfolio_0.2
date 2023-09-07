<template>
  <!------ Top ----->
   <div class="fluid-container">
   <img src='./img/background1.png' class="bgImg">

  <div class="row p-2 mt-5">
   <div class="col-3 col-md-12 ">
     <div class="prof_con">
  <img src="./img/profile1.jpg" alt="Image" class="profile">
  </div>
   </div>
   
   <div class="col-7 ">
   <div class="flex-column name_data">
  <h2>Kenneth Barinas</h2>
  <label class="text-black">hatcode35@gmail.com</label>
</div>
   </div>
   <div class="col-2 p-2">
     <i class="bi bi-bell-fill notif"></i>  
   </div>
 </div>
   <!------ Mid ----->
 <div class="row">

  <div class="col-lg-3 col-md-4 col-sm-6 text-container"> 
  <h1>Web Developer</h1>   
    <button type="button" class="btn btn-warning text-white ms-2 mt-5 bthCont "> Contact Us</button>
      <div class="soc_container">
   <i class="bi bi-facebook ms-2 text-white"></i>
   <i class="bi bi-envelope-at-fill ms-2 text-white"></i>
   <i class="bi bi-github ms-2 text-white"></i>
   </div>
  </div>
  <div class="col-12 text-center  p-2">
   <label class="fw-bold h1">Project List</label>   
  </div>
</div>
  <!------ Bottom ----->
 <div class="row">
   <div class="col-lg-6 col-md-8 col-sm-12 project">
    <div class="myproj shadow"></div>
    <div class="details">
   <label class="proj_name">POS Web System</label> 
<span class="text-black"> Point Of Sale System made to track inventory record transaction and sales of Food Store</span>
<div class="proj-btn">

<button class="btn btn-primary w-50 mt-2 mb-2 fw-bold ms-3">Visit Website</button>
<i class="bi bi-hand-thumbs-up"></i>
</div>
  </div>
    </div>
 </div>
 
</div>
</template>
<script>
export default{
  name:'Home_pages'
}
</script>
<style lang="scss" scoped>

@media(max-width: 1200px) {
/*.bgImg{
  background-size: 100% 100%;
  width: 110%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left:0px;
  z-index: -10;
}
 .text-container{
   position: relative;
    bottom: 160px;
    left:40px;
  h1{
    color: #fff;
    text-align: left;
    font-size: 38px;
    
}
.soc_container{
  position: relative;
  top: 140px;
  left: 225px;
}
.bthCont{
  position: relative;
  top: 60px;
  width: 250px;
  left:40px;
}
}
.col-7, .col-2{
  display: none;
}*/
 .prof_con img{
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border:2px solid lightgrey;
  float: right;
  margin: 0px 80px 2px;
}
/*.col-12{
  margin-top: 80px;
}
.myproj{
  background-image: url('./img/project1.jpg');
  background-size: 100% 100%;
  width: 100%;
  height: 180px;
}*/
}


@media (max-width:600px){
.bgImg{
display: none;
}
.prof_con img{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border:2px solid lightgrey;
  margin: 0px
}
.col-7, .col-2{
  display: block !important;
}
.name_data{
  h2{
  text-align: left;
  font-size: 18px;
  color: #111;
}
}
.notif{
  font-size: 25px;
  color: #111;
  cursor: pointer;
}
.text-container{
  background-image:url('./img/background1.png');
  background-size: 100% 100%;
  width: 100%;
  height: 250px;
  padding: 10px;
  line-height: 55px;
  position: static !important;
  left: 0px !important;
  right: 0px !important;
  h1{
    color: #fff;
    text-align: left;
    font-size: 28px;
    margin-top: 60px;
}
.soc_container{
  margin-left: 78px;
}
}
.myproj{
  background-image: url('./img/project1.jpg');
  background-size: 100% 100%;
  width: 100%;
  height: 180px;
}
.details{
  display: flex;
  flex-direction: column;
 span{
  text-align: center;
}
  .proj_name{
    text-align: center ;
    font-size: 25px;
    font-weight: 700;
    font-family: cursive;
  }
}
.bi-hand-thumbs-up{
  position: relative;
  left: 120px;
  font-size: 30px;
}
.project{
  border-top:8px solid #000;
  padding: 2px;
}
}
</style>