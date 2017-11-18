import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import Bookshelf from './Bookshelf.js'

class SearchBooks extends Component {
  state = {
    bookResults: []
  }

  handleInput = (event) => {
    const queryString = event.target.value
    BooksAPI.search(queryString).then((res) => {
      if (!res || res.error) {
        console.log('Could not find any search results with the given query.')
      } else {
        // If already in myReads/my books, make the search results
        // entry the exact record in your myReads (line 33).
        this.setState(state => ({
          bookResults: res.map((entry) => {
            this.props.myBooks.map(myBook => {
              if (entry.id === myBook.id) {
                // entry.shelf = myBook.shelf

                // FOR REVIEWER: This "permanently" ties
                // bookResults[entry] with the value of
                // myBooks[myBook]. This means any change to
                // myBooks[myBook], which can happen in App.js's
                // handleShelfChange, will also affect bookResults[entry].
                // Is that correct? Any tips/advice to improve readability here?
                entry = myBook
              }

              return myBook
            })

            return entry
          })
        }))
      }
    })
  }

  render() {
    console.log('#### SearchBooks ###')
    console.log(this.props.myBooks)
    console.log(this.state.bookResults)
    console.log('#### SearchBooks ###')

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input onChange={ this.handleInput } type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <Bookshelf shelfBooks={ this.state.bookResults } onChangeShelf={ this.props.onChangeShelf }/>
        </div>
      </div>
    )
  }
}

export default SearchBooks
