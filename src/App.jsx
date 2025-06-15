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
        const url = `https://tiktok-download-without-watermark.p.rapidapi.com/analysis?url=${user}&hd=1`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bd3f9a0456msh1724c37c61f6b50p19b718jsn10baa672fdf0',
		'x-rapidapi-host': 'tiktok-download-without-watermark.p.rapidapi.com'
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