import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBooks from "./SearchBooks";
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf);
    book.shelf = newShelf; //Update the book locally
    const books = this.state.books.filter((bo) => bo.id !== book.id).concat(book); // Filter out the book we wanna change, update its shelf then concat it to the list
    this.setState({ books });
  };

  blurMe = () => {
    document.getElementsByClassName("bookshelf").style.filter = "blur(5px)";
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <ListBooks books={this.state.books} onShelfChange={this.changeShelf} />
        </Route>
        <Route exact path="/search">
          <SearchBooks books={this.state.books} onShelfChange={this.changeShelf} />
        </Route>
      </div>
    );
  }
}

export default BooksApp;
