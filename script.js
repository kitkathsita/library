const addButton = document.getElementById('addBookButton')
const titleInfo = document.getElementById('title')
const authorInfo = document.getElementById('autor')
const pagesInfo = document.getElementById('pages')
const genreInfo = document.getElementById('genre')
const inputs = document.querySelectorAll('input')
const formInfo = document.querySelector('.overlay')
const content = document.querySelector('main')
const buttonBook = document.querySelector('.addButton')
let deleteButton = document.querySelectorAll('.deleteBut')

let myLibrary = []

function Book(title, author, pages, genre) {
  this.title = title
  this.author = author
  this.pages = pages
  this.genre = genre
}

function addBookToLibrary() {
  let titleBook = titleInfo.value
  let authorBook = authorInfo.value
  let pagesBook = pagesInfo.value
  let genreBook = genreInfo.value
  let newBook = new Book(titleBook, authorBook, pagesBook, genreBook)
  myLibrary.push(newBook)
  eraseInfo()
  closeForm()
  createCard()
  deleteButton = document.querySelectorAll('.deleteBut')
  deleteButton.forEach(deleteBut => deleteBut.addEventListener('click', deleteElement))
}

function eraseInfo() {
  inputs.forEach(inputs => inputs.value = '')
}

function closeForm() {
  formInfo.classList.add = 'closed'
}

function createCard() {
  let bookNumber = myLibrary.length
  let newCard = document.createElement('div')
  content.insertBefore(newCard, buttonBook)
  newCard.classList.add('card')

  newCard.innerHTML = 
  `<div class="titleContent">
    <div class="titulo">${myLibrary[bookNumber-1].title}</div>
    <div>
      <p>autor: ${myLibrary[bookNumber-1].author}</p>
      <p>páginas: ${myLibrary[bookNumber-1].pages}</p>
      <p>género: ${myLibrary[bookNumber-1].genre}</p>
    </div>
  </div>
  <div class="options">
    <div>
      <p>Read...?</p>
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
    </div>
    <i class="fa-regular fa-trash-can deleteBut"></i>
  </div>`

}

function deleteElement() {
  let parentDelete = this.parentNode.previousElementSibling.firstChild.nextElementSibling
  console.log(parentDelete.innerHTML)
  let indice = myLibrary.findIndex(bookElem => bookElem.title === parentDelete.innerHTML)
  console.log(indice)
}

function print() {
  console.log('hola')
}

addButton.addEventListener('click', addBookToLibrary)

