import { useState } from 'react'
import axios from 'axios';
import './App.css';
import ErrorDisplay from './components/error/error';
import Input from './components/input/input';
import DataCarousel from './components/data-carousel/data-carousel';
import Spinner from './components/spinner/spinner';

function App() {
  const [urls, setUrls] = useState(['', '', '']);
  const [metadata, setMetadata] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleChangeEnd = (index, value) => {
    if (index + 1 === urls.length) {
      if (value.length === 0 && urls.length > 3) {
        setUrls(urls.slice(0, -1));
      }
      else if (value.length !== 0) {
        setUrls(current => [...current, '']);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setMetadata([]);
    setLoading(true)
    try {
      const response = await axios.post(
        'http://localhost:5000/fetch-metadata',
        { urls });
      console.log(response.data);
      setMetadata(response.data);
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError('An error occurred while fetching metadata.');
    }

  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {urls.map((url, index) => (
          <Input key={index} index={index} url={url} onHandleChange={handleChange} onHandleChangeEnd={handleChangeEnd} />
        ))}
        <button type="submit">Submit</button>
      </form>
      <ErrorDisplay error={error} />
      {
        loading ? <Spinner/> :
          <DataCarousel items={metadata} />
      }

    </div>
  );
}

export default App;
