const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener('click', e => {
  console.log("Grandparent 1")
})

grandparent.addEventListener('click', e => {
  console.log("Parent 2")
})

grandparent.addEventListener('click', e => {
  console.log("Child 1")
})

document.addEventListener('click', e => {
  console.log("Document 1")
})