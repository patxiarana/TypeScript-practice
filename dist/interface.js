"use strict";
const book = {
    id: 1,
    title: 'my first interfaces',
    author: 'patxi arana',
};
const books = [];
function getBook() {
    return { id: 1, title: "my tittle", author: 'Patxi' };
}
const myBook = getBook();
function creatBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: "my tittle",
    author: 'Patxi',
    coAuthor: 'PatxiDev'
};
creatBook(newBook);
