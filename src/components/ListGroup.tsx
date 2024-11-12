function ListGroup(){

    const items = [<a href='https://en.wikipedia.org/wiki/Bhubaneswar' target='_blank'>Bhubaneswar</a>,
    <a href='https://en.wikipedia.org/wiki/Cuttack' target='_blank'>Cuttack</a>,
    <a href='https://en.wikipedia.org/wiki/Puri' target='_blank'>Puri</a>];
    return (
    <>
    <h1> Explore Odisha! India's best kept secret</h1>

    {/*
    <ul className = "list-group">
        {items.map ((item) => <li className="list-group-item" key={item} onClick={() => console.log({item})} >{item}</li>)}
        </ul>
        */}

<h2> Our Cities</h2>
<table><tbody><tr>{items.map((item) => <td> | {item} | </td>)}</tr></tbody></table>


    </>
    )
}

export default ListGroup;