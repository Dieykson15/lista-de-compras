const form = document.querySelector("form")
const item = document.getElementById("choose-item")
const list = document.querySelector("ul")
const footer = document.querySelector("footer")
const remove = document.querySelector(".remove")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (item.value.trim() != "") {
    newItem()
    form.reset()
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
  
  list.appendChild(li)
  li.append(input, span, button)
}

let timerId

list.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".delete")

  if (deleteBtn) {
    deleteBtn.closest("li").remove()

    footer.classList.add("show-result")

    clearTimeout(timerId)

    timerId = setTimeout(() => {
      footer.classList.remove("show-result")
    }, 3000)
  }
})

remove.addEventListener("click", (event) => {
  footer.classList.remove("show-result")
  clearTimeout(timerId)
})

list.addEventListener("change", (event) => {
  const span = event.target.closest("li").querySelector("span")
  span.classList.toggle("cut")
})
