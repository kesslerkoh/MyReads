import React, { Component } from 'react'
import Book from './Book.js'

class Bookshelf extends Component {
  render() {
    const { shelfName, shelfBooks, onChangeShelf } = this.props

    return (
      <div className="bookshelf">
        {!!shelfName && (
          <h2 className="bookshelf-title">
            { shelfName }
          </h2>
        )}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              shelfBooks.map((book) => {
                return (
                  <li key={ book.id }>
                    <Book bookDetails={ book } onChangeShelf={ onChangeShelf }/>
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
