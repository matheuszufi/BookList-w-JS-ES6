//Book Constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}









//Ui Constructor

function UI() {}


UI.prototype.addBookToList = function(book){
 const list = document.getElementById('book-list');

const row = document.createElement('tr');

row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
`;

list.appendChild(row);
}

// SHOW ALERT

UI.prototype.showAlert = function(message, className){

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(function(){
        document.querySelector('.alert')
        .remove();
    }, 3000);

}


//DELETE BOOK
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}




// CLEAR FIELDS
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}




//Event Listeners

document.getElementById('book-form').addEventListener('submit', function (e){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    //Book
    const book = new Book(title, author, isbn);

    // Instanciar o UI
    const ui = new UI();


    //Validate
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
    
        ui.showAlert('Book Added!', 'success');



        //Clear fields
        ui.clearFields();
    }






    e.preventDefault();
});




//Event Listener for delete

document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('Book Removed!', 'sucess');



    e.preventDefault

})


