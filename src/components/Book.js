import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";
import BookView from "./BookView";
import PropTypes from "prop-types";

class Book extends Component {
  state = {
    viewModal: false,
  };

  OnChange = (event) => {
    this.props.onShelfChange(this.props.book, event.target.value);
  };

  findShelf = (book) => {
    const bookFinder = this.props.books.filter((bo) => bo.id === book.id);
    if (bookFinder.length > 0) {
      return bookFinder[0].shelf;
    }
    return "none";
  };

  toggleModal = () => {
    const currVal = this.state.viewModal ? false : true; // If its shown hide it and if its hidden show it. thats all.
    this.setState({ viewModal: currVal }); // I could have used react router but it was gonna complicate things for a modal so I went back to basics
  };

  render() {
    const { book } = this.props;
    const { title, authors } = book;
    const thumbnail = "imageLinks" in book ? book.imageLinks.thumbnail : ""; //A book like My First Life has no cover and was crashing everything
    const shelf = "shelf" in book ? book.shelf : this.findShelf(book); // Usefull when getting a book from the search
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }} onClick={this.toggleModal} />
            <ShelfChanger shelf={shelf} onShelfChange={this.OnChange} />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
        {this.state.viewModal && <BookView book={this.props.book} onClose={this.toggleModal} />}
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
  books: PropTypes.array,
};

export default Book;
