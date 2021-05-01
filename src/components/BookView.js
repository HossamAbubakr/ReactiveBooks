import React from "react";
import PropTypes from "prop-types";

function BookView(props) {
  const { book } = props;
  const { title, publisher, publishedDate, description, categories, averageRating, language, maturityRating, authors } = book;
  const thumbnail = "imageLinks" in book ? book.imageLinks.thumbnail : ""; //A book like My First Life has no cover and was crashing everything
  return (
    <div className="book-view-modal">
      <div className="book-view">
        <div className="header">
          <img id="close-button" src="\buttons\arrow-back-black.svg" alt="close" onClick={props.onClose} />
          <h3 className="book-view-title">{title}</h3>
        </div>
        <div className="book-view-details">
          <div className="book-cover-rating">
            <img className="book-cover" src={thumbnail} width="128" height="193" alt="cover" />
            <img className="book-rating" src={`/ratings/${averageRating}.png`} width="100" height="15" alt="rating" />
          </div>
          <div className="book-information">
            <p>
              Author(s): {"authors" in book ? authors.join(", ") : "N/A"}
              <br />
              Publisher: {"publisher" in book ? publisher : "N/A"}
              <br />
              Language: <span className="book-language">{"language" in book ? language : "N/A"}</span>
              <br />
              Category: {"categories" in book ? categories.join(", ") : "N/A"}
              <br />
              Publication Date: {"publishedDate" in book ? publishedDate : "N/A"}
              <br />
            </p>
            <p className="book-description">Description: {"description" in book ? description : "N/A"}</p>
            <p className="book-maturity">Maturity Rating: {"maturityRating" in book ? maturityRating.toLowerCase().replace("_", " ") : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

BookView.propTypes = {
  book: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default BookView;
