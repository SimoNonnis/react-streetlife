import React from 'react';
import timeAgo from '../helpers/timeAgo';

import styles from './comment.css';

const Comment = ({avatarUrl, name, body, time}) => {
  var formatedTime = timeAgo(time);

  return (
    <div className={styles.container} >
      <div className={styles.header}>
        <span className={styles.avatarBlock} >
          <img className={styles.avatar} src={avatarUrl} alt="Author Avatar"/>
        </span>
        <h3 className={styles.authorName}>{name}</h3>
      </div>

      <p>{body}</p>
      <span className={styles.time}><em>{formatedTime}</em></span>

    </div>
  );
};


Comment.propTypes = {
  avatarUrl: React.PropTypes.string,
  name: React.PropTypes.string,
  body: React.PropTypes.string,
  time: React.PropTypes.string
}

export default Comment;
