let myLibrary = [
  new Book('Sherlock Holmes', 'Arthur C. Doyle')
];

function Book(title, author) {
  this.title = title,
  this.author = author,
  this.owned = false,
  this.read = false
}

function addBookToLibrary() {
  // do stuff here
}