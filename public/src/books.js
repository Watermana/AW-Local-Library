function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter(book => !book.borrows[0].returned);
  let returned = books.filter(book => book.borrows[0].returned);
  return [borrowed , returned];
}

function getBorrowersForBook(book, accounts) {
  let resultArr = [];
  book.borrows.filter(borrowed => {
    for(let account in accounts) {
      if(accounts[account].id === borrowed.id && resultArr.length < 10) {
        resultArr.push(accounts[account]);
      }
    }
  });
  for(let index in resultArr) {
    let isReturned = book.borrows[index].returned;
    let keyValues = Object.entries(resultArr[index]);
    keyValues.splice(1, 0, ['returned',isReturned])
    let newObj = Object.fromEntries(keyValues);
    resultArr[index] = newObj;
  }
  return resultArr;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};