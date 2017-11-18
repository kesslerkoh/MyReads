import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        books: data
      })
    })
  }

  handleShelfChange(book,value) {
    BooksAPI.update(book,value).then((response) => {
      if (book.shelf) {
        this.setState(state => ({
          books: state.books.map((currentBook) => {
            if (currentBook.id === book.id) {
              currentBook.shelf = value
            }

            return currentBook
          })
        }))
      } else {
        book.shelf = value
        this.setState(state => ({
          books: state.books.concat([ book ])
        }))
      }

    })
  }

  render() {
    return (
      <div className="app">
        {/* For search: after click/performing search action, should we push '/' to history? */}
        <Route path="/search" render={() => (
          <SearchBooks myBooks={ this.state.books } onChangeShelf={(book, value) => {
            this.handleShelfChange(book, value)
          }}/>
        )}/>

        <Route exact path="/" render={() => (
          <ListBooks allBooks={ this.state.books } onChangeShelf={(book, value) => {
            this.handleShelfChange(book, value)
          }}/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
