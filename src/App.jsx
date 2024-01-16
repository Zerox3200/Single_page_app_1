import './App.scss';
import { Home } from './pages/Home/Home';
import { Loader } from './components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './rtk/Store';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, []);

  return (
    <>
      <Provider store={store}>
        {isLoading ? <Loader /> : <Home />}
      </Provider>
    </>
  );
}

export default App;
