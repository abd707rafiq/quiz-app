<template>
   <div class="container-fluid pt-5"> 
    <div class="container">
      <div class="card">
        
        <form class="mt-5 p-2 " @submit.prevent="loginUser">
           
   
  <div class="mb-3">
    <h1 class="heading_1">LogIn Form</h1>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="string" class="form-control" v-model="mail" placeholder="Enter Your Email">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="string" class="form-control" v-model="password" placeholder="Enter Your Password">
  </div>
  
<button style="max-width: 400px;">  <router-link to="/adminpanel" type="submit" class="text-white">LogIn</router-link></button>
  <router-link to="/register"  class="mt-4 register " style="color:#072c50 ">Register</router-link>
</form>
      </div>
  

    </div></div>
</template>
<script setup>

import axios from "axios";
import { ref } from "vue";

const mail = ref('');
const password = ref('');

const loginUser = async () => {
  const data={
    mail: mail.value,
    password: password.value,

  }

  try {
    const response = await axios.post("http://localhost:5000/login", data);
    console.log('User login', response.data);

    
    const token = response.data.token;
    localStorage.setItem("token", token);

    
   
  } catch (error) {
    console.error("Login failed", error);
   
  }
}

</script>
<style scoped>
.heading_1{
  font-size: 30px;
  color: black;
  font-weight: 600;
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
button{
  background: linear-gradient(white  ,black);
  transition: all 1s ease-in-out !important;
  margin-bottom: 15px;
}
button:hover{
  background: linear-gradient(yellow,red);
}
.register{
  color: white !important;
 font-weight: bold;
 transition: all 1s ease;
 border-bottom: 3px solid white;
}
.register:hover{
  color: black !important;
  border-bottom: 3px solid black;
}


/* ###3##>??= */
form{
    max-width:400px ;margin: auto;
}
.container form label{
    font-size: 20px;
    font-weight: 500;
   display: inherit;
   text-align: start;
}
.container{
    text-align: center;
}
/* link styling */
a{
    color:#072c50;
    font-size: 20px;
    text-decoration: none;
    font-weight: 500;
}

</style>