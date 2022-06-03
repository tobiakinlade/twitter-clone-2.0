import timeago from 'lib/timeago';
function Tweet({ tweet }) {
  return (
    <p>
      {timeago.format(new Date(tweet.createdAt))} {tweet.author.name}{' '}
      {tweet.content}
    </p>
  );
}

export default Tweet;
