function findAccountById(accounts, idNum) {
  return accounts.find(element => element.id === idNum);
}

function sortAccountsByLastName(accounts) {
  return accounts
    .sort((accountA, accountB) => accountA.name.last.toUpperCase() > accountB.name.last.toUpperCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  return borrowedBooks = books.reduce((acc, book) => {
    for(let borrowed in book.borrows) {
      if(book.borrows[borrowed].id === account.id) {
        acc++;
      }
    }
    return acc;
  },0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books
    .filter(book => !book.borrows[0].returned && book.borrows[0].id === account.id ? book : null);
    
  for(let book in borrowedBooks) {
    const {id, title, authorId, borrows} = borrowedBooks[book];
    const bookAuthor = authors.find(author => author.id === borrowedBooks[book].authorId);
    borrowedBooks[book] = {id, title, authorId, author: bookAuthor, borrows};
  }
  return borrowedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
