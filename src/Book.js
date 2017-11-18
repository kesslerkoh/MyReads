import React, { Component } from 'react'
import './App.css'

class Book extends Component {
  render() {
    const { bookDetails, onChangeShelf } = this.props

    return (
      <div className="book">
        <div className="book-top">
          {bookDetails.imageLinks && bookDetails.imageLinks.thumbnail && (
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + bookDetails.imageLinks.thumbnail +')' }}></div>
          )}

          {/* When no background image is available: */}
          {!bookDetails.imageLinks && (
            <div className="book-cover" style={{ width: 128, height: 193, backgroundColor: '#9eacc1' }}></div>
          )}

          <div className="book-shelf-changer">
            <select value={ bookDetails.shelf ? bookDetails.shelf : "none" } onChange={(event) => {
                onChangeShelf(bookDetails, event.target.value)
            }}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ bookDetails.title }</div>
        <div className="book-authors">{ bookDetails.authors && (bookDetails.authors.join(', ')) }</div>
      </div>
    )
  }
}

export default Book
