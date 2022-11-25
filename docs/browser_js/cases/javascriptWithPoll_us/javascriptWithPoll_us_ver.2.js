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

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 },
];

const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  //   { questions_uid: "Q1", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  //   { questions_uid: "Q2", answer_uid: "E4" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" },
];

// 1. 나와야 하는 모양
// 2. 오브젝트 모양으로 나오는게 편할지, 리스트로 묶는게 편할지 생각
// 3. 예상 묶음 데이터 정리
// [
//  [Q1, E1, E2]        -> {questions_uid:Q1 answer_uid:E1, E2}
//  [Q2, E1, E2, E3]    -> {questions_uid:Q2 answer_uid: E1, E2, E3}
//  [Q3, E1, E2]        -> {questions_uid:Q3 answer_uid:E1, E2}
//  [Q4, E1, E2, E3, E4, E5]   -> {questions_uid:Q4 answer_uid:E1, E2, E3, E4, E5}
//  [Q5, E1, E2, E3]    -> {questions_uid:Q5 answer_uid:E1, E2, E3}
// ]
// 1차 방식 : [Q1, Q2, Q3, Q4, Q5]
// 2차 방식 : Array in Array [[Q1, E1, E2], [Q2, E1, E2, E3], ...]
// 3차 방식 : Object in Array [{questions_uid:Q1 answer_uid:[E1, E2]}, ...]
let polls = []; // 전체 묶음
let question_compare;
let questions = {}; // 내부 묶음
let answer_uids = []; // 내부 설문 답변 묶음
for (idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (Object.keys(questions).length > 0) {
      questions["answer_uid"] = answer_uids;
      polls.push(questions);
      questions = {};
      answer_uids = [];
    }
    // console.log(`!== : ${questions_answers[idx]["questions_uid"]}`);
    // console.log(`!== : ${questions_answers[idx]["answer_uid"]}`);
    questions["questions_uid"] = questions_answers[idx]["questions_uid"];
    answer_uids.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`!== : ${questions_answers[idx]["answer_uid"]}`);
    answer_uids.push(questions_answers[idx]["answer_uid"]);
  }
  if (idx + 1 == questions_answers.length) {
    questions["answer_uid"] = answer_uids;
    polls.push(questions);
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 대입
}
// console.log(`${polls}`);

// 출력
// [
// {questions_uid:Q1 answer_uid:[E1, E2]},
// {questions_uid:Q2 answer_uid: E1, E2, E3},
// ...]
// polls[0]["questions_uid"];
// polls[0]["answer_uid"][0];
// polls[0]["answer_uid"][1];

// polls[1]["questions_uid"];
// polls[1]["answer_uid"][0];
// polls[1]["answer_uid"][1];
// polls[1]["answer_uid"][2];

// 설문 문항을 가져오는 function
// Q1. 해당 매장을 방문시 매장은 청결 하였습니까?
// 1. E1
// 2. E2
// Q2. 주문시 직원은 고객님께 친절 하였습니까?
// ...

// 설문 문항 function
// function getQuestionByUid(question_uid) {
//   let question_desc;
//   questions_list.forEach((questions_list, index) => {
//     if (question_uid == questions_list["questions_uid"]) {
//       question_desc = questions_list["question"];
//     }
//   });
//   return question_desc;
// }
// ^^^위 코드와 동일한 반복문^^^
function getQuestionByUid(question_uid) {
  //question_uid = 'Q1'
  let question_desc = "";
  for (question of questions_list) {
    if (question["questions_uid"] === question_uid) {
      question_desc = question["question"];
      break;
    }
  }
  return question_desc;
}

// 설문 답항 function
// function getAnswerByUid(answer_uid) {
//   let answer_desc;
//   answer_list.forEach((answer_list, index) => {
//     if (answer_uid == answer_list["answer_uid"]) {
//       answer_desc = answer_list["answer"];
//     }
//   });
//   return answer_desc;
// }
// ^^^위 코드와 동일한 반복문^^^
function getAnswerByUid(answer_uid) {
  let answer_desc = "";
  for (answer of answer_list) {
    if (answer["answer_uid"] === answer_uid) {
      answer_desc = answer["answer"];
      break;
    }
  }
  return answer_desc;
}

// 설문과 답항 출력
for (poll of polls) {
  let question_desc = getQuestionByUid(poll["questions_uid"]);
  // console.log(`${poll["questions_uid"]}. ${question_desc}`); // poll == polls[idx]
  let answer_uids = poll["answer_uid"];
  answer_uids.forEach((answer_uid, index) => {
    // answers
    // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
  });
}

// Event handlers
// Next 클릭 시 순서 있게 설문 표시
// 대상 변수는 polls
let queryNext = document.querySelector("#next");
queryNext.addEventListener("click", setPollContent);

let index = 0;
function setPollContent() {
  if (index > polls.length - 1) {
    alert("마지막 페이지입니다.");
  }
  let queryContent = document.querySelector("#poll");
  // polls[0]["questions_uid"]; // 설문 문항
  // polls[0]["answer_uid"]; // 설문 답항 묶음
  // 1. 매장 상태가 좋은가요?
  //  (1) 예
  //  (2) 아니다
  // console.log(getQuestionByUid(polls[index]["questions_uid"]));
  let desc = `<div>${index + 1}. ${getQuestionByUid(
    polls[index]["questions_uid"]
  )}</div>`;
  polls[index]["answer_uid"].forEach((answer_uid, index) => {
    // answers
    // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
    let button = `<input type="radio" name="button" id="${index}"></input>`;
    desc =
      desc +
      `<div>${button} (${index + 1}) ${getAnswerByUid(answer_uid)}</div>`;
  });
  queryContent.innerHTML = desc;
  index++;
}

let queryPre = document.querySelector("#pre");
queryPre.addEventListener("click", setPrePollContent);

function setPrePollContent() {
  if (index < 2) {
    alert("첫번째 페이지입니다.");
  }
  let queryContent = document.querySelector("#poll");
  let desc = `<div>${index - 1}. ${getQuestionByUid(
    polls[index - 2]["questions_uid"]
  )}</div>`;
  polls[index - 2]["answer_uid"].forEach((answer_uid, index) => {
    let button = `<input type="radio" name="button" id="pre${index}"></input>`;
    desc =
      desc +
      `<div>${button} (${index + 1}) ${getAnswerByUid(answer_uid)}</div>`;
  });
  queryContent.innerHTML = desc;
  index--;
}
