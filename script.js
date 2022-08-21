function Book (title, author, nPages, isRead) {
    this.title = title,
    this.author = author,
    this.nPages = nPages,
    this.isRead = isRead
};

let myLibrary = [];

function addBookToLibrary() {
    /*
    create a new book Object
    take title from an text input
    take author from an text input
    take #pages from a number input
    take isRead from a radial button
    */

    let book = new Book();

    myLibrary.push(book);
}

/* 
user press + *
screen goes dimmed *
pop-up appears with field data *
user enters data in fields and press add button *
book appears on list
user can delete the item by pressing the delete button
*/

/* POP-UP FIELD */

const addBookBtn = document.getElementById('addBook');
addBookBtn.addEventListener('click', createDOMFields());

function createDOMFields() {
    const dimmer = document.querySelector('#dimmer');
    dimmer.classList.add('dimmed');

    const template = document.querySelector('#template');
    const templateClone = template.content.cloneNode(true);
    document.querySelector('#dimmer').appendChild(templateClone);
}

