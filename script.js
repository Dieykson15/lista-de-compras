const addItem = document.querySelector("form")
const item = document.getElementById("choose-item")
const listItem = document.querySelector("ul")
const del = document.querySelectorAll(".delete")
const footer = document.querySelector("footer")
const remove = document.querySelector(".remove")
const checkbox = document.querySelectorAll(".item")

addItem.addEventListener("submit", (event) => {
  event.preventDefault()
  if (item.value.trim() != "") {
    newItem()
    addItem.reset()
  }
})

function newItem() {
  const li = document.createElement("li")
  const input = document.createElement("input")
  const button = document.createElement("button")
  const img = document.createElement("img")
  const span = document.createElement("span")

  span.textContent = item.value

  input.classList.add("item")
  input.setAttribute("type", "checkbox")
  button.classList.add("delete")
  button.appendChild(img)
  img.setAttribute("src", "img/delete.svg")
  
  listItem.appendChild(li)
  li.append(input, span, button)
}

listItem.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove()
    footer.classList.add("show-result")
    setTimeout(function () {
      footer.style.display = "none"
    }, 3000)
    footer.style = null
    remove.addEventListener("click", (event) =>
      footer.classList.remove("show-result"))
  }
})











