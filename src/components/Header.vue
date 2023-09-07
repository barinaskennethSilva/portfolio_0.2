<template>
  <div>
    <div v-if="showAlert" class="alert1 bg-light shadow">
 <div class="top-alert bg-dark"><i class="bi bi-x closeAlert" @click="ResponClick"></i></div>
 <div class=" d-flex flex-column p-4">
   <div class="alert-info d-flex flex-row">
 <i  class="bi bi-exclamation-circle-fill " ></i><span class="text">Not yet responsive please go to mobile view</span>
</div>
<button @click="ResponClick" class="btn btn-primary mt-5">Ok</button>
</div>
</div>
     <header :class="{'scroll-nav':scrollPosition}">
      <nav>
  <div class="container-fluid">
    <a class="navbar-brand fw-bold ms-3" href="#">HatArts</a>
 <ul class="navigation" v-show="!mobile-nav" >
        <li  class="nav-item ms-3">
     <router-link class="nav-link"
    to="/">Home
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
        <li class="nav-item ms-3">
       <router-link class="nav-link" :to="{name:'Service_pages'}"> Services
          </router-link>
        </li>
        <li class="nav-item ms-3">
          <router-link class="nav-link" :to="{name:'About_pages'}"> About</router-link>
        </li>
        <li class="nav-item ms-3">
      <router-link class="nav-link" :to="{name:'Contact_pages'}">Contact</router-link>
        </li>
      </ul>
  
   <div class="icon">
   <i @click="toggleMobileNav"  v-show="mobile" :class="{ 'icon-active' :mobileNav }" class="bi bi-justify"></i>
   </div>
<transition name="mobile-nav">
 <ul v-show="mobileNav" class="dropdown-nav">
   <div class="Topdash">
     <label class="text-white">Portfolio</label>
   </div>
        <li class="nav-item ms-3">
     <router-link class="nav-link" to="/"> <i class="bi bi-house"></i>Home
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
        <li class="nav-item ms-3">
       <router-link class="nav-link" :to="{name:'Service_pages'}"> <i class="bi bi-person-fill-gear"></i>Services
          </router-link>
        </li>
        <li class="nav-item ms-3">
          <router-link class="nav-link" :to="{name:'About_pages'}"> <i class="bi bi-person-fill"></i>About</router-link>
        </li>
        <li class="nav-item ms-3">
      <router-link class="nav-link" :to="{name:'Contact_pages'}"><i class="bi bi-envelope-check"></i>Contact</router-link>

        </li>
      </ul>
 </transition>
  </div>
</nav>
 </header>     



    </div>
</template>

<script>
export default {
  name: 'Header_pages',
  data(){
    return{
     scrollPosition:null ,
     mobile:true,
     mobileNav: false,
     windowWidth:null,
     showAlert: true
  };
},
methods:{
  toggleMobileNav(){
    this.mobileNav = !this.mobileNav
  },
  ResponClick(){
    this.showAlert = !this.showAlert;
  }
},
};
//:to="{name:'/'}"
</script>
<style lang='scss' scoped>
  .alert1{
    width: 320px;
    height:240px;
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  text-align: center;
  border-radius: 10px;
  z-index: 100;
i{
  font-size: 44px;
  color: dodgerblue;
  }
  .text{
    position: relative;
    top: 8px;
  }
    .top-alert{
width:100%;
border-top-left-radius: 10px;
border-top-right-radius:10px;
padding: 10px;
.closeAlert{
 justify-content:flex-end ;
 font-size: 24px;
 display: flex;
    }
    .closeAlert:hover{
      color:#fff;
      cursor: pointer;
    }
    }
  }
  
  .nav-link{
   font-weight: 500;
   color: #fff;
   list-style: none;
   text-decoration: none;
}
header{
  background-color: rgba(0,0,0, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  top: 0px;
  transition: 0.5s ease all;
  color: #fff;
  border-bottom:2px solid #000;
nav{
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
  @media(max-width: 600px){
  min-width: 400px;
 ul,.link{
   font-weight: 500;
   color: #fff;
   list-style: none;
   text-decoration: none;
}
li{
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}
.link{
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  &:hover{
color:#00afea;    
border-color:#00afea;
}  
}


.navigation{
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}
}

.nav-link:hover{
  color: #FF0000;
}
.nav-link{
  cursor: pointer;
  font-weight: 700;
  
  i{
  font-weight: 700;
  position: absolute;
  left: 25px;
  font-size: 24px;
  margin-top: -5px !important;
}
}

.icon{
  display:flex;
  position: absolute;
  align-items: center;
  top:0;
  right: 54px;
  height: 100%;
  i{
    cursor: pointer;
    font-size: 24px;
    transition: 0.8 ease all;
}
}
  .icon-active{
  transform:rotate(180deg);
}

.dropdown-nav{
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  overflow: hidden;
  max-width: 250px;
  height: 100%;
  background-color: #000;
  border: 1px solid #000;
  top: 0;
  left: 0;
  /*transition: 0.5s;*/
  li{
  margin-left: 0;
  .link{
    color: #000;
}
}
.Topdash{
  height: 150px;
  padding: 20px;
  text-align: center;
  font-size: 30px;
  font-family: cursive;
  border-bottom: 1px solid lightgrey;
  width: 118%;
  position: relative;
  right: 39px;
}
}
}
}



</style>