tem<template>
    <div class="container-fluid">
      <div class="container pt-5">
        <main class="pt-5">
          <h1 class="text-center text-white heading_1">HR Training Consultancy</h1>
        <div class=" text-center mt-4">       
            <div class="card gap-3 py-5 ">
              <div class="card-head ">
                <input
                  type="text "
                  class="text-center"
                  placeholder="Enter A Name"
                />
              </div>
              <div class="cad-body">
                <button class="text-white"><router-link to="/user">Enter</router-link></button>
              </div>
            </div>
          
        </div>
        </main>
        
      </div>
    </div>
  </template>
  <style>
    button{
      max-width: 210px;
      width: 100%;
      padding: 10px;
      background-color:#072c50 ;
      font-size: 24px;
  }
  button:hover{
    background-color: black;
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
  button{
    background: linear-gradient(white,black) !important;
    max-width: 150px;
      width: 100%;
      padding: 10px;   
      font-size: 24px;
      transition: all 500ms ease-in-out;
      border-radius: 10px;
  } 
  button:hover{
    background: linear-gradient(yellow,red) !important;
    max-width: 160px;
  }

  /* ###### */
  
  
 

  
 
a{
    text-decoration: none;
    color: white;
} 
 
   
  </style>
  <script setup >
  import { RouterLink } from 'vue-router';
  </script>