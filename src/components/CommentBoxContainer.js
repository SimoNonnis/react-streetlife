import React from 'react';

import { rootUrl } from '../constants/constants.js';
import CommentBox from './CommentBox';

class CommentBoxContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allComments: []
    }
    this.getAllComments = this.getAllComments.bind(this);
  }

  getAllComments() {
    console.info('View All Clicked');
    this.get('newsfeed');
  }

  get (data) {
    var url = `${rootUrl}${data}.json`;

    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({
          allComments: result.messages
        });
      })
  }

  render () {
    var { comments } = this.props;
    var { commentsCount } = this.props;
    var { postId } = this.props;
    var { allComments } = this.state;
    return (
      <CommentBox
        comments={comments}
        commentsCount={commentsCount}
        postId={postId}
        allComments={allComments}
        getAllComments ={this.getAllComments}
      />
    );
  }
}


CommentBoxContainer.propTypes = {
  comments: React.PropTypes.array,
  commentsCount: React.PropTypes.number,
  postId: React.PropTypes.string

}

export default CommentBoxContainer;
