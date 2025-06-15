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
        const url = `https://tiktok-api15.p.rapidapi.com/index/Tiktok/getVideoInfo?url=${user}%2F&hd=1`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fddac2cc2emsh54d66c3425a468cp14354bjsn9753fb99c348',
		'x-rapidapi-host': 'tiktok-api15.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
  if(!response.ok){
    console.error("Failed fetching data");
    setResult(null);
    return;
  }
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