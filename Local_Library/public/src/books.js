function findAuthorById(authors, id) {
  let authorId = authors.find((author) => author.id === id);
  return authorId;
}

function findBookById(books, id) {
  let bookId = books.find((book) => book.id === id);
  return bookId;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = [];
  let returned = [];
  let partitioned = [borrowed,returned];
  books.forEach((book) => {
    if (book.borrows[0].returned){
    returned.push(book);
    }else {
      borrowed.push(book);
    }
    
  });
  return partitioned;
}

function getBorrowersForBook(book, accounts) {
  const map = [];
  accounts.forEach((account) => {
    let bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if(borrow.id === account.id){
        let fullAccount = account.returned = borrow.returned
        map.push(account);
      }
    });
  });
  console.log(map)
  return map.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
