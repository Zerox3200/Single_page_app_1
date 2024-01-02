import './App.scss';
import { Home } from './pages/Home/Home';
import { Loader } from './components/Loader/Loader';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <Home />}
    </>
  );
}

export default App;
