import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";
class SearchBooks extends Component {
  state = {
    books: [],
  };
  typingTimeout = 0;
  Handlesearch = (event) => {
    const { value } = event.target;
    clearTimeout(this.typingTimeout);
    this.typingTimeout = setTimeout(async () => {
      try {
        if (value.trim()) {
          const books = await BooksAPI.search(value);
          if (books === undefined || "error" in books) {
            this.setState({ books: [] }); // Set the search page as blank so its shows the search terms again
          } else {
            this.setState({ books: books });
          }
        } else {
          this.setState({ books: [] });
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }, 500);
  };
  render() {
    const { onShelfChange, books } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.Handlesearch}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.books.length > 0 && (
            <ol className="books-grid">
              {this.state.books.map((book) => (
                <Book
                  books={books}
                  key={book.id}
                  onShelfChange={onShelfChange}
                  book={book}
                />
              ))}
            </ol>
          )}
          {this.state.books.length <= 0 && (
            <div className="search-no-books">
              <p className="intro">
                We have a huge library of books for the following topics:
              </p>
              <p className="categories">
                Android, Art, Artificial Intelligence, Astronomy, Austen,
                Baseball, Basketball, Bhagat, Biography, Brief, Business, Camus,
                Cervantes, Christie, Classics, Comics, Cook, Cricket, Cycling,
                Desai, Design, Development, Digital Marketing, Drama, Drawing,
                Dumas, Education, Everything, Fantasy, Film, Finance, First,
                Fitness, Football, Future, Games, Gandhi, Homer, Horror, Hugo,
                Ibsen, Journey, Kafka, King, Lahiri, Larsson, Learn, Literary
                Fiction, Make, Manage, Marquez, Money, Mystery, Negotiate,
                Painting, Philosophy, Photography, Poetry, Production,
                Programming, React, Redux, River, Robotics, Rowling, Satire,
                Science Fiction, Shakespeare, Singh, Swimming, Tale, Thrun,
                Time, Tolstoy, Travel, Ultimate, Virtual Reality, Web
                Development, iOS
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBooks;
