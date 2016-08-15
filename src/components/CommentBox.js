import React from 'react';

import Comment from './Comment';

import styles from './commentBox.css';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var { comments } = this.props;
    var { commentsCount } = this.props;
    var { postId } = this.props;

    return (
      <div className={styles.container}>
        <h4 className={styles.title}>Latest Comments</h4>
        <button
          className={styles.viewAllBtn}
          key={postId}
        >View All
          <span className={styles.counter}>{commentsCount}</span>
        </button>
        { comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              avatarUrl={comment.author.avatar}
              name={comment.author.display_name}
              body={comment.body}
              time={comment.updated_at}
            />
          );
        })}
      </div>
    );
  }
}


CommentBox.propTypes = {
  comments: React.PropTypes.array,
  commentsCount: React.PropTypes.number,
  postId: React.PropTypes.string
}

export default CommentBox;
