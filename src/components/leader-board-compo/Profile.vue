<template>
   
      <div class=" profile" style="">
        <div class="row shadow rounded-3 mt-5 " style="background-color: #072c50;">
            <div class="col-2 mt-3 text-white"><h1>Rank.</h1>
                <span style="font-size: 16px;" class="text-capitalize text-white">01</span>
            </div>
            <div class="col-2 my-4"><div class="Profile_div" style="max-width: 57px; width: 90%;">
                <img src="../../assets/profile-img/img-2.jpg" alt="" style=" width: 100%; ">
            </div></div>
            <div class="col-3 mt-3"><h1>Name</h1>
                <span style="font-size: 16px;" class="text-capitalize text-white">hamza</span>
            </div>
        
            <div class="col-3 mt-3"><h1>Duration</h1>
                <span style="font-size: 16px;" class="text-capitalize text-white"> 25 Mints   </span>
            </div>
            <div class="col-2  mt-3"> <h1>Score</h1>
                <span style="font-size: 16px; color: rgb(144, 216, 63);">190.3 &nbsp;  pts</span>
            </div>
        </div>         
        <div class="row shadow rounded-3 mt-5 " style="background-color: #072c50;">
            <div class="col-2 mt-3 text-white"><h1>Rank.</h1>
                <span style="font-size: 16px;" class="text-capitalize text-white">02</span>
            </div>
            <div class="col-2 my-4"><div class="Profile_div" style="max-width: 57px; width: 90%;">
                <img src="../../assets/profile-img/img-2.jpg" alt="" style=" width: 100%; ">
            </div></div>
            <div class="col-3 mt-3"><h1>Name</h1>
                <span style="font-size: 16px;" class="text-capitalize text-white">zain-mehmood</span>
            </div>
            
            <div class="col-3 mt-3"><h1>Duration</h1>
                <span style="font-size: 16px;" class="text-capitalize text-white"> 8 A-M   </span>
            </div>
            <div class="col-2  mt-3"> <h1>Score</h1>
                <span style="font-size: 16px; color: rgb(144, 216, 63);">123.3 &nbsp;   pts</span>
            </div>
        </div>         
       
    </div>        
 
</template>
<script setup></script>
<style scoped>
h1{
    font-size: 20px;
   
}
.Profile_div{
    border: 3px solid transparent;
 border-image: linear-gradient(45deg,yellow ,red);
    border-image-slice: 1;
  
}
.row{
    border: 3px solid transparent;
     border-image: linear-gradient(45deg,yellow ,red);
    border-image-slice: 1;
   
   
}
.col-2 h1,.col-3 h1{
    color:white;
    font-weight: 600;
    font-size: 24pxs;
}
/* .profile{
    max-height: 350px;
    overflow-y: auto;
    overflow-x:hidden ;
} */
</style>        