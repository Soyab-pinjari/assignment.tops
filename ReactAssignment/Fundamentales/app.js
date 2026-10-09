
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

    </div>
  );
}

export default App;
