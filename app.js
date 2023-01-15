const output = document.querySelector(".output");
console.log(output);
output.textContent = "New content";
const url = "list.json";

window.addEventListener("DOMContentLoaded", () => {
  output.textContent = "Loading...";
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = "";
      data.forEach((el) => {
        makeList(el);
      });
    });
});

function makeList(item) {
  const div = document.createElement("div");
  div.innerHTML = `${item.name} #(${item.guests})`;
  output.append(div);

  if (item.status) {
    div.classList.add("confirmed");
  } else {
    div.classList.add("notConfirmed");
  }
}
