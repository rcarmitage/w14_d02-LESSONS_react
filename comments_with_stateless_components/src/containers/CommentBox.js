import React, { Component } from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id:1,
          author: "Beth Fraser",
          text: "I love JS more each day."
        },
        { id: 2,
          author: "Alan Russell",
          text: "Just wait until we add the form. It's gonna be so good."
        }
      ]
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  
handleCommentSubmit(submittedComment) {
  submittedComment.id = Date.now();
  const updatedComments = [...this.state.data, submittedComment];
  this.setState({data: updatedComments});
}

  render() {
    return (
      <div className="comment-box">
        <h2>Comments</h2>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

export default CommentBox;