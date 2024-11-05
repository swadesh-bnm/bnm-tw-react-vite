function HiddenGems(){

    const items = ["https://bnm-media.s3.us-east-1.amazonaws.com/images/IMG_2791.jpeg","https://bnm-media.s3.us-east-1.amazonaws.com/images/IMG_2792.jpeg"];
    return (
    <>
    <h1>Hidden Gems</h1>
    <ul className = "list-group">
        {items.map ((item) => <li className="list-group-item" key={item} onClick={() => console.log({item})} ><img width="250" height="350" src={item}></img></li>)}
        </ul>
    </>
    )
}

export default HiddenGems;