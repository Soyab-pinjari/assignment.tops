
import React from 'react';
import TrendingSong from './TrendingSong';

function App() {
  return (
    <div>
      <h1>Welcome to My React Zomato App</h1>
      <TrendingSong />
          <h1>Functional Component</h1>
      <UserGreeting username="Soyeb" />

      <h1>Class Component</h1>
      <UserGreetingClass username="Soyeb" />
      <h1>Instagram User Profiles</h1>

      <UserProfile
        username="Soyeb"
        followers={1200}
        profilePic="https://i.pravatar.cc/100?img=12"
      />
  <h1>Shopping Cart</h1>
      <CartItem />

      <hr />

      <h1>Spotify Song Voting</h1>
      <SongVote />
    </div>
  );
}

export default App;
