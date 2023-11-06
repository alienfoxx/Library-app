
let addBook = document.querySelector('#addBook');
let seeBook = document.querySelector('#seeBook');
let savBook =document.querySelector('#saveBook');
let bookForms = document.querySelector('#bookForm');
let read = document.querySelector('#read-it').checked;
  let notRead = document.querySelector('#no-read').checked;

let myLibrary = [];

function Book(title, author , pages, read ) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.notRead = notRead;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}
function toggleRead(index){
  myLibrary[index].toggleRead();
  render();
}
function render(){
  let libraryBook = document.querySelector('#library');
  libraryBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookEL = document.createElement("div");
    bookEL.setAttribute("class", "book-card");
    bookEL.innerHTML = `
    <div class="card-header>
      <h3 class="title">${book.title}</h3>
      <h5 class="author"> By ${book.author}</h5>
    </div>
    <div class="card-body">
      <p> ${book.pages}  pages</p>
      <p class="read-status"> ${book.read ? "Read" : "Not Read Yet"} </p>
      
    </div>
    <button class="remove-btn" onclick="removeBook(${i})">Remove Book</button>
    <button class ="toggle-read-btn" onclick="toggleRead(${i})"> Toggle Read</button>`;
    libraryBook.appendChild(bookEL)
  }

}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render()
}


function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#autor').value;
let pages = document.querySelector('#pages').value;
let read = document.querySelector('#read-it').checked;
let notRead = document.querySelector('#no-read').checked;

let newBook = new Book(title, author, pages, read, notRead);
  myLibrary.push(newBook);
       setTimeout(function() {
    document.querySelector('#title').value = "";
    document.querySelector('#autor').value = "";
    document.querySelector('#pages').value = "";
    document.querySelector('#read-it').checked = false;
    document.querySelector('#no-read').checked = false;
  }, 200);
  
  render()
}




addBook.addEventListener("click", function(){
  let bookForms = document.querySelector('#bookForm');
   let savBook = document.querySelector('#saveBook')
   let readForm = document.querySelector(".read-form")
  bookForms.style.display ="grid";
  readForm.style.display="flex";
  savBook.style.cssText = "display: flex; align-items:center";

});
 savBook.addEventListener("click", function(event){
addBookToLibrary();
  
});