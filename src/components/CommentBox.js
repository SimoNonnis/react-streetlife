import React from 'react';

import Comment from './Comment';

import styles from './commentBox.css';

class CommentBox extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Latest Comments</h3>
        <button className={styles.viewAllBtn}>View All
          <span className={styles.counter}>20</span>
        </button>
        <Comment />
      </div>
    )
  }
}

export default CommentBox;
