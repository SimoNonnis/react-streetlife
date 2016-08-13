import React from 'react';

import styles from './comment.css';

const Comment = ({avatarUrl, name, body, time}) => (
  <div className={styles.container} >
    <div className={styles.header}>
      <span className={styles.avatarBlock} >
        <img className={styles.avatar} src={avatarUrl} alt="Author Avatar"/>
      </span>
      <h3 className={styles.authorName}><strong>{name}</strong></h3>
    </div>

    <p>{body}</p>
    <span className={styles.time}><em>{time} ago</em></span>

  </div>
);


Comment.propTypes = {
  avatarUrl: React.PropTypes.string,
  name: React.PropTypes.string,
  body: React.PropTypes.string,
  time: React.PropTypes.string
}

export default Comment;
