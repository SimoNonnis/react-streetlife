import React from 'react';

import styles from './newsFeed.css';

class NewsFeed extends  React.Component {
  constructor (props) {
      super(props);
  }

  render () {
    var { messages } = this.props;
    return (
      <div className={styles.container}>
        {messages.map((msg) => <h2 key={msg.id}>{msg.author.display_name}</h2>)} 
      </div>
    );
  }
}



NewsFeed.propTypes = {
  messages: React.PropTypes.array
}

export default NewsFeed;
