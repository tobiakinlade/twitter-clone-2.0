import Tweet from 'components/Tweet';
import { getTweet } from 'lib/data';
import prisma from 'lib/prisma';

export default function SingleTweet({ tweet }) {
  return <Tweet tweet={tweet} />;
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
