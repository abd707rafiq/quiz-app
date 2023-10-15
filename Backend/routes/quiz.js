const express = require("express");
const router = express.Router();

const {
  createQuiz,
  getQuizes,
  getPublicQuizes,
  getQuizesBySearch,
  getTeacherQuizes,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  addQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
 
} = require("../controllers/quiz");
const authMiddleware = require('../middleware/auth');
router.use(authMiddleware)

    router.get("/get",getQuizes)
    
    router.post("/create",createQuiz);

router.get("/public", getPublicQuizes)
router.get("/search", getQuizesBySearch)

router.get("/teacher/:teacherId", getTeacherQuizes)

router
    .route("/:id")
    .get(getQuiz)
    .patch(updateQuiz)
    .delete(deleteQuiz);



router
    .route('/:quizId/questions')
    .post(addQuestion)
    .get(getQuestions);

router
    .route('/:quizId/questions/:questionId')
    .get(getQuestion)
    .patch(updateQuestion)
    .delete(deleteQuestion)

module.exports = router;
