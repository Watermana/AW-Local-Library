function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => book.borrows[0].returned === false).length;
}

function getMostCommonGenres(books) {
  const genreNames = books.map(book=> book.genre)
  let counts = []
  for(const name of genreNames) {
   let exsisting = counts.findIndex(obj=> obj.name === name);
    if(exsisting >= 0){
     counts[exsisting].count++
   } else {
     counts.push({
      name: name,
      count: 1
    })
    }
  }
  return sortAndSlice(counts);
}

function getMostPopularBooks(books) {
  const mappedArr = books.map(book => ({name:book.title, count: book.borrows.length}))
  return sortAndSlice(mappedArr);
}

function getMostPopularAuthors(books, authors) {
  let returnValue = [];
  authors.forEach(author => {
    let person = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach(book => {
      if(book.authorId === author.id) {
        person.count += book.borrows.length;
      }
    });
    returnValue.push(person);
  });
  return sortAndSlice(returnValue);
}

function sortAndSlice (vars){
  return vars.sort((authorOne, authorTwo) => authorTwo.count - authorOne.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
