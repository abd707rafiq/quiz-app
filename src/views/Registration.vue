<template>
 <div class="container-fluid">
   <div class="container py-3 ">
   <div class="card pt-4" >
    <h1 class="heading_1">Registration Form</h1>
    <form class="mt-3 p-2  w-100" @submit.prevent="registerUser">
       <div class="mb-2">
        <label for="exampleInputEmail1" class="form-label">User Type</label>
        <input
          type="string"
          class="form-control"
          v-model="userType"
          placeholder="Enter Your first Name"
        />
        </div>
        <div class="mb-2">
        <label for="exampleInputEmail1" class="form-label">User Name</label>
        <input
          type="string"
          class="form-control"
         v-model="userName"
          placeholder="Enter Your first Name"
        />
        </div>
        
      
      <div class="mb-2">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="string"
          class="form-control"
          
           v-model="mail"
          placeholder="Enter Your Email"
        />
      </div>
      <div class="mb-2">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="string"
          class="form-control"
          
           v-model="password"
          placeholder="Enter Your Password"
        />
      </div>
      
<button style="max-width: 400px;" ><router-link to="/adminpanel" type="submit" class="text-white  register ">Register</router-link></button>
      <router-link to="/login" type="submit" class="mt-4 login" style="color: #072c50"
        >LogIn</router-link
      >
    </form>
   </div>
  </div>
  </div>
</template>
<script setup>

import axios from "axios";
import { ref } from 'vue';


const userType = ref('');

const userName = ref('');
const mail = ref('');
const password = ref('');

async function registerUser() {
  const data = {
    userType: userType.value,
    
    userName: userName.value,
    mail: mail.value,
    password: password.value,
  };

  try {
    const response = await axios.post('http://localhost:5000/register', data);
    
    console.log('User registered:', response.data);
    
  } catch (error) {
    console.error('Registration failed:', error);
    
  }
}

</script>
<style scoped>
/* .container-fluid{
  background-color: white !important;
} */
.heading_1{
  font-size: 30px;
  
  font-weight: 500;
  margin-bottom: 0px;
  color: #072c50 !important;
}
.card{   
  max-width: 570px;
  margin: auto;
  
  transition: all 1s ease;  
  border-radius: 20px;
  box-shadow: 10px 10px 3px black;
}
.card:hover{
  transform: scale(.9);
}
form {
  max-width: 400px;
  margin: auto;
}
.container form label {
  font-size: 20px;
  font-weight: 500;
  display: inherit;
  text-align: start;
}
.container {
  text-align: center;
}
/* link styling */
a {
  color: #072c50;
  font-size: 20px;
  text-decoration: none;
  font-weight: 500;
}
button{
  background-color:#072c50  ;
  transition: all 1s ease-in-out !important;
}
button:hover{
  background: linear-gradient(yellow,red);
}
.login{
  border-bottom: 3px solid white;
  color: #072c50 !important;
  transition: all 1s ease;
  font-weight: bold;
}
.login:hover{
  color: black  !important;
  border-bottom: 3px solid  black ;
}
.register{
  color: white;
  transition: all 1s ease;
}
.register:hover{
  color: black !important;

}

</style>