import Tweet from 'components/Tweet';
import { getTweet } from 'lib/data';
import prisma from 'lib/prisma';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function SingleTweet({ tweet }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const deleteTweet = async () => {
    const res = await fetch('/api/tweet', {
      body: JSON.stringify({
        id: tweet.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });

    if (res.status === 401) {
      alert('Unauthorized');
    }
    if (res.status === 200) {
      router.push('/home');
    }
  };
  return (
    <div>
      <Tweet tweet={tweet} />
      {session && session.user.email === tweet.author.email && (
        <div className='flex-1 py-2 m-2 text-center'>
          <a
            onClick={deleteTweet}
            href='#'
            className='flex items-center w-12 px-13 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full'
          >
            delete
          </a>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  let tweet = await getTweet(params.id, prisma);
  tweet = JSON.parse(JSON.stringify(tweet));

  return {
    props: {
      tweet,
    },
  };
}
