function findAccountById(accounts, id) {
  let accountID = accounts.find((account) => account.id === id);
  return accountID;
}

function sortAccountsByLastName(accounts) {
  let sortedAccounts = accounts.sort((a,b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  books.forEach((book) => {
      book.borrows.forEach((accounts) => {
        if (accounts.id === account.id) {
          total++;
        }
          
      });
    });
  return total;
}
  

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];
  books.forEach((book) => {
    let bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });
  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });
  return result;
}
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
