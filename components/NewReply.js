import { useRouter } from 'next/router';
import { useState } from 'react';
import Tweet from './Tweet';

function NewReply({ tweet }) {
  const router = useRouter();
  const [reply, setReply] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reply) {
      alert('Enter some text in the reply');
      return;
    }

    const res = await fetch('/api/tweet', {
      body: JSON.stringify({
        parent: tweet.id,
        content: reply,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    router.reload(window.location.pathname);
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className='border p-4 w-full text-lg font-medium bg-transparent outline-none color-primary'
        rows={2}
        cols={50}
        placeholder='Tweet your reply'
        onChange={(e) => setReply(e.target.value)}
      />
      <div className='flex'>
        <div className='flex-1 mb-5'>
          <button className='border float-right ml-2 px-8 py-2 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover'>
            Reply
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewReply;
