import React, { useEffect, useState } from 'react'

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Return a loading message while the data is being fetched
  if (data === null) {
    return <p>Loading...</p>;
  }

  // Render the data when it is available
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Home