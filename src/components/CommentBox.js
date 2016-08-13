import React from 'react';

import Comment from './Comment';

import styles from './commentBox.css';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var { comments } = this.props;
    var { count } = this.props;

    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Latest Comments</h3>
        <button className={styles.viewAllBtn}>View All
          <span className={styles.counter}>{count}</span>
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
  count: React.PropTypes.number
}

export default CommentBox;
