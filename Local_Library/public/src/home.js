function getTotalBooksCount(books) {
  let total = 0;
  books.forEach((book) => {
    total++;
  });
  return total;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  accounts.forEach((account) => {
    total++;
  });
  return total;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  let result = books.reduce((total, book) => {if(!book.borrows[0].returned) total++; return total;},0);
  return result;
}

function getMostCommonGenres(books) {
  const map = {};
  books.forEach((book) => {
    if (map[book.genre]){
      map[book.genre]++;
    }else{
      map[book.genre] = 1;
    }
  });
  const result = [];
  for (let name in map){
    result.push({name,count:map[name]})
  }
  return result.sort((a,b) => b.count - a.count).slice(0,5);
}

function getMostPopularBooks(books) {
  const map = {};
  books.forEach((book) => {
    let borrowedBooks = book.borrows;
    borrowedBooks.forEach((borrows) => {
      if (map[book.title]){
        map[book.title]++;
      }else{
        map[book.title] = 1;
      }
    });
  });
  const result = [];
  for (let name in map) {
    result.push({name, count:map[name]})
  }
  return result.sort((a,b) => b.count - a.count).slice(0,5);

}

function getMostPopularAuthors(books, authors) {
    const map = {};
    authors.forEach((author) => {
      let authorId = author.id;
      books.forEach((book) => {
        let borrowedBooks = book.borrows;
        borrowedBooks.forEach((borrows) => {
          if(authorId === book.authorId){
            if(map[`${author.name.first} ${author.name.last}`]){
          map[`${author.name.first} ${author.name.last}`]++;
        }else{
          map[`${author.name.first} ${author.name.last}`] = 1;
        }
          }
        })
      });
    });
  const result = [];
  for (let name in map) {
    result.push({name, count:map[name]});
  }
  return result.sort((a,b) => b.count - a.count).slice(0,5);
}


  

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
