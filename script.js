const books = [
    { title: "Atomic Habits", author: "James Clear", image: "./img/book1.jpg" },
    { title: "A Brief History of Time", author: "Stephen Hawking", image: "./img/book2.jpg" },
    { title: "Harry Potter: The Philosopher of Stone", author: "J.K. Rowling", image: "./img/book3.jpg" },
    { title: "The Davinci Code", author: "Dan Brown", image: "./img/book4.jpg" },
    { title: "Harry Potter: The Chamber of Secrets", author: "J.K. Rowling", image: "./img/book5.jpg" },
    { title: "The Road", author: "Cormac McCarthy", image: "./img/book6.jpg" }
];

const bookContainer = document.getElementById("bookContainer");

// Create new element for book
function createBookElement(book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("col-md-2", "book");
    bookDiv.classList.add("col-sm-5", "book");

    bookDiv.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
    `;

    return bookDiv;
}

// Loop through the book and append to the book container
for (const book of books) {
    const bookElement = createBookElement(book);
    bookContainer.appendChild(bookElement);
}