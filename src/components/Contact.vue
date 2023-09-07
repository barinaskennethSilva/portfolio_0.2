<template>
 <div class="view-login shadow" v-if = "state.roomName === '' || roomName.value === null ">
  <div class="room-list d-flex bg-dark w-100 p-3">
     <div class="room_contain">
  <div class="user-room-pic">
    
  </div> 
   <label class="text-white">room-list</label>    
     </div>
     
        <div class="room_contain">
  <div class="user-room-pic">
  </div> 
   <label class="text-white">room-list</label>    
     </div>
     
   <div class="room_contain">
  <div class="user-room-pic">
  </div> 
   <label class="text-white">room-list</label>    
     </div>
     
   <div class="room_contain">
  <div class="user-room-pic">
  </div> 
   <label class="text-white">room-list</label>    
     </div>
     
     
     
   </div>
    <form class="login-form" @submit.prevent="Login">
  <label for="username" class="mb-2">Create Room</label>
  <input class="form-control" type="text" v-model="roomName" placeholder="Create Room " /> 
  
  <input class="form-control  rounded mt-3 " placeholder="Room Description" v-model="roomDescript">
  <input v-if="! xhrRequest" class="btn btn-primary fw-bold mt-4" type="submit" value="Create Room" />
    </form> 
   </div>
  <!------- Name sender -------->
    <div v-else> 
  <div v-if="!joined" class="parent-container">
   <div class="name-container shadow">
   <div class="nav bg-primary p-4 text-center text-white fw-bold h3 d-flex flex-column">
    <img src="./img/profile.png" alt="pic" class="prof mb-2">
      First, may are know you!
    </div>  
  <div class="input-container">
   
      <div class="input-form mt-2"> 
  <i class="bi bi-person"></i>
  <input type="text" class="user-name " v-model="currentUser" placeholder="Name" /> 
</div>

 <button class="join-button btn btn-primary fw-bold" v-on:click="join">Message Us</button> 

  </div>  
   </div> 
</div>
 </div>
  <div v-if="joined" class="text-input">
     <div class="roomDescript bg-dark">
     <h1>{{state.roomName}}</h1>
<label >{{state.roomDescript}}</label>
    </div>
  <div class="list-container">
    <div v-for="message in messages" :key="message.id" >
 <div class="text-msg">
    <b>
    {{ message.user }}
    </b>  
    : {{ message.text }}
      </div>

<!--- ########################## --->
 <!--div class="img-msg">
      <b>
    {{ message.user }}
    </b>  
<img :src="`{{ message.fileInput }}`" aspect-ratio="2" class="msgImg"/>
 </div-->
  <!--- ########################## --->
</div>
  </div>
  <div class="text-input-msg bg-dark">
 <div class="container-mess">
    <textarea
v-model="text"
class="text-message"
placeholder="Type your message..."
      >
      </textarea>
 <button class="btn-send" v-on:click="sendMessage"><i class="bi bi-send"></i></button>     
      </div>
    <label for="img" @click="toggleImg"> <i class="bi bi-camera"></i></label>

 <input ref="fileInput" id="img" type="file" accept="image/*" @input = "pickFile" />  
       </div>
  <!---- image viewer --->
  <div class="imagePreviewWrapper" v-if="imagePreviewWrapper">
  
    <div class="imgView" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
 
    
 <div class="d-flex">
   
     <button class="btn btn-danger fw-bold ms-2 w-50" @click="CloseImg">Cancel</button>
    <button class="btn btn-primary w-50 fw-bold ms-2 me-2" type="submit" v-on:click="sendMsgImg">Send</button>
  </div>
        </div>   
  </div>  

    
</template>
<style scoped lang="scss">
.room-list{
  overflow-x: auto;
}
.room-list::-webkit-scrollbar{
  display: none;
}
.room_contain{
  margin-left: 20px;
  width: 100px;
  flex: 1 0 auto;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.user-room-pic{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
}
.view-login{
margin-top: 50px;
  width: 100%;
  .login-form{
  display: flex;
  flex-direction: column;
  padding: 20px;
}
}
.insertData{
  margin-top: 50px;
  width: 100%;
  .nav{
    width: 100%;
    text-align: center;
    font-size: 20px;
    color:#fff;
    padding:10px;
  }
  .insertInput{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    input{
      margin: 10px 10px;
      padding: 10px;
      width: 95%;
      outline:none;
  }
  button{
   margin: 10px 10px;
   width: 95%;
  }
  }
}
.parent-container{
width: 100%;
height: 100%;
display: flex;
justify-content: center;
position: fixed;
padding-top: 150px;
}
.prof{
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin: auto;
}
.name-container{
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 410px;
}
.input-container{
  padding: 10px;
}
    .user-name{
   height: 35px; 
   font-size: 20px;
   padding: 5px;
   margin: 10px 5px;
   text-align: left;
   font-weight: 600;
   width: 80%;
   outline: none;
   border-top: none;
    border-left: none;
 border-right: none;
 border-bottom: none;
}
.input-form{
  display: flex;
  flex-direction: row;
  height: 50px;
  border-bottom: 1px solid #000;
  i{
    font-size: 40px;
    color: #000;
}
}
.join-button{
  height: 45px;
  font-size: 20px;
  width: 99%;
  margin-top: 20px;
}
.roomDescript{
  width: 100%;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50px;
  z-index: 20;
}
.text-input{
  height: 550px;
  background-image: url('./img/chatbackground.jpg');
  background-size: 100% 100%;
  width: 100%;
}
.text-input-msg{
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
 display: flex;
  flex-direction: row;
}
.container-mess{
  background-color: rgba(0,0,0, 0.8);
  width: 90%;
  display: flex;
  flex-direction: row;
  height: 50px;
  border-radius: 20px;
}
.text-message{
  border-radius: 20px;
  height: 100%;
  width: 250px;
  padding: 10px;
  outline: none;
  color: #fff;
  background-color: transparent;
  border: none;
}
.btn-send{
 background-color: transparent;
 border: none;
  border-radius:10px;
  border: none;
  color: #fff;
  margin-left: 10px;
  outline: none;
  font-size: 30px;
}
#img{
  display: none;
}
.bi-camera{
  color: #fff;
  margin-left: 10px;
  font-size: 30px;
}
.list-container::-webkit-scrollbar{
  display: none;
}
  .list-container{
    margin-top: 50px;
overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
height: 80vh;
  }
.text-msg{
  background-color: rgba(0,0,0, 0.8);
  position: relative;
  top: 60px;
  margin: 10px 10px ;
  margin-bottom: 40px;
  border-radius:20px ;
  padding: 10px;
  width: 60%;
  color: #fff;
  scroll-snap-align: start;
  scroll-margin-bottom: 50px;
}
  .imagePreviewWrapper{
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: #fff;
    width: 100%;
    height: 400px;
    
  }
  .imgView{
    height: 320px;
    width: 90%;
    border: dashed;
    margin:10px auto;
    display: block;
    background-size: 100% 100% !important;
  }
  .img-msg{
    background-color: #fa31e9;
    border-radius: 15px;
    width: 57%;
    margin: 10px 10px;
    color: #fff;
    text-align: center;
  }
   .msgImg{
     height: 300px;
     width: 100%;
     border-radius: 10px;
     
   }



</style>
<script>
import { reactive,  ref } from 'vue';
import io from "socket.io-client";
export default {
  name:'Contact_pages',
 setup(){
   const roomName = ref("");
 const roomDescript = ref("");
   const state = reactive({
     roomName:"",
 roomDescript:""
   });
   const Login = () => {
     if (roomName.value != "" || roomName.value != null) {
  
 state.roomDescript = roomDescript.value;
    state.roomName =  roomName.value;
roomName.value = "";
roomDescript.value = "";
     }
   }
  
  
return{
  roomDescript,
  roomName,
  Login,
  state,
  
}
 },
 

  data() {
    return {
      previewImage: null,
imagePreviewWrapper: false,
      joined: false,
      currentUser: "",
      text: "",
     fileInput: "",
      messages: [],
    };
  },
  methods: {
/// ########################## 
    selectImage(){
     this.$refs.fileInput.click()
    },
    
    pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
        },
    
   toggleImg(){
      this.imagePreviewWrapper = !this.imagePreviewWrapper
    },
    CloseImg(){
      this.imagePreviewWrapper = !this.imagePreviewWrapper
      this.previewImage = ""
    },
    sendMsgImg(){
this.fileInput = "";
this.addMsgImg();
},
addMsgImg() {
      const message = {
        id: new Date().getTime(),
        fileInput: this.fileInput,
        user: this.currentUser,
      };

     this.messages = this.messages.concat(message);
      this.socketInstance.emit('message', message);
    },
/// ########################## 
    join() {
      this.joined = true;
      this.socketInstance = io("http://localhost:3000");

      this.socketInstance.on(
        "message:received", (data) => {
          this.messages = this.messages.concat(data);
        }
      )
    },
    
    sendMessage() {
      this.addMessage();
      this.text = "";
    },
    addMessage() {
      const message = {
        id: new Date().getTime(),
        text: this.text,
        user: this.currentUser,
        
      };

      this.messages = this.messages.concat(message);
      this.socketInstance.emit('message', message);
    },
  },
       
}

</script>
