class Book {
    constructor(title,[authors,author2], pages, publishYear, borrowAllowed, libraryPresent){
        this.title = title;
        this.authors = [authors,author2];
        this.pages = pages;
        this.publishYear = publishYear;
        this.borrowAllowed = borrowAllowed;
        this.libraryPresent = libraryPresent;
}

render() {
    this.element = document.createElement("div");
    this.element.className = "bookList";
    this.element.innerHTML = `
    <h3>Title:${this.title}</h3>
    <li>Authors: ${this.authors}</li>
    <li>Page count: ${this.pages}</li>
    <li>Publish year: ${this.publishYear}</li>
    <li>Borrowable outside of library: ${this.borrowAllowed}</li>
    <li>Present in library: ${this.libraryPresent}</li>`;
};  

mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
    const favorites = [
        new Book('Nudle z nosu', ['P.Krajicek', 'J.Forman'], 354, 1992, true,true ),
        new Book('New Order', ['Dr. Popper','Dr. Hyde'], 34, 1345, false,true ),
        new Book('Koi Kapři a VY', ['K.Borovička', 'P.Kapřík'], 120, 2019, true,true ),
    ]
    console.log(favorites);
    const bookList = document.querySelector('#book-list');
    const listBtn = document.querySelector('#listbooks');
    favorites[0].mount(bookList);
    favorites[1].mount(bookList);
    favorites[2].mount(bookList);
    // listBtn.addEventListener('click', () => {
    //     for(const books of favorites){

    //     }
    //     favorites.mount(bookList)}
    // );
  });