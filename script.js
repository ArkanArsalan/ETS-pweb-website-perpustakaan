const books = [
    { title: "Atomic Habits", author: "Author 1", image: "./img/book1.jpg" },
    { title: "A Brief History of Time", author: "Author 2", image: "./img/book2.jpg" },
    { title: "Harry Potter: The Philosopher of Stone", author: "Author 3", image: "./img/book3.jpg" },
    { title: "The Davinci Code", author: "Author 3", image: "./img/book4.jpg" },
    { title: "Harry Potter: The Chamber of Secrets", author: "Author 3", image: "./img/book5.jpg" },
    { title: "The Road", author: "Author 3", image: "./img/book6.jpg" }
];

const bookContainer = document.getElementById("bookContainer");

// Function to create and append book elements
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

// Loop through the book data and create book elements
for (const book of books) {
    const bookElement = createBookElement(book);
    bookContainer.appendChild(bookElement);
}