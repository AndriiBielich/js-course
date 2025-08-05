const books = [
    {
        title: 'To Kill a Mockingbird',
        pagesCount: 281,
        authors: ['Harper Lee'],
        genres: ['Classic', 'Fiction']
    },
    {
        title: '1984',
        pagesCount: 328,
        authors: ['George Orwell'],
        genres: ['Dystopian', 'Science Fiction', 'Fantasy']
    },
    {
        title: 'The Hobbit',
        pagesCount: 310,
        authors: ['J.R.R. Tolkien', 'John Doe'],
        genres: ['Fantasy', 'Adventure']
    },
    {
        title: 'The Great Gatsby',
        pagesCount: 180,
        authors: ['F. Scott Fitzgerald'],
        genres: ['Classic', 'Drama']
    },
    {
        title: 'Good Omens',
        pagesCount: 432,
        authors: ['Neil Gaiman', 'Terry Pratchett'],
        genres: ['Fantasy', 'Comedy']
    },
    {
        title: 'Pride and Prejudice',
        pagesCount: 279,
        authors: ['Jane Austen'],
        genres: ['Romance', 'Classic', 'Historic']
    },
    {
        title: 'The Catcher in the Rye',
        pagesCount: 214,
        authors: ['J.D. Salinger'],
        genres: ['Coming-of-age', 'Fiction']
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        pagesCount: 309,
        authors: ['J.K. Rowling'],
        genres: ['Fantasy', 'Young Adult']
    },
    {
        title: 'Brave New World',
        pagesCount: 268,
        authors: ['Aldous Huxley'],
        genres: ['Dystopian', 'Science Fiction']
    },
    {
        title: 'The Name of the Wind',
        pagesCount: 662,
        authors: ['Patrick Rothfuss'],
        genres: ['Fantasy', 'Adventure']
    }
];

console.log('1. Maximum page count book');
let maxPageIndex = -1;
let pageAmount = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].pagesCount > pageAmount) {
        pageAmount = books[i].pagesCount;
        maxPageIndex = i;
    }
}

if (maxPageIndex > -1) {
    console.log(`Book with maximum pages is "${books[maxPageIndex].title}", with ${books[maxPageIndex].pagesCount} pages`);
} else {
    console.log('Some error!')
}

console.log('\n2. Book(s) with maximum genres');
let maximumGenresAmount = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length > maximumGenresAmount) {
        maximumGenresAmount = books[i].genres.length;
    }
}

const booksWithMaximumGenre = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length === maximumGenresAmount) {
        booksWithMaximumGenre.push(books[i]);
    }
}

console.log('\n3. Found book with maximum length');
let maxTitleLengthIndex = -1;
let maxTitleLength = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length > maxTitleLength) {
        maxTitleLength = books[i].title.length;
        maxTitleLengthIndex = i;
    }
}

if (maxTitleLengthIndex > -1) {
    console.log(`Max title length is ${maxTitleLengthIndex}`);
} else {
    console.log('Some error');
}

console.log('\n4. Found books what wrote 2 authors');
const AUTHORS_AMOUNT = 2;
const booksWithTwoAuthors = [];
for (const book of books) {
    if (book.authors.length === AUTHORS_AMOUNT) {
        booksWithTwoAuthors.push(book);
    }
}
console.log('Found result: ', booksWithTwoAuthors);

console.log('\n5. Found books with only one author');
const SINGLE_AUTHOR = 1;
const booksWithSingleAuthor = [];

for (const book of books) {
    if (book.authors.length === SINGLE_AUTHOR) {
        booksWithSingleAuthor.push(book);
    }
}
console.log('Found result: ', booksWithSingleAuthor);
