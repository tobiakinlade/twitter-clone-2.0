import React from 'react';
import Tweet from './Tweet';

function Tweets({ tweets, nolink }) {
  if (!tweets) return null;
  return (
    <>
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} nolink={nolink} />
      ))}
    </>
  );
}

export default Tweets;
