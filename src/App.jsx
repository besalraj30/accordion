import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  const [userDetails, setUserDetails] = useState([]);

  const fetchUserDetails = async() => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await response.json();
      if(json){
        setUserDetails(json);
      }
      console.log(json);
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Accordion userDetails = {userDetails}/>
    </>
  )
}

export default App
