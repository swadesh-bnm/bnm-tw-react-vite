function ListGroup(){

    const items = [<a href='https://en.wikipedia.org/wiki/Bhubaneswar' target='_blank'>Bhubaneswar</a>,
    <a href='https://en.wikipedia.org/wiki/Cuttack' target='_blank'>Cuttack</a>,
    <a href='https://en.wikipedia.org/wiki/Puri' target='_blank'>Puri</a>];
    return (
    <>
    <h1>Odisha! India's best kept secret</h1>
    <ul className = "list-group">
        {items.map ((item) => <li className="list-group-item" key={item} onClick={() => console.log({item})} >{item}</li>)}
        </ul>
    </>
    )
}

export default ListGroup;