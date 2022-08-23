function Book (title, author, nPages, isRead) {
    this.title = title,
    this.author = author,
    this.nPages = nPages,
    this.isRead = isRead
};

function addBookToLibrary(form) {
    let book = new Book();
    book.title = form.elements['book_title'].value;
    book.author = form.elements['book_author'].value;
    book.nPages = form.elements['book_pages'].value;
    book.isRead = document.querySelector('input[name="isRead"]:checked').value;
    myLibrary.push(book);
    addRow();
}

function removeInputFields() {
    const dimmer = document.querySelector('#dimmer');
    const formContainer = document.querySelector('#formContainer');
    dimmer.removeChild(formContainer);
    dimmer.classList.remove('dimmed');
}

function createDOMFields() {
    const dimmer = document.querySelector('#dimmer');
    dimmer.classList.add('dimmed');

    const template = document.querySelector('#formTemplate');
    const templateClone = template.content.cloneNode(true);
    dimmer.appendChild(templateClone);

    const closeBtn = document.querySelector('#closeBtn');
    closeBtn.addEventListener('click', removeInputFields);

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addBookToLibrary(form);
        removeInputFields();
    });
};

let myLibrary = [];
const addBookBtn = document.getElementById('addBook');
addBookBtn.addEventListener('click', createDOMFields);

function addRow() {
    const table = document.querySelector('.table');
    const template = document.querySelector('#rowTemplate');
    const templateClone = template.content.cloneNode(true);
    table.appendChild(templateClone);

    const lastBookIndex = myLibrary.length - 1;

    table.lastElementChild.classList.add(`${lastBookIndex}`);
/*     table.lastElementChild.querySelector('.title').textContent = myLibrary[myLibrary.length - 1].title; */

    let i = 1;
    for(let key in myLibrary[lastBookIndex]) {
        table.lastElementChild.querySelector(`.row :nth-child(${i + 1})`).textContent = myLibrary[lastBookIndex][key];
        i++;
    };
};
/* 
after clicking submit
run the function addRow
    get the template, clone and create new row
    get each of divs, edit node text content with myLibrary[i].key
    add an event listener to the button with delete icon and the status toggle
*/