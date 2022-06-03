import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

function NewTweet() {
  const { data: session } = useSession('');
  const [content, setContent] = useState();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('/api/tweet', {
      body: JSON.stringify({
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    router.reload(window.location.pathname);
  };

  if (!session || !session.user) return null;
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex'>
        <div className='flex-1 px-1 pt-2 mt-2 mr-1 ml-1'>
          <textarea
            className='border p-4 w-full text-lg font-medium bg-transparent outline-none color-primary'
            rows={2}
            cols={50}
            placeholder='What is happening'
            name='content'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>

      <div className='flex'>
        <div className='flex-1 mb-5'>
          <button className='border px-8 py-2 mr-2 mt-0 font-bold rounded-full float-right'>
            Tweet
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewTweet;
