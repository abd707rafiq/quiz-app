<template>
  <div class="px-0 container-fluid ">
    <div
      class="d-flex flex-row justify-content-between ` shadow p-2"
      style="background-color: #072c50da !important"
    >
      <div class=""><h1 class=" heading_1">HR Training Consultancy</h1></div>
      <div class="right" style="max-width: 350px; width: 90%">
        <div class="row w-100 justify-content-between">
          <div class="col-5">
            <button data-bs-toggle="modal" data-bs-target="#myModal" >
              <router-link to="/create" @click="pupopShow">Create</router-link>
              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Modal title</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div class="col-3">
            <div class="dropdown">
              <button
                class="text-white py-1"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                style="height: 60px"
              >
                <i class="fa-regular fa-user larger-icon icon_color"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="dropdown">
              <button
                class="text-white py-1"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                style="height: 60px"
              >
                <i class="fa-regular fa-bell larger-icon icon_color"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- side_bar  -->
    <div class="row side_bar w-100" style="height: calc(100vh - 96px);">
      <div
        class="col-1 flex-column d-flex justify-content-between shadow "
        style="height: calc(100vh - 96px)"
      >
        <div class="left row flex-column w-100">
          <div class="col-3 w-100 card card_1 p-0">
            <div class="card-head">
              <button class="p-0">
                <i class="fa-solid fa-house icon_color"></i>
              </button>
            </div>
            <div class="card-body p-0">home</div>
          </div>
          <div class="col-3 w-100 card card_1 p-0">
            <div class="card-head">
              <button class="p-0">
                <i class="fa-solid fa-chart-simple icon_color"></i>
              </button>
            </div>
            <div class="card-body p-0">Reports</div>
          </div>
          <div class="col-3 w-100 card card_1 p-0">
            <div class="card-head">
              <button class="p-0">
                <i class="fa-solid fa-people-group icon_color"></i>
              </button>
            </div>
            <div class="card-body p-0">Groups</div>
          </div>
          <div class="col-3 w-100 card card_1 p-0">
            <div class="card-head">
              <button class="p-0">
                <i class="< fa-solid fa-bars icon_color"></i>
              </button>
            </div>
            <div class="card-body p-0 "><p class="mb-1"><router-link to="/adminpanel/record" class="text-dark">Records</router-link></p></div>
          </div>
        </div>
        <div class="right col-11">
          <div class="col-12 w-100 card p-0 card_1">
            <div class="card-head">
              <button class="p-0">
                <i class="fa-regular fa-circle-question icon_color"></i>
              </button>
            </div>
            <div class="card-body p-0">Help</div>
          </div>
        </div>
      </div>
      <!--record card detail -->
      <div class="col-8 card card_record mt-3 pt-3 m-auto ">
        <ul class="nav pb-2">
          <li class="nav-item">
          <h5><a href="#title" class="nav-link text-dark active" data-bs-toggle="tab">HR Training Consultancy</a></h5>
          </li>
          <li class="nav-item">
       <h5>     <a href="#draft" class="nav-link text-dark " data-bs-toggle="tab">My drafts</a></h5>
          </li>
        </ul>
        <div class="tab-content pe-2">         
         
           <div class="tab-pane fade show active my-2" id="title">
            <div class="card my-2">
              <div class="row">
                <div class="col-4 m-auto ps-4">
                  <img
                    src="../assets/profile-img/img-2.jpg"
                    alt=""
                    style="max-width: 100px;"
                  />
                  
                </div>
                <div class="col-8 pt-3">
                  <h3 class="mb-3 " style="font-weight: 600;">Title-Name </h3>
                  <p  >email-zainmehmood &nbsp;&nbsp;  <span class="player_span ">0 plays</span></p>                  
                </div>
              </div>
            </div>  
            <div class="card my-2">
              <div class="row">
                <div class="col-4 m-auto ps-4">
                  <img
                    src="../assets/profile-img/img-2.jpg"
                    alt=""
                    style="max-width: 100px;"
                  />
                  
                </div>
                <div class="col-8 pt-3">
                  <h3 class="mb-3 " style="font-weight: 600;">Title-Name </h3>
                  <p  >email-zainmehmood &nbsp;&nbsp;  <span class="player_span ">0 plays</span></p>                  
                </div>
              </div>
            </div>  
            <div class="card my-2">
              <div class="row">
                <div class="col-4 m-auto ps-4">
                  <img
                    src="../assets/profile-img/img-2.jpg"
                    alt=""
                    style="max-width: 100px;"
                  />
                  
                </div>
                <div class="col-8 pt-3">
                  <h3 class="mb-3 " style="font-weight: 600;">Title-Name </h3>
                  <p  >email-zainmehmood &nbsp;&nbsp;  <span class="player_span ">0 plays</span></p>                  
                </div>
              </div>
            </div>  
            <div class="card my-2">
              <div class="row">
                <div class="col-4 m-auto ps-4">
                  <img
                    src="../assets/profile-img/img-2.jpg"
                    alt=""
                    style="max-width: 100px;"
                  />
                  
                </div>
                <div class="col-8 pt-3">
                  <h3 class="mb-3 " style="font-weight: 600;">Title-Name </h3>
                  <p  >email-zainmehmood &nbsp;&nbsp;  <span class="player_span ">0 plays</span></p>                  
                </div>
              </div>
            </div>  
                     
          </div>
           <div class="tab-pane my-2" id="draft">
            <div class="card">
              <div class="row">
                <div class="col-4 " style="max-width: 200px;">
                  <img
                    src="../assets/profile-img/img-2.jpg"
                    alt=""
                    class="w-100"
                  />
                  
                </div>
                <div class="col-8">
                  <h3>My-draft </h3>
                  <p  >email-zainmehmood &nbsp;&nbsp; </p>                  
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div class="records_all">
          <p><router-link to="/adminpanel/record" class="text-dark"> see all</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
import { onMounted,ref } from "vue";
import { RouterLink } from "vue-router";
let myModal= ref(null);
onMounted(()=>{
 myModal.value = new bootstrap.Modal(document.getElementById('myModal'))
})
function pupopShow()
{
 if(myModal.value){
  myModal.value.show()
 }
}


</script>
<style scoped>
.container-fluid {
 background-color: #072c50da !important
  ;
}
.larger-icon {
  font-size: 30px;
}
a {
  color: white;
  text-decoration: none;
}
.card_1 {
  max-width: 150px;
  width: 100%;
  margin-bottom: 8px;
  border-radius: 10px;
}
.card_1 button {
  border-radius: 10px;
}
.card-body {
  text-align: center;
}
button:hover {
  color: white;
}
/* .icon_color */
.icon_color {
  color:white;
}

/* ########### tab content styling ####? */
.card_record{
 min-height: 200px;
 height: 500px;

 box-shadow: 10px 10px 10px black;
 transition: all 1s ease;
 border-radius: 15px;
 
}
.card_record:hover{
  transform: scaleX(1.1);
}
.tab-pane .card{
  background-color:#072c50da ;
  color: white;
}
.player_span{
  font-weight: 600;
  font-size: bold;
  color: green;
}
.tab-pane .card:hover{
transform: scaley(1.1);
}
.tab-content{
  height: 400px;
  overflow-y: auto;
  overflow-x:hidden ;
}
.records_all{
  padding-top: 70px;
   text-align: center;
}

.nav-link{
  position: relative;
}
.nav-link::after{
  content:' ' ;
  height: 2px;
  width:100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0;
  transition: all 1s ease;

}
.nav-link:hover::after{
 opacity: 1;
 
}
h5 .nav-link{
  font-size: 30px;
  color: black !important;
  font-weight: 600;
}
.records_all a{
  color: blue !important;
  font-size: 25px;
}
</style>