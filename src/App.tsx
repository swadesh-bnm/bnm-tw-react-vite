import { useState } from 'react';
import Message from './Message';
import ListGroup from './components/ListGroup';
import Blogs from './components/Blogs';
import HiddenGems from './components/HiddenGems';
import FeaturedVideo from './components/FeaturedVideo';

import './App.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <h1>Tourism Wings</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
        <Message />
        {/*<Clock />*/}
        {/*<Transactions />*/}
        <FeaturedVideo/>
        <ListGroup />
        <Blogs/>
        <HiddenGems/>

      </div>

    </>
  );
}

export default App;
