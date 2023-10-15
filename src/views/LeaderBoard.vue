<template >
  <div style="background-color: #072c50e0; height: 100vh">
    <nav
      style="background-color: #072c50e0"
      class="d-flex justify-content-between p-3 shadow"
    >
      <div class="logo">
        <h1 class="text-white fw-bold heading_1">HR Training Consultancy</h1>
      </div>
      <div class="right_side d-flex justify-content-around">
        <div class="notification_icon ">
          <button
            style="background: white;color: black !important; width: 70px"
            class="p-0 pt-2 rounded-3"
          >
            <i class="fa-solid fa-magnifying-glass" style="font-size: 30px">
            </i>
          </button>
        </div>
        <div class="notification_icon">
          <button
            style="background: white;color: black !important; width: 70px"
            class="p-0 pt-2 rounded-3"
          >
            <i class="fa-regular fa-bell " style="font-size: 30px"> </i>
          </button>
        </div>
        <div class="img_div  rounded-1" style="max-width: 40px">
          <button
            style="background: white;color: black !important; max-width: 40px"
            class="p-0  "
          >
          <img src="../assets//profile-img/img-2.jpg" alt="" class="w-100 " style="height: 41px;" />
          </button>
         
        </div>
      </div>
    </nav>
    <div class="container">
      <main>
        <div class="rwo">
          <h1 style="font-size: 30px" class="my-4 text-white  ">
            Players-Ranking
          </h1>
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <h2 style="font-size: 20px" class="text-white display-1">
                  Your Score &nbsp;
                  <span style="color: rgb(144, 216, 63)">123.3 pts</span>
                </h2>
              </div>
              <div class="col-2">
                <h1 style="font-size: 20px" class="display-1">
                  Position
                  <span
                    ><button
                      style="
                        background: white;color: black !important;
                        width: 40px;
                      "
                      class="py-0 rounded-3"
                    >
                      <i
                        class="fa-solid fa-arrow-down"
                        style="font-size: 15px; color: black"
                      ></i>
                    </button>
                  </span>
                </h1>
              </div>
              <div class="col-2">
                <button
            style="background: white;color: black !important; width: 200px;height: 36px;"
            class="p-0 pt-1 rounded-3"
          >
           <p style="font-size: 16px;" class="fw-bold">  Show On List</p>
          </button>
              </div>
            </div>
          </div>
        </div>
        <Profile />
      </main>
    </div>
  </div>
</template>
<script setup>
import Profile from "../components/leader-board-compo/Profile.vue";
</script>

<style setup>
.heading_1{
  color: white;
  text-shadow: 3px 3px orangered;
    font-size:3rem;
    margin-bottom: 0px;
}
h1{
  color: white;
}

.right_side {
  max-width: 400px;
  width: 100%;
  justify-content: space-between;
}

.img_div {
  width: 50px;
  height: 50px;
  border: 2px solid transparent;
  border-image: linear-gradient(45deg, yellow, red);
  border-image-slice: 1;
}
</style>