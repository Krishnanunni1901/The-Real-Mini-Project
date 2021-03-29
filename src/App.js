import React, { useState, useEffect } from "react";


function App() {


  const [value, setValue] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      
      .then((Data) => setValue(Data));
      

  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(value);
  return (
    <div className="App">
      <ol>
        {value.map(post => 
          
            <li>
              {post.id}-{post.title}
            </li>
          
        )}
      </ol>
    </div>
  );
}

export default App;
