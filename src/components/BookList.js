import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../features/bookSlice';

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const sciFiBooks = useSelector(selectScienceFictionBooks);

  let booksToDisplay = allBooks;
  if (selectedGenre === 'Horror') {
    booksToDisplay = horrorBooks;
  } else if (selectedGenre === 'Fantasy') {
    booksToDisplay = fantasyBooks;
  } else if (selectedGenre === 'Science Fiction') {
    booksToDisplay = sciFiBooks;
  }

  return (
    <div>
      <h1>Book Inventory</h1>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <ul>
        {booksToDisplay.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
