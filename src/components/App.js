// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [dogImage, setdogImage] = useState("");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setdogImage(data.message)
        setisLoading(true);
    });  
 
  }, []);

  if (!isLoading) return <p>Loading...</p>;

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;
