// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)

class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }


//   Methods:
//       borrow() - Marks the book as not available
borrow(){
    this.isAvailable=false;
}
//       returnBook() - Marks the book as available
returnBook(){
    this.isAvailable=true;
}
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
getInfo(){
        console.log(`${this.title} by ${this.author} (${this.pages} pages).`)
    }
//       isLongBook() - Returns true if pages > 300, false otherwise
isLongBook(){
    if(this.pages > 300)
        return true
    return false
}
}


//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.
let book1=new Book('Mercedes','Lewis',205,true)
let book2=new Book('Ferrari','Charles',116,true)
let book3=new Book('Williams','Sainz',321,false)
let book4=new Book('Red Bull','Max',333,false)
let book5=new Book('Audi','Nico',176,false)


//   2. Perform the following operations:

//       i. Display info of all books
book1.getInfo()
book2.getInfo()
book3.getInfo()
book4.getInfo()
book5.getInfo()
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books