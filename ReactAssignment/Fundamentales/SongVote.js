
import React, { useState } from 'react';

function SongVote() {
  const [votes, setVotes] = useState(0);

  const upvote = () => {
    setVotes(votes + 1);
  };

  const downvote = () => {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  };

  return (
    <div>
      <h2>Song: Calm Down</h2>
      <h3>Votes: {votes}</h3>

      <button onClick={upvote}>▲ Upvote</button>
      <button onClick={downvote}>▼ Downvote</button>
    </div>
  );
}

export default SongVote;
