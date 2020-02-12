import React, { Component } from 'react'
//import { Button } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
class PostItem extends Component{
    render(){
        const { post } = this.props
        return (
            <div className="post">
                Hey
                {/* <span className="id">{post._id}</span>
                    <br></br>
                <span className="caption">{post.caption}</span>
                    <br></br>
                    <span className="user_id">{post.user_id}</span>
                    <br></br>
                    <span className="likes">{post.likes}</span>
                    <br></br>
                    <span className="comments">{post.comments}</span> */}
          </div>


        )
    }
}

export default PostItem;