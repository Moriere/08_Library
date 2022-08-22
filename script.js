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
}

function createDOMFields() {
    const dimmer = document.querySelector('#dimmer');
    dimmer.classList.add('dimmed');

    const template = document.querySelector('#template');
    const templateClone = template.content.cloneNode(true);
    dimmer.appendChild(templateClone);

    const closeBtn = document.querySelector('#closeBtn');
    closeBtn.addEventListener('click', () => {
        const formContainer = document.querySelector('#formContainer');
        dimmer.removeChild(formContainer);
        dimmer.classList.remove('dimmed');
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addBookToLibrary(form);
        form.submit();
    });
};

/* POP-UP FIELD */

let myLibrary = [];
const addBookBtn = document.getElementById('addBook');
addBookBtn.addEventListener('click', createDOMFields);