import React from 'react';
import Slides from './Slides';

const App = () => {
  // Sample slide data
  const slides = [
    { title: "Today's workout plan", text: "We're gonna do 3 fundamental exercises." },
    { title: "First, 10 push-ups", text: "Do 10 reps. Remember about proper form." },
    { title: "Next, 20 squats", text: "Squats are important. Remember to keep your back straight." },
    { title: "Finally, 15 sit-ups", text: "Slightly bend your knees. Remember about proper form." },
    { title: "Great job!", text: "You made it, have a nice day and see you next time!" }
  ];

  return (
    <div>
      <Slides slides={slides} />
    </div>
  );
};

export default App;
