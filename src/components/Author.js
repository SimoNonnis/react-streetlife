import React from 'react';

import styles from './author.css';

const Author = ({avatarUrl, name, date}) => (
  <div className={styles.container} >
    <span className={styles.avatarBlock} >
      <img className={styles.avatar} src={avatarUrl} alt="Author Avatar"/>
    </span>
    <span className={styles.authorName}><strong>{name}</strong></span>
    <span className={styles.postedDate}><em>{date} ago</em></span>
  </div>
);

Author.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,
  name: React.PropTypes.string,
  avatarUrl: React.PropTypes.string,
  date: React.PropTypes.string
}

export default Author;
