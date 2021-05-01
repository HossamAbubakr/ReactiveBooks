import BookShelf from "./BookShelf";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "./Footer";
function ListBooks(props) {
  const { books, onShelfChange } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <img src="/logo.png" alt="logo" className="logo" />
      </div>
      <div className="list-books-content">
        <div>
          <p className="tip">
            <span role="img" aria-label="idea">
              💡
            </span>
            Did you know? You can click on a book cover to get a detailed view!
          </p>
          <BookShelf title="👀Currently Reading" shelf="currentlyReading" books={books} onShelfChange={onShelfChange} />
          <BookShelf title="🤩Want To Read" shelf="wantToRead" books={books} onShelfChange={onShelfChange} />
          <BookShelf title="🙏Finished Reading" shelf="read" books={books} onShelfChange={onShelfChange} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" />
      </div>
      <Footer />
    </div>
  );
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default ListBooks;
