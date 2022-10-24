// create your App component here
import React, { useEffect, useState } from 'react';

const API_URL = "https://randomfox.ca/floof/"


function App() {
  const [image, setImage] = useState(null)

  useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => setImage(data.message))
  }, [])

  if (!image) {
      return <p>Loading...</p>
  }

  return (
    <div>

      <img src={image} alt="A Random Dog" />
    </div>
  );
}

export default App