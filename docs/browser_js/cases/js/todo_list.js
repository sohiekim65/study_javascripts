let queryInputDesc = document.querySelector("#inputDesc");
let queryInput = document.querySelector("#input");
let queryBtn = document.querySelector("#inputBtn");

// 엔터 input
queryInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    inputDesc();
  }
});

// 버튼 input
queryBtn.addEventListener("click", (event) => {
  if (event.target == queryBtn) {
    inputDesc();
  }
});

// input
function inputDesc() {
  let inputText = queryInput.value;
  if (queryInput.value == "") {
    alert("내용을 입력해주세요.");
    return;
  }
  let newItem = `<li class="list">
                <span class="item">
                ${inputText}
              </span>
              <span class="icon">
                <span class="delete">
                <i class="material-icons" id="delete">delete</i>
                </span>
                <span class="favorite">
                <i class="material-icons" id="favorite">favorite_border</i>
              </span>
              </span>
        </li>`;

  queryInputDesc.insertAdjacentHTML("beforeend", newItem);
}

// 삭제, 좋아요
queryInputDesc.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  } else if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
  } else if (event.target.innerHTML == "favorite") {
    event.target.innerHTML = "favorite_border";
  } else {
    return;
  }
});
