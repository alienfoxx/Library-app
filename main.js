
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
  this.notRead =notRead;
}
function addBookToLibrary() {
  
}



addBook.addEventListener("click", function(){
  let bookForms = document.querySelector('#bookForm');
   let savBook = document.querySelector('#saveBook')
   let readForm= document.querySelector(".read-form")
  bookForms.style.display ="grid";
  readForm.style.display="flex";
  savBook.style.cssText = "display: flex; align-items:center";

});
 savBook.addEventListener("click", function(event){

  let title = document.querySelector('#title').value;
let author = document.querySelector('#autor').value;
let pages = document.querySelector('#pages').value;
let read = document.querySelector('#read-it').checked;
let notRead = document.querySelector('#no-read').checked;

let newBook = new Book(title, author, pages, read, notRead);
  myLibrary.push(newBook);
  console.log(myLibrary);
 
 })