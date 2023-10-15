tem<template>
  <div class="container-fluid">
    <div class="row py-3">
      <div class="col-12 ">
        <h1 class="heading_1">HR Training Consultancy</h1>
      </div>      
    </div>
    <div class="container py-2">
      <div class="row text-center">
        <div class="card p-2 rounded-3 text-white q_card" style="background: #072c50">
          <h1 class="heading_2">what is your name ?</h1>
        </div>
      </div>
      <div class="mt-3"><h2 class="text-capitalize text-dark text-center p-3 " style="font-size: 24px;">choose the correct answere</h2></div>
      <div class="row ">
        <div class="col-6 mb-3 choice_div">
        <div class="rounded-4 danger choice_box d-flex py-3 choice_box" style="background-color: #072c50;"> <input type="checkbox"  class="d-inline-block w-100 checkbox"  id="1"><label style="font-size: 16px;" for="1"  class="d-inline-block w-100 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione.</label></div>
        </div>
        <div class="col-6 mb-3 choice_div">
        <div class="rounded-4 danger choice_box d-flex py-3" style="background-color: #072c50;"> <input type="checkbox"  class="d-inline-block w-100 checkbox"  ><label style="font-size: 16px;"  class="d-inline-block w-100 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione.</label></div>
        </div>
        <div class="col-6 mb-3 choice_div">
        <div class="rounded-4 danger choice_box d-flex py-3" style="background-color: #072c50;"> <input type="checkbox"  class="d-inline-block w-100 checkbox"  ><label style="font-size: 16px;"  class="d-inline-block w-100 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione.</label></div>
        </div>
        <div class="col-6 mb-3 choice_div">
        <div class="rounded-4 danger choice_box d-flex py-3" style="background-color: #072c50;"> <input type="checkbox"  class="d-inline-block w-100 checkbox"  ><label style="font-size: 16px;"   class="d-inline-block w-100 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione.</label></div>
        </div>
        
      </div>
      <footer>
        <div class="row">
          <div class="col-6 "><button class="rounded-4"><router-link to="/user"><i class="fa-solid text-white fa-arrow-left "></i></router-link></button></div>
          <div class="col-6 text-end"><button class="rounded-4"><router-link to="/leaderboard"><i class="fa-solid text-white fa-arrow-right"></i></router-link></button></div>
        </div>
      </footer>
    </div>
  </div>
</template>
  <style>
button {
  max-width: 170px;
  width: 100%;
  padding: 10px;
  background-color: #072c50;
  font-size: 24px;
}
button:hover {
  background-color: black;
}

</style>
  <style scoped>
  .container-fluid {
background: white !important;
  /* height: 610px; */
  height: 100vh;
}
.heading_1{
  text-shadow: 4px 4px orangered;
    font-size:3rem;
    color: black;
    font-weight: 600;
}

.q_card{
border-radius: 20px;
background-color:  #072c50 !important;
transition: all 1s ease;
}
.q_card:hover{
  background: linear-gradient(45deg,red,yellow) !important;
  transform: scaleY(1.2);
}

.checkbox{
  max-width: 160px !important;
  width: 90% !important;
}
.choice_box {
  background-color: #072c50;
  transition: all 1s ease ;
}
.choice_box:hover{
  transform: scaleY(1.1);
  background: linear-gradient(yellow,red);
}

/* footer button */
footer button{
  background-color:  #072c50;
  transition: all 1s ease;
}
footer button:hover{
  background: linear-gradient(to right,red,yellow);
  transform: scale(1.1);
}
</style>
  <script setup >     
</script>