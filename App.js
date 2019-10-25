import React, {
  useEffect,
  useState
} from 'react';

import Loading from './src/pages/Loading/Loading'
import PockScreen from './src/pages/PockScreen/PockScreen'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    (async function () {
      (async () =>
        new Promise((resolve) =>
          setTimeout(
            () => setLoaded('result'),
            2000
          )
        ))()
    })()
  }, [])

  return (
    <>
    {!loaded?<Loading /> : <PockScreen />}
    </>
  );  
};

