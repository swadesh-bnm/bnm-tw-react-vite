import { useState } from 'react';
import Message from './Message';
import ListGroup from './components/ListGroup';
import Blogs from './components/Blogs';
import HiddenGems from './components/HiddenGems';
import FeaturedVideo from './components/FeaturedVideo';
import TWHeader from './components/TWHeader';

import './App.css';


export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
{/*<img src="https://bnm-media.s3.us-east-1.amazonaws.com/images/dove-bird.gif"> </img>*/}

<TWHeader/>
      
      <div className="card">
        
        <table>
          <tbody>
        
        <tr><td><Message/></td></tr>
        {/*<Clock />*/}
        {/*<Transactions />*/}
        <tr><td><FeaturedVideo/></td></tr>
        <tr><td><ListGroup /></td></tr>
        <tr><td><Blogs/></td></tr>
        <tr><td><HiddenGems/></td></tr>
        </tbody>
        </table>
        <button onClick={() => setCount((count) => count + 1)}>click for fun ! {count}</button>

      </div>

    </>
  );
}

export default App;
