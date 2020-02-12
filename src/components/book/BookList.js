import React, { Component } from 'react'

import BookItem from "./BookItem";

class PostList extends Component{

    constructor(props){
        super(props)

        this.state = {
            book: {}
        }

    }

    render(){
        const { books } = this.props
        return(

         <div>
             hey
        {/* {
                            books.map((book) => {
                                return <BookItem key={book.id}  book={book}
                                 />
                            })
                        } */}
       </div>
        )
    }
}
export default PostList;