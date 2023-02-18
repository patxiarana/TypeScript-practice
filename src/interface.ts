interface Book {
id : number ;
title : string ;
author : string ;
coAuthor ? :string ;
}


const book : Book = {
  id : 1 ,
title : 'my first interfaces',
author : 'patxi arana' ,
}

const books : Book[] = [] ;


function getBook() : Book {
    return {id : 1 , title : "my tittle", author:'Patxi'} ;
}



const myBook = getBook() ; 


function creatBook(book:Book): Book {
    return book;
}

const newBook : Book = {
id : 1 ,
title : "my tittle", 
author:'Patxi' ,
coAuthor : 'PatxiDev'
}
creatBook(newBook) 
