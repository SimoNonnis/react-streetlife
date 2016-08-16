import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames/bind';

import Comment from './Comment';

import styles from './commentBox.css';
let cx = classNames.bind(styles);


const CommentBox = ({comments, commentsCount, postId, allComments, getAllComments, viewAll}) => {

  var transitionClasses = cx({
    enter: styles.enter,
    enterActive: styles.enterActive,
    leave: styles.leave,
    leaveActive: styles.leaveActive
  });

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
          transitionName={transitionClasses}
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}
          className={styles.lastCommentsWrapper}
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
