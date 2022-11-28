// for문으로 돌려서 하나하나 event 주기
// let queryInputAll = document.querySelectorAll("input");
// for (let queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }

let newItem = `<li>
                <div>
                    <input type="checkbox" name="" id="item3">
                    <label for="item3">item three</label>
                </div>
            </li>`;

let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undeifined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    event.target.remove();
  }
}); // 상위 element에 event 설정(하위도 모두 event 걸림 - bubble방식)

// 기존꺼에서 newItem해주면 새로운 string으로 인식하여 element만 남아있고
// event가 사라지고 정체성을 잃어버리게 된다.
// queryItemList.innerHTML = queryItemList.innerHTML + newItem;

// insertAdjacentHTML로 HTML 넣어주기
// queryItemList.insertAdjacentHTML("beforeend", newItem);
// queryItemList.insertAdjacentHTML("beforebegin", newItem);

// 원래 걸었던 이벤트 갱신 => 기존 이벤트는 사라졌음
// let queryInputs = document.querySelectorAll("input");
// for (let queryInput of queryInputs) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }
