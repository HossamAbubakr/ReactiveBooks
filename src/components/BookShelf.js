import React from "react";
import Book from "./Book";

import PropTypes from "prop-types";

function BookShelf(props) {
  const { shelf, title, books, onShelfChange } = props;
  const shelfBooks = books.filter((book) => book.shelf === shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {shelfBooks.length > 0 && (
          <ol className="books-grid">
            {shelfBooks.map((book) => (
              <Book key={book.id} onShelfChange={onShelfChange} book={book} />
            ))}
          </ol>
        )}
        {shelfBooks.length <= 0 && (
          <p className="no-books">
            No books here!
            <span role="img" aria-label="eyeglasses">
              🧐
            </span>{" "}
            Try adding a new book or updating one of the other books
          </p>
        )}
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default BookShelf;
