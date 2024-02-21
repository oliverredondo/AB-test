import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [visitor, setVisitor] = useState(0);
  const [currentOption, setCurrentOption] = useState('');

  useEffect(() => {
    const randomizeVisitor = Math.random();
    if (randomizeVisitor >= 0.5) {
      setVisitor(1);
      setCurrentOption('opt1');
    } else {
      setVisitor(2);
      setCurrentOption('opt2');
    }
  }, []);

  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Submitted:', { firstName, lastName, email, currentOption });
    // You can perform further actions here, such as sending data to a server
  };

  return (
    <>
      <div className="hero">
        <h1>Soft skills: 101</h1>
        <h2>Master the art of being a good teammate.</h2>
      </div>
      <section className="content">
        {visitor === 1 && (
          <div className="opt1">
            <p>
              Ever been in a meeting where someone just can't stop talking?
              <br />
              Or maybe you're the one doing all the talking?
              <br />
              Congratulations! This website is for you.
            </p>
          </div>
        )}
        {visitor === 2 && (
          <div className="opt2">
            <p>
              Working in a multicultural environment can often lead to unwanted
              misunderstandings.
              
              Explore the wonders of improving your soft skills for an efficient
              communication.
            </p>
          </div>
        )}

        {/* Form for collecting user data */}
        <form onSubmit={handleSubmit} className="wrapper">
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Download PDF for free</button>
        </form>
      </section>
    </>
  );
}

export default App;
