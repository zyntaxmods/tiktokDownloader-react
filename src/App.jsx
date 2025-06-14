import React, { useCallback, useState } from 'react'
import Hero from './components/Hero'
import Search from './components/Search'
import Showcase from './components/Showcase'

const App = () => {
  const[result, setResult] = useState(null);
  const[loading, setLoading] = useState(false);
  const getData = useCallback(async(user) =>{
    if(!user.trim()) return;
    setLoading(true);
        const url = `https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/index?url=${user}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5d4bc41001msh8061d58e712e8ffp1520edjsn72515b36a183',
		'x-rapidapi-host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setResult(result);
} catch (error) {
  console.error(error);
  return null;
}
finally{
    setLoading(false);
}
    }, []);
  return (
    <>
    <Hero/>
    <Search onSearch={getData} loading={loading}/>
    <Showcase result={result}/>
    </>
  )
}

export default App