import React from 'react';

import Card from './Card';

import styles from './newsFeed.css';

class NewsFeed extends  React.Component {
  constructor (props) {
      super(props);
  }

  render () {
    var { messages } = this.props;
    return (
      <div className={styles.container}>
        { messages.map((msg) => <Card key={msg.id} msg={msg} />) }
      </div>
    );
  }
}



NewsFeed.propTypes = {
  messages: React.PropTypes.array
}

export default NewsFeed;
