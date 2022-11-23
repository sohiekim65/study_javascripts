function changeText(event) {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "Change on Me!";
}

let queryClickalert = document.querySelector("#clickalert");
// 사용방법
// element.addEventListener(event, function, useCapture);
queryClickalert.addEventListener("click", clickAlert);
function clickAlert(event) {
  alert("Click on Me!");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);
function targetText(event) {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "변경되었습니다!";
}
