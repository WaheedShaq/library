let myLibrary = [];

//constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  showBooks();
}

function showBooks() {
  let libraryElement = document.querySelector('#library');
  libraryElement.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement('div');
    bookElement.innerHTML = `<div class="card-header">
        <h3 class='title'>${book.title}</h3>
        <h5 class='author'>by ${book.author}</h5>
      </div>
      <div class='card-body'>
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? 'Read' : 'Not Read Yet'}</p>
        <button class='remove-btn' onclick='removeBook(${i})'>Remove</button>
        <button class='toggle-read-btn' onclick='toggleRead(${i})'>Toggle Read</button>
      </div>
      `;
    libraryElement.appendChild(bookElement);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  showBooks();
}

function addBookToLibrary() {
  //do stuff here
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  showBooks();
  console.log(newBook);
  console.log(myLibrary);
}

let newBookBtn = document.querySelector('#new-book-btn');

newBookBtn.addEventListener('click', () => {
  let newBookForm = document.querySelector('#new-book-form');
  let newBookFormBorder = document.querySelector('.form-div');
  newBookForm.style.display = 'block';
  newBookFormBorder.style.border = '1px solid black';
});

document.querySelector('#new-book-form').addEventListener('submit', (event) => {
  event.preventDefault();

  addBookToLibrary();
});
