import React from 'react';

import Post from './Post';
import Author from './Author';
import Tags from './Tags';
import CommentBox from './CommentBox';

import styles from './card.css';

const Card = ({msg}) => {
  return (
    <div className={styles.card}>
      <Post title={msg.subject} body={msg.body}/>
      <Author
        avatarUrl={msg.author.avatar}
        name={msg.author.display_name}
        time={msg.updated_at}
      />
      <Tags />
      <CommentBox comments={msg.comments}/>
    </div>
  )
};


Card.propTypes = {
  msg: React.PropTypes.object
}

export default Card;
