import TWMenu from './TWMenu';

function TWHeader(){
    const TWlogo ="https://bnm-media.s3.us-east-1.amazonaws.com/images/dove-bird.gif";

     return (
    <>
    <div id="header">
    <h1><img width="100" height="100" src={TWlogo}></img> Tourism Wings</h1>
    <TWMenu/>
    </div>
    
    
    </>
    )
}

export default TWHeader;