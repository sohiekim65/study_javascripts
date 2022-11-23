const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ");

// 설문 문항들
let qusetionsList = [
  {
    questionUid: "Q1",
    question: "해당 매장 방문시 매장은 청결 하였습니까?",
    order: 1,
  },
  {
    questionUid: "Q4",
    question: "직원이 제조한 음료에 대한 맛은 좋았습니까?",
    order: 4,
  },
  {
    questionUid: "Q2",
    question: "주문 시 직원은 고객님께 친절 하였습니까?",
    order: 2,
  },
  {
    questionUid: "Q5",
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    order: 5,
  },
  {
    questionUid: "Q3",
    question: "주문하신 음료가 나오기까지의 시간이 적당하였습니까?",
    order: 3,
  },
];

// 응답 항목들
let exampleList = [
  { exampleUid: "E5", example: "매우 그렇다", order: 5 },
  { exampleUid: "E1", example: "전혀 아니다", order: 1 },
  { exampleUid: "E4", example: "그렇다", order: 4 },
  { exampleUid: "E2", example: "아니다", order: 2 },
  { exampleUid: "E3", example: "보통이다", order: 3 },
];

// 설문 별 응답 가능한 항목들

const questions_answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];

let question_compare;
let idx;
let polls = [];
let questions = []; // questions and answers
for (idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (questions.length > 0) {
      polls.push(questions);
      questions = [];
    }
    questions.push(questions_answers[idx]["questions_uid"]);
    questions.push(questions_answers[idx]["example_uid"]);
    console.log(
      `!= : ${questions_answers[idx]["questions_uid"]}, ${questions_answers[idx]["example_uid"]}`
    );
  } else {
    questions.push(questions_answers[idx]["example_uid"]);
    console.log(
      `== : ${questions_answers[idx]["questions_uid"]}, ${questions_answers[idx]["example_uid"]}`
    );
    if (idx + 1 >= questions_answers.length) {
      polls.push(questions);
    }
  }

  question_compare = questions_answers[idx]["questions_uid"];
}
for (let j = 0; j < polls.length; j++) {
  console.log(polls[j]);
}
