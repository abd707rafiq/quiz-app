<template >
  <div class="contaier-fluid  " style="background-color: #173e68;">
    <div class="row me-0 p-3 shadow">
      <div class="col-7">
        <div class="row">
          <div class="col-6 logo_div">
            <h2 class="fw-bold text-light" style=" text-shadow: 5px 5px black; font-size: 25px;">HR Training Consultancy</h2>
          </div>
          <div class="col-6">
                <div class="card" >
              <button class=" rounded-2 d-flex justify-content-between p-0 rounded-end-3 " style="max-width: 380px ;min-height: 34px;" >
                <p class="p-2 bg-light rounded-2 fs-5 px-3 mb-0 x" style="width: 250px;" >Enter A Title...</p>
                <p class="py-1 px-2 text-white  rounded-2  mb-0" >Setting</p>
              </button>
            </div>
              </div>
        </div>
      </div>
      <div class="col-5">
        <div class="row justify-content-end">
          <div class="col-4 save_btn">
            <button class="text-white rounded-2" @click="createQuiz">Save</button>
          </div>
          <div class="col-4 exit_btn">
            <button class="text-white rounded-2" >Exit</button>
          </div>
        </div>
      </div>
    </div>
    <main class="border border-dark border-4  " >
      <div class="row">
        <div class="col-3  pt-5">
          <div class="add_btn ms-2">
            <button>Add Question</button>
          </div>
          <div class="slide_btn ms-2">
            <button >Add Slide</button>
          </div>
        </div>
        <div class="main_section col-6  d-flex justify-content-around flex-column " style="height: calc(100vh - 120px);">
          <div class="card rounded-4" style="max-width: 640px; " >
            <input type="text" placeholder="Enter A Question Here....." class="text-center p-2 text-white border-0 rounded-2 fs-3" />
          </div>
          <div class="d-flex flex-column  ">
            <div class="row justify-content-between mb-3">
              <div class="col-5 border border-black border-1 rounded ">
                <div class="row justify-content-between p-3 ">
                  <div class="col-2 bg bg-success text-center px-0 py-3 rounded"><i class="fa-solid fa-circle "></i></div>
                  <div class="col-8 ps-0 rounded-2  border-start-0" >
                    <input type="text" placeholder="Add Answere 1 " class="py-3 rounded-2 rounded-end-3 ps-1" />
                  </div>
                  <div class="col-2  px-0 py-3 rounded-3 text-center border-satart-0" >
                    <input type="checkbox" placeholder="Check Box" />
                  </div>
                </div>
              </div>
              <div class="col-5 border border-black border-1 rounded">
                <div class="row justify-content-between p-3 ">
                  <div class="col-2 bg bg-success text-center px-0 py-3 rounded"><i class="fa-solid fa-circle "></i></div>
                  <div class="col-8">
                    <input type="text" placeholder="Add Answere 1 " class="py-3" />
                  </div>
                  <div class="col-2  text-center px-0 py-3">
                    <input type="checkbox" placeholder="Check Box" />
                  </div>
                </div>
              </div>


            </div>
            <div class="row justify-content-between mb-3">
              <div class="col-5 border border-black border-1 rounded ">
                <div class="row justify-content-between p-3 ">
                  <div class="col-2 bg bg-success text-center px-0 py-3 rounded"><i class="fa-solid fa-circle "></i></div>
                  <div class="col-8 ">
                    <input type="text" placeholder="Add Answere 1 " class="py-3" />
                  </div>
                  <div class="col-2  px-0 py-3 ">
                    <input type="checkbox" placeholder="Check Box" />
                  </div>
                </div>
              </div>
              <div class="col-5 border border-black border-1 rounded">
                <div class="row justify-content-between p-3 ">
                  <div class="col-2 bg bg-success text-center px-0 py-3 rounded"><i class="fa-solid fa-circle "></i></div>
                  <div class="col-8">
                    <input type="text" placeholder="Add Answere 1 " class="py-3" />
                  </div>
                  <div class="col-2  text-center px-0 py-3">
                    <input type="checkbox" placeholder="Check Box" />
                  </div>
                </div>
              </div>


            </div>
            <div class="row justify-content-between">
              <div class="col-5 border border-black border-1 rounded ">
                <div class="row justify-content-between p-3 ">
                  <div class="col-2 bg bg-success text-center px-0 py-3 rounded"><i class="fa-solid fa-circle "></i></div>
                  <div class="col-8 ">
                    <input type="text" placeholder="Add Answere 1 " class="py-3" />
                  </div>
                  <div class="col-2  px-0 py-3 ">
                    <input type="checkbox" placeholder="Check Box" />
                  </div>
                </div>
              </div>
              <div class="col-5 border border-black border-1 rounded">
                <div class="row justify-content-between p-3 ">
                  <div class="col-2 bg bg-success text-center px-0 py-3 rounded"><i class="fa-solid fa-circle "></i></div>
                  <div class="col-8">
                    <input type="text" placeholder="Add Answere 1 " class="py-3" />
                  </div>
                  <div class="col-2  text-center px-0 py-3">
                    <input type="checkbox" placeholder="Check Box" />
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
        <!-- right side  -->
        <div class="col-3">
          <div class="top d-flex flex-column justify-content-between gap-5">
            <div class="card mt-4 p-2 me-2">
              <h1 class="right_card_heading">Quiz Type</h1>
              <select class="form-select mb-3" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="card mb-3 p-2 me-2">
              <h1 class="right_card_heading"> Duration</h1>
              <select class="form-select mb-3" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="card p-2 me-2">
              <h1 class="right_card_heading">Points</h1>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="delet_duplicate d-flex me-2" >
              <button class="text-white fs-6 rounded-3 me-1" style="background: white;color: black !important; font-weight: 500;">Delete</button>
              <button class="text-white fs-6 rounded-3" style="background: white;color: black !important; font-weight: 500;">Duplicate</button>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const quizData = ref({
  name: "",
  backgroundImage: "",
  description: "",
  creatorName: "",
  pointsPerQuestion: 10,
  isPublic: true,
  tags: "",
  likesCount: 0,
  questionList: [],
});

// Replace 'YOUR_ACTUAL_TOKEN' with the actual token obtained after user authentication
const token = "x-auth-token";

const createQuiz = () => {
  axios.post('http://localhost:5000/create', quizData.value, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log('Quiz created successfully', response.data);
    })
    .catch((error) => {
      console.error('Error creating quiz', error);
    });
};
</script>


<style scoped>
.add_btn button,
.save_btn button,
.exit_btn button {
  color: black !important;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  max-width: 150px;
 background: white;
transition: all 2s ease;
font-weight: 500;
}
.add_btn button:hover,
.save_btn button:hover,
.exit_btn button:hover{
  background: linear-gradient(yellow,red);
} 


.slide_btn button {
color :black ;
  font-size: 18px;
  background-color: white;
  border: 0.5px solid grey;
  border-radius: 10px;
  margin-left: 10px;
  max-width: 150px;
  transition: all 2s ease-in-out; 
  font-weight: 500;
 
}
.slide_btn button:hover{
  background: linear-gradient(yellow,red);
}



.card .right_card_heading {
  font-size: 17px;
  color: black;
}

.main_section {
  overflow: auto;
}

.main_section .col-8 input {
  border: none;
  outline: none;
}
</style>
