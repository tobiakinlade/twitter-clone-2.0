import Tweets from 'components/Tweets';
import { getUserTweets } from 'lib/data';
import prisma from 'lib/prisma';

function UserProfile({ name, tweets }) {
  return (
    <>
      <p className='text-center p-5'>User profile of {name}</p>
      <Tweets tweets={tweets} />
    </>
  );
}
export default UserProfile;

export async function getServerSideProps({ params }) {
  let tweets = await getUserTweets(params.name, prisma);
  tweets = JSON.parse(JSON.stringify(tweets));

  return {
    props: {
      name: params.name,
      tweets,
    },
  };
}
