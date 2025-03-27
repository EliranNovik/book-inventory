import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'It', author: 'Stephen King', genre: 'Horror' },
  { id: 2, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
  { id: 3, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror' },
  { id: 4, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
  { id: 5, title: 'Pet Sematary', author: 'Stephen King', genre: 'Horror' },
  { id: 6, title: 'The Exorcist', author: 'William Peter Blatty', genre: 'Horror' },
  { id: 7, title: 'Misery', author: 'Stephen King', genre: 'Horror' },
  { id: 8, title: 'Hell House', author: 'Richard Matheson', genre: 'Horror' },
  { id: 9, title: "Salem's Lot", author: 'Stephen King', genre: 'Horror' },
  { id: 10, title: 'The Silence of the Lambs', author: 'Thomas Harris', genre: 'Horror' },
  { id: 11, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { id: 12, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { id: 13, title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', genre: 'Fantasy' },
  { id: 14, title: 'A Game of Thrones', author: 'George R.R. Martin', genre: 'Fantasy' },
  { id: 15, title: 'The Name of the Wind', author: 'Patrick Rothfuss', genre: 'Fantasy' },
  { id: 16, title: 'The Way of Kings', author: 'Brandon Sanderson', genre: 'Fantasy' },
  { id: 17, title: 'The Eye of the World', author: 'Robert Jordan', genre: 'Fantasy' },
  { id: 18, title: 'The Lies of Locke Lamora', author: 'Scott Lynch', genre: 'Fantasy' },
  { id: 19, title: 'The Blade Itself', author: 'Joe Abercrombie', genre: 'Fantasy' },
  { id: 20, title: 'The Final Empire', author: 'Brandon Sanderson', genre: 'Fantasy' },
  { id: 21, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
  { id: 22, title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
  { id: 23, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Science Fiction' },
  { id: 24, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Science Fiction' },
  { id: 25, title: "Ender's Game", author: 'Orson Scott Card', genre: 'Science Fiction' },
  { id: 26, title: 'Neuromancer', author: 'William Gibson', genre: 'Science Fiction' },
  { id: 27, title: 'Snow Crash', author: 'Neal Stephenson', genre: 'Science Fiction' },
  { id: 28, title: 'The War of the Worlds', author: 'H.G. Wells', genre: 'Science Fiction' },
  { id: 29, title: 'The Time Machine', author: 'H.G. Wells', genre: 'Science Fiction' },
  { id: 30, title: "Do Androids Dream of Electric Sheep?", author: 'Philip K. Dick', genre: 'Science Fiction' },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
});

export default bookSlice.reducer;

export const selectBooks = (state) => state.books;

export const selectHorrorBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Science Fiction')
);
