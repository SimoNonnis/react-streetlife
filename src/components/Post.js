/* eslint-disable react/no-danger */

import React from 'react';

import styles from './post.css';

const Post = ({title, body}) => {

  function parseBody () {
    return {
      __html: body
    }
  }

  return (
    <div className={styles.container} >
      <h2 className={styles.title} >{title}</h2>
      <div dangerouslySetInnerHTML={parseBody()} />
    </div>
  );
};



Post.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string
}

export default Post;
