import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Comment from './Comment';

import styles from './commentBox.css';


const CommentBox = ({comments, commentsCount, postId, allComments, getAllComments, viewAll}) => {

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Latest Comments</h4>
      <button
        className={styles.viewAllBtn}
        key={postId}
        onClick={getAllComments}
      >{ !viewAll ? 'View All' : 'Hide All'}
        <span className={styles.counter}>{commentsCount}</span>
      </button>
      <div className={styles.commentsWrapper} >
        <ReactCSSTransitionGroup
          component='div'
          transitionName='lastComments'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className={styles.lastCommentsWrapper}
          transitionAppear={true}
          transitionAppearTimeout={500}
        >
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
          }) }
        </ReactCSSTransitionGroup>
        <div className={styles.allCommentsWrapper} >
            { viewAll ? allComments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  avatarUrl={comment.author.avatar}
                  name={comment.author.display_name}
                  body={comment.body}
                  time={comment.updated_at}
                />
              );
            }) : null }
        </div>
      </div>
    </div>
  );
};


CommentBox.propTypes = {
  comments: React.PropTypes.array,
  commentsCount: React.PropTypes.number,
  postId: React.PropTypes.string,
  allComments: React.PropTypes.array,
  getAllComments: React.PropTypes.func,
  viewAll: React.PropTypes.bool
}

export default CommentBox;
