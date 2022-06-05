import Tweets from 'components/Tweets';
import { getTweets } from 'lib/data';
import prisma from 'lib/prisma';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Welcome({ tweets }) {
  const [mounted, setMounted] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  if (!mounted) return;

  useEffect(() => setMounted(true), []);

  if (status === 'loading') {
    return null;
  }
  if (session) {
    router.push('/home');
  }
  return (
    <div className='mt-10 dark'>
      <Tweets tweets={tweets} />
      <p className='text-center p-4 border m-4'>
        <h2 className='mb-10'>Join the conversation!</h2>
        <a
          className='border px-8 py-2 mt-2 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker'
          href='/api/auth/signin'
        >
          login
        </a>
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  const take = 3;
  let tweets = await getTweets(prisma, take);
  tweets = JSON.parse(JSON.stringify(tweets));
  return {
    props: {
      tweets,
    },
  };
}
