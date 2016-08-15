import React from 'react';

import Comment from './Comment';

import styles from './commentBox.css';


const CommentBox = ({comments, commentsCount, postId, getAllComments}) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Latest Comments</h4>
      <button
        className={styles.viewAllBtn}
        key={postId}
        onClick={getAllComments}
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
};


CommentBox.propTypes = {
  comments: React.PropTypes.array,
  commentsCount: React.PropTypes.number,
  postId: React.PropTypes.string,
  getAllComments: React.PropTypes.func
}

export default CommentBox;
