import React, { Component } from 'react'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  render() {
    const { allBooks, onChangeShelf } = this.props

    let currentlyReadingBooks = allBooks.filter((book) => {
      return book.shelf === 'currentlyReading'
    })

    let wantToReadBooks = allBooks.filter((book) => {
      return book.shelf === 'wantToRead'
    })

    let readBooks = allBooks.filter((book) => {
      return book.shelf === 'read'
    })

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              shelfName="Currently Reading"
              shelfBooks={ currentlyReadingBooks }
              onChangeShelf={ onChangeShelf }/>

            <Bookshelf
              shelfName="Want to Read"
              shelfBooks={ wantToReadBooks }
              onChangeShelf={ onChangeShelf }/>

            <Bookshelf
              shelfName="Read"
              shelfBooks={ readBooks }
              onChangeShelf={ onChangeShelf }/>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search">
              Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
