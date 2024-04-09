let input = document.querySelector(".form-control");
let ulItem = document.querySelector(".list-group");
let formElem = document.querySelector(".add");
let labelText = document.querySelector(".error");
let deleteElems = document.querySelectorAll(".delete");

formElem.addEventListener("submit", function (elem) {
  elem.preventDefault();
});

input.addEventListener("keydown", function (elem) {
  let inputValue = input.value;

  if (elem.keyCode === 13) {
    if (inputValue) {
      let liElem = document.createElement("li");
      liElem.className =
        "list-group-item d-flex justify-content-between align-items-center";

      let spanElem = document.createElement("span");
      spanElem.innerHTML = inputValue;

      let trashIcon = document.createElement("i");
      trashIcon.className = "fa fa-trash-o delete";

      trashIcon.addEventListener("click", function (elem) {
        elem.target.parentElement.remove();
      });

      liElem.appendChild(spanElem);
      liElem.appendChild(trashIcon);
      ulItem.appendChild(liElem);

      input.value = "";
      labelText.style.display = "none";
    } else {
      labelText.style.display = "block";
    }
  }
});
