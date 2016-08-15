import React from 'react';
import timeAgo from '../helpers/timeAgo';

import Post from './Post';
import Author from './Author';
import Tags from './Tags';
import CommentBoxContainer from './CommentBoxContainer';

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
      { msg.comments_count !== 0 ? <CommentBoxContainer comments={msg.comments} commentsCount={msg.comments_count} postId={msg.id}/> : null }
    </div>
  )
};


Card.propTypes = {
  msg: React.PropTypes.object
}

export default Card;
