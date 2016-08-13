import React from 'react';

import styles from './tags.css';

const Tags = ({tags}) => (
  <div className={styles.container} >
    <h3 className={styles.title}>Tags: </h3>
    {tags.map((tag, i) => (
      <span key={`${i}tags`} className={styles.item}>{tag.name}</span>
    ))}
  </div>
);


Tags.propTypes = {
  tags: React.PropTypes.array
}

export default Tags;
