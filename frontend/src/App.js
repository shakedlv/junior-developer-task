import { useState } from 'react'
import axios from 'axios';

import './App.css';

function App() {
  const [urls, setUrls] = useState(['', '', '']);
  const [metadata, setMetadata] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);


  };
  const handleChangeEnd = (index, value) => {
    if (index + 1 === urls.length) {
      if (value.length === 0 && urls.length > 4) {
        setUrls(urls.slice(0, -1));
      }
      else {
        setUrls(current => [...current, '']);
      }
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setMetadata([]);

    try {
      const response = await axios.post(
        'http://localhost:5000/fetch-metadata',
        { urls });
      setMetadata(response.data);
    } catch (err) {
      setError('An error occurred while fetching metadata.');
    }

  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {urls.map((url, index) => (
          <input
            key={index}
            type="text"
            value={url}
            onChange={(e) => handleChange(index, e.target.value)}
            onBlur={(e) => handleChangeEnd(index, e.target.value)}
            placeholder="Enter URL"
          />
        ))}
        <button type="submit">Submit</button>
      </form>

      {error && <div className="error">{error}</div>}

      <div className="metadata-list">
        {metadata.map((item, index) => (
          <div key={index} className="metadata-item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.image && <img src={item.image} alt={item.title} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
