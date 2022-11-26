const addButton = document.getElementById('addBookButton')
const titleInfo = document.getElementById('title')
const authorInfo = document.getElementById('autor')
const pagesInfo = document.getElementById('pages')
const inputs = document.querySelectorAll('input')
const formInfo = document.querySelector('.overlay')
const content = document.querySelector('main')
const buttonBook = document.querySelector('.addButton')

let myLibrary = []

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary() {
  let titleBook = titleInfo.value
  let authorBook = authorInfo.value
  let pagesBook = pagesInfo.value
  let newBook = new Book(titleBook, authorBook, pagesBook)
  myLibrary.push(newBook)
  //eraseInfo()
  // closeForm()
  createCard()
}

function eraseInfo() {
  inputs.forEach().value = ''
}

function closeForm() {
  formInfo.classList.add = 'closed'
}

function createCard() {
  let newCard = document.createElement('div')
  content.appendChild(newCard)
  content.insertBefore(newCard, buttonBook)
  newCard.classList.add('card')

  newCard.innerHTML = 
  `<div class="titleContent">
    <h2>Título</h2>
    <div>
      <p>autor:</p>
      <p>páginas:</p>
      <p>género:</p>
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
    <i class="fa-regular fa-trash-can"></i>
  </div>`
}

addButton.addEventListener('click', addBookToLibrary)
