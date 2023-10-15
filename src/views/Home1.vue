<template>
    <div class="container-fluid">
      <div class="container ">
        <main class="pt-5">
          <h1 class="text-center text-white heading_1">HR Training Consultancy</h1>
        <div class=" text-center mt-4">       
            <div class="card gap-3 py-5 ">
              <div class="card-head ">
                <input
                  type="text "
                  class="text-center"
                  placeholder="Enter A Game Pin"
                />
              </div>
              <div class="card-body">
                <button class="text-white"><router-link to="/name">Enter</router-link></button>
              </div>
            </div>
          
        </div>
        </main>
        <footer class="text-center mt-5">
          <div >
              <p>Create your own quiz ? <router-link to="/register"  >Register here </router-link>.</p>
          </div>
          <p><router-link to="#" >Terms</router-link><span >&nbsp;|&nbsp;</span><router-link to="#">Privacy</router-link></p>
          
        </footer>
      </div>
    </div>
  </template>
  <style>
   
  
  .container-fluid {
    background: hwb(210 3% 69%) !important;

    height: 100vh;
  }

</style>
  <style scoped> 
   .heading_1{
    text-shadow: 3px 3px orangered;
    font-size:3rem;
   }
  
  .card{
    max-width: 300px;
    margin:60px auto;
    transition: all 1s ease;
    background: white;
    box-shadow: 10px 10px 6px black;
  }
  .card:hover{
    max-width: 350px;

  }
  input{
      outline: none;
      border: 1px solid silver;
      border-radius: 5px ;
      padding: 10px;
      transition: all 1s ease;
  }
  input:hover{
    transform: scaleX(2);
  }
  .card-body button{
    background: linear-gradient(white,black) !important;
    max-width: 150px;
      width: 100%;
      padding: 10px;   
      font-size: 24px;
      transition: all 500ms ease-in-out;
      border-radius: 10px;
  } 
  .card-body button:hover{
    background: linear-gradient(yellow,red) !important;
    max-width: 160px;
  }
  .card-body button a{
    border: none;
  }
  /* footer styling */
   footer a {
    text-decoration: none;
   
    font-family: bold;
    font-size: 20px;
   } 
 
   footer a:hover{
    border-bottom: 2px solid #072c50da;
    font-family: bold;
    color: green;
   }
   footer p{
    color: white;
    font-size: 16px;
   }
   a{
    text-decoration: none;
    color: white;
    border-bottom: 1px solid white;
    font-size: 16 px;
   }
  
  </style>
  <script setup >
  import { RouterLink } from 'vue-router';
  </script>