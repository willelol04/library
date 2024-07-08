const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author= author;
        this.pages = pages;
        this.read = read;
    }


    hasRead() {
        let string = "";
    
        if(this.read) {
            return ("Has been read.");
        }
        else {
            return ("Has not been read.");
        }
    };

    toggleRead() {
        this.read = !this.read;
        return this.read;
    }


};



function createCard(ind, book) {
    card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-index-number", ind);

    titleP = document.createElement("p");
    titleP.innerText = "Title: " + book.title;

    authorP = document.createElement("p");
    authorP.innerText = "Author: " + book.author;

    pagesP = document.createElement("p");
    pagesP.innerText = "Pages: " + book.pages;
    
    hasReadP = document.createElement("p");
    hasReadP.innerText = book.hasRead();

    removeB = document.createElement("button");
    removeB.addEventListener("click", () => {
        myLibrary.splice(book.ind, 1);
        displayLibrary();

    });
    removeB.innerText = "Remove Book";
    removeB.className = "remove";

    makeReadB = document.createElement("button");
    makeReadB.addEventListener("click", () => {

        book.toggleRead();
        displayLibrary();
    })
    makeReadB.innerText = "Toggle Read";
    makeReadB.className = "make-read";


    card.appendChild(titleP);
    card.appendChild(authorP);
    card.appendChild(pagesP);
    card.appendChild(hasReadP);

    card.appendChild(removeB);
    card.appendChild(makeReadB);

    wrapper.appendChild(card);



};

function displayLibrary() {
    while(wrapper.children.length > 0) {
        wrapper.removeChild(wrapper.children[0]);
    }

    for(let book of myLibrary) {
        createCard(myLibrary.indexOf(book), book);
    }
};

function submitClick(event) {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read"). value;
    if(read == "true") {
        read = true;
    }
    else {
        read = false;
    }

    myLibrary.push(tempBook = new Book(title, author, pages, read));
    displayLibrary();

    console.log(myLibrary);
    event.preventDefault();
}


function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));

}

wrapper = document.querySelector(".wrapper");
buttons = document.querySelectorAll(".btn");
submit = document.querySelector("#submit");
form = document.querySelector(".book-form");


buttons.forEach(button => {
    button.addEventListener("click", () => form.classList.toggle("display-block"));
    
});
submit.addEventListener("click", submitClick, false);


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Lord of the Rings", "J.R.R. Tolkien", 825, true);
addBookToLibrary("The Sailor Who Fell from Grace with the Sea", "Yukio Mishima", 150, false);
addBookToLibrary("Harry Potter: and the Prisoner from Azkaban", "J.K. Rowling", 526, false);

displayLibrary();



