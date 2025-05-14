const time = document.querySelector(".todo_time");
const todo_Date = document.querySelector(".todo_date");
const todoBtn = document.querySelector(".todo_btn");
const trashIcon = document.querySelector(".trash_icon");
const uncheckIcon = document.querySelector(".circle_icon");
const checkIcon = document.querySelector(".check_icon");
const todoWorks = document.querySelector(".todo_works");
const todoWork = document.querySelector(".todo_work");
const todoInput = document.querySelector(".todo_inputs");
const todoReload = document.querySelector(".todo_reload");
// show time
const now = new Date();
const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");
const timeSting = `${hours}:${minutes}`;
time.textContent = timeSting;
// show days of the week and another
const date = function () {
  const days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saterday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysName = days[now.getDay()];
  const monthsName = months[now.getMonth()];
  const year = now.getFullYear();
  return `${daysName},${monthsName},${year}`;
};
todo_Date.textContent = date();

// create new todo
todoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const html = `
  <div class="todo_inputs">
            <div class="check_part">
              <svg
                aria-hidden="true"
                data-prefix="fal"
                data-icon="check-circle"
                role="img"
                viewBox="0 0 512 512"
                class="check_icon"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                  class=""
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                data-prefix="fal"
                data-icon="circle"
                role="img"
                viewBox="0 0 512 512"
                class="circle_icon"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"
                  class=""
                ></path>
              </svg>
              <input type="text" class="todo_work" />
            </div>
            <svg viewBox="0 0 448 512" class="trash_icon">
              <path
                d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"
              />
            </svg>
          </div>
  `;
  todoWorks.insertAdjacentHTML("afterbegin", html);
});
// remove todo input
todoWorks.addEventListener("click", function (e) {
  if (e.target.classList.contains("trash_icon")) {
    e.target.closest(".todo_inputs").remove();
  }
});
// check Icons
todoWorks.addEventListener("click", function (e) {
  const item = e.target.closest(".check_part");
  if (!item) return;

  const circle = item.querySelector(".circle_icon");
  const check = item.querySelector(".check_icon");
  const todoText = item.querySelector(".todo_work");

  if (e.target.classList.contains("circle_icon")) {
    circle.style.display = "none";
    check.style.display = "block";
    check.style.backgroundColor = "green";
    check.style.borderRadius = "50%";
    check.style.color = "#fff";
    todoText.style.opacity = "0.5";
  } else if (e.target.classList.contains("check_icon")) {
    check.style.display = "none";
    circle.style.display = "block";
    todoText.style.opacity = "1";
  }
});
// reload todo_page
todoReload.addEventListener("click", function () {
  todoWorks.textContent = "";
});
