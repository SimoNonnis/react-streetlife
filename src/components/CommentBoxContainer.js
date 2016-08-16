import React from 'react';

import { rootUrl } from '../constants/constants.js';
import CommentBox from './CommentBox';

class CommentBoxContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allComments: [],
      viewAll: false
    }
    this.getAllComments = this.getAllComments.bind(this);
  }

  getAllComments() {
    this.get('newsfeed');
    this.setState({
      viewAll: !this.state.viewAll
    })
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
      .catch(function(error) {
        console.error('Request failed', error)
      });
  }

  render () {
    var { comments } = this.props;
    var { commentsCount } = this.props;
    var { postId } = this.props;
    var { allComments } = this.state;
    var { viewAll } = this.state;
    return (
      <CommentBox
        comments={comments}
        commentsCount={commentsCount}
        postId={postId}
        allComments={allComments}
        getAllComments ={this.getAllComments}
        viewAll={viewAll}
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
