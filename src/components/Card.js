import React from 'react';
import timeAgo from '../helpers/timeAgo';

import Post from './Post';
import Author from './Author';
import Tags from './Tags';
import CommentBox from './CommentBox';

import styles from './card.css';


const Card = ({msg}) => {
  var formatedTime = timeAgo(msg.updated_at);

  return (
    <div className={styles.card}>
      <Post
        title={msg.subject}
        body={msg.body}
      />
      <Author
        avatarUrl={msg.author.avatar}
        name={msg.author.display_name}
        time={formatedTime}
      />
      { msg.tags.length > 0 ? <Tags tags={msg.tags} /> : null }
      { msg.comments_count !== 0 ? <CommentBox comments={msg.comments} count={msg.comments_count}/> : null }
    </div>
  )
};


Card.propTypes = {
  msg: React.PropTypes.object
}

export default Card;
