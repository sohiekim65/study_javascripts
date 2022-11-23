// - 한 문장씩 출력
// Next Button 클릭 시 다음 문항 출력
// 완료 시 선택했던 답항 출력
// javascriptWithPoll.html, js, css
// 동작하는 링크, js링크 공유

const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const example_list = [
  { example: "전혀 아니다", example_uid: "E1", order: 1 },
  { example: "아니다", example_uid: "E2", order: 2 },
  { example: "보통이다", example_uid: "E3", order: 3 },
  { example: "그렇다", example_uid: "E4", order: 4 },
  { example: "매우 그렇다", example_uid: "E5", order: 5 },
];

const answers = [
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

// let question_compare;

// productsData.forEach((productsData, index) => {
//   products += `<div id="list">${productsData["title"]} : ${productsData["weight"]}</div>`;
// });
// queryList.innerHTML = products;

// for (let idx = 0; idx < answers.length; idx++) {
//   if (question_compare == answers[idx]["questions_uid"]) {
//     queryQuestion.innerHTML =
//       questions_list[idx]["order"] + questions_list[idx]["question"];

//     let button = `<input type="radio" name="button" id="button"></input>`;
//     let label = `<label for="button"></label>`;
//     queryAnswer.innerHTML =
//       button + label + answers[idx]["example_uid"] + "</br>";
//   } else {
//     let button = `<input type="radio" name="button" id="button"></input>`;
//     let label = `<label for="button"></label>`;
//     queryAnswer.innerHTML =
//       button + label + answers[idx]["example_uid"] + "</br>";
//   }
//   question_compare = answers[idx]["questions_uid"];
// }

// body.addEventListener("load", init(), false);

let queryQuestion = document.querySelector("#questionList");
// let queryAnswer = document.querySelector("#answerList");
let question_compare;
let idx;
let polls = [];
let questions = []; // questions and answers
for (idx = 0; idx < answers.length; idx++) {
  if (question_compare != answers[idx]["questions_uid"]) {
    if (questions.length > 0) {
      polls.push(questions);
      questions = [];
    }
    questions.push(answers[idx]["questions_uid"]);
    questions.push(answers[idx]["example_uid"]);
    console.log(
      `!= : ${answers[idx]["questions_uid"]}, ${answers[idx]["example_uid"]}`
    );
  } else {
    questions.push(answers[idx]["example_uid"]);
    console.log(
      `== : ${answers[idx]["questions_uid"]}, ${answers[idx]["example_uid"]}`
    );
    if (idx + 1 >= answers.length) {
      polls.push(questions);
    }
  }
  question_compare = answers[idx]["questions_uid"];
}
for (let j = 0; j < polls.length; j++) {
  queryQuestion.innerHTML +=
    j + 1 + ". " + questions_list[j]["question"] + "</br>";
  for (let k = 1; k < polls[j].length; k++) {
    let button = `<input type="radio" name="button" id="button"></input>`;
    queryQuestion.innerHTML +=
      button + "(" + k + ")" + example_list[k - 1]["example"] + "</br>";
  }
  queryQuestion.innerHTML += "</br>";
}
