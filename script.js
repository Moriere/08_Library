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
};

function removeInputFields() {
    const dimmer = document.querySelector('#dimmer');
    const formContainer = document.querySelector('#formContainer');
    dimmer.removeChild(formContainer);
    dimmer.classList.remove('dimmed');
};

function createInputFields() {
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

function addRow() {
    const table = document.querySelector('.table');
    const template = document.querySelector('#rowTemplate');
    const templateClone = template.content.cloneNode(true);
    table.appendChild(templateClone);

    const lastBookIndex = myLibrary.length - 1;

    table.lastElementChild.classList.add(`index${lastBookIndex}`);
    table.lastElementChild.querySelector('.deleteBtn').classList.add(`index${lastBookIndex}`);
    table.lastElementChild.querySelector('.statusToggle').classList.add(`index${lastBookIndex}`);

    let i = 1;
    for(let key in myLibrary[lastBookIndex]) {
        if (myLibrary[lastBookIndex][key] === 'true') {
            table.lastElementChild.querySelector(`:nth-child(${i + 1}) > button`).textContent = 'Read';
        }
        else if (myLibrary[lastBookIndex][key] === 'false') {
            table.lastElementChild.querySelector(`:nth-child(${i + 1}) > button`).textContent = 'Unread';
        } else {
            table.lastElementChild.querySelector(`:nth-child(${i + 1})`).textContent = myLibrary[lastBookIndex][key];
        }
        i++;
    };

    const deleteBtn = document.querySelector(`.deleteBtn.index${lastBookIndex}`);
    deleteBtn.addEventListener('click', (event) => {
        const index =  Number(event.target.parentNode.classList[1].substr(5));
        myLibrary.splice(index, 1, 'empty');
        table.removeChild(deleteBtn.parentNode);
    }), {once: true};

    const statusBtn = document.querySelector(`.statusToggle.index${lastBookIndex}`);
    statusBtn.addEventListener('click', () => {
        if (statusBtn.textContent === 'Read') {
            statusBtn.textContent = 'Unread';
        } else {
            statusBtn.textContent = 'Read';
        }
    });
};

let myLibrary = [];
const addBookBtn = document.getElementById('addBook');
addBookBtn.addEventListener('click', createInputFields);