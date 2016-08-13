import React from 'react';
import clean from '../helpers/clean';

import styles from './post.css';

const Post = ({title, body}) => {
  var cleanedBody = clean(body);
  //console.log(body);

  return (
    <div className={styles.container} >
      <h2 className={styles.title} >{title}</h2>
      <div>{cleanedBody}</div>
    </div>
  );
};



Post.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string
}

export default Post;
