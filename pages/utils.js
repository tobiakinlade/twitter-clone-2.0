import React from 'react';

const Utils = () => {
  const cleanDatabase = async () => {
    await fetch('/api/utils', {
      body: JSON.stringify({
        task: 'clean_database',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  };

  const generateUserAndTweet = async () => {
    await fetch('/api/utils', {
      body: JSON.stringify({
        task: 'generate_users_and_tweets',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  };

  const generateNewTweet = async () => {
    await fetch('/api/utils', {
      body: JSON.stringify({
        task: 'generate_one_tweet',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  };
  return (
    <div className='mt-10 ml-20'>
      <h2 className='mb-10 text-xl'>Utils</h2>
      <div className='flex-1 mb-5'>
        <button
          onClick={cleanDatabase}
          className='border px-8 py-2 mt-2 mr-8 font-bold rounded-full color-accent-contract bg-color-accent hover:bg-color-accent-hover-darker'
        >
          Clean database
        </button>
      </div>
      <div className='flex-1 mb-5'>
        <button
          onClick={generateUserAndTweet}
          className='border px-8 py-2 mt-2 mr-8 font-bold rounded-full color-accent-contract bg-color-accent hover:bg-color-accent-hover-darker'
        >
          Generate users and tweets
        </button>
      </div>
      <div className='flex-1 mb-5'>
        <button
          onClick={generateNewTweet}
          className='border px-8 py-2 mt-2 mr-8 font-bold rounded-full color-accent-contract bg-color-accent hover:bg-color-accent-hover-darker'
        >
          Generate 1 new tweet
        </button>
      </div>
    </div>
  );
};

export default Utils;
