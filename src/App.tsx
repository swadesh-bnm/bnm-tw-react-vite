import { useState } from 'react';
import Message from './Message';
import ListGroup from './components/ListGroup';
import Blogs from './components/Blogs';
import HiddenGems from './components/HiddenGems';
import FeaturedVideo from './components/FeaturedVideo';
import TWMenu from './components/TWMenu';

import './App.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <h1>Tourism Wings</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
        <table>
        <tr><td><Message/></td><td><TWMenu/></td></tr>
       
        {/*<Clock />*/}
        {/*<Transactions />*/}
        <tr><td><FeaturedVideo/></td></tr>
        <tr><td><ListGroup /></td></tr>
        <tr><td><Blogs/></td></tr>
        <tr><td><HiddenGems/></td></tr>
        </table>

      </div>

    </>
  );
}

export default App;
