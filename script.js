let myLibrary = [];

//constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  //do stuff here
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').value;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook);
}

let newBookBtn = document.querySelector('#new-book-btn');

newBookBtn.addEventListener('click', () => {
  let newBookForm = document.querySelector('#new-book-form');
  let newBookFormBorder = document.querySelector('.form-div');
  newBookForm.style.display = 'block';
  newBookFormBorder.style.border = '1px solid black';
});

document.querySelector('#new-book-form').addEventListener('submit', () => {
  event.preventDefault();

  addBookToLibrary();
});
