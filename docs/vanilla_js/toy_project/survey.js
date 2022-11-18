const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ");

// 설문 문항 리스트
let questions = [
  {
    questions_uid: "Q1",
    question: "1. 해당 매장을 방문시 매장은 청결 하였습니까?",
    answer: "E1 E2 E3",
  },
  {
    questions_uid: "Q2",
    question: "2. 주문시 직원은 고객님께 친절 하였습니까?",
    answer: "E1 E2 E3 E4",
  },
  {
    questions_uid: "Q3",
    question: "3. 주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    answer: "E1 E2",
  },
  {
    questions_uid: "Q4",
    question: "4. 직원이 제조한 음료에 대해 맛은 좋았습니까?",
    answer: "E1 E2 E3 E4 E5",
  },
  {
    questions_uid: "Q5",
    question: "5. 해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    answer: "E1 E2 E3",
  },
];

// 답항 리스트
let answers = [
  { example_uid: "E1", example: "(1) 전혀 아니다." },
  { example_uid: "E2", example: "(2) 아니다." },
  { example_uid: "E3", example: "(3) 보통이다." },
  { example_uid: "E4", example: "(4) 그렇다." },
  { example_uid: "E5", example: "(5) 매우 그렇다." },
];

// 설문 문항 function
function questions_function(i) {
  console.log(`${questions[i]["question"]}`);
}

// 답항 function
function answer_function(answer) {
  if (answer == "E1 E2") {
    console.log("(1)전혀 아니다. (2)아니다.");
  } else if (answer == "E1 E2 E3") {
    console.log("(1)전혀 아니다. (2)아니다. (3)보통이다.");
  } else if (answer == "E1 E2 E3 E4") {
    console.log("(1)전혀 아니다. (2)아니다. (3)보통이다. (4)그렇다.");
  } else if (answer == "E1 E2 E3 E4 E5") {
    console.log(
      "(1)전혀 아니다. (2)아니다. (3)보통이다. (4)그렇다. (5)매우 그렇다."
    );
  }
}

// 설문자 결과 조회 function
function result_function(i) {
  let answers_num = inputs[i] - 1;
  console.log(`${answers[answers_num]["example"]}`);
  console.log(" ");
}

// 설문에 맞는 답항 출력
for (let i = 0; i < questions.length; i++) {
  questions_function(i);
  answer_function(questions[i]["answer"]);
  console.log(" ");
  console.log(`답) (${inputs[i]})`);
  console.log(" ");
}

console.log("------------------ 설문자 선택 ------------------ ");

// 설문자 선택 조회
for (let i = 0; i < questions.length; i++) {
  questions_function(i);
  result_function(i);
}

console.log("이용해주셔서 감사합니다!");
