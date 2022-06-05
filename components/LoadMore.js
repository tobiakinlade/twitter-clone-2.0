import React from 'react';

function LoadMore({ tweets, setTweets }) {
  const moreTweet = async () => {
    const lastTweetId = tweets[tweets.length - 1].id;
    const res = await fetch(`/api/tweets?take=2&cursor=${lastTweetId}`);
    const data = await res.json();
    setTweets([...tweets, ...data]);
  };
  return (
    <div className='mt-10 flex justify-center'>
      <button
        onClick={moreTweet}
        className='justify-self-center border px-8 py-2 mt-0 mr-2 rounded-full color-accent-constrast bg-color-accent hover:bg-color-accent-hover'
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMore;
