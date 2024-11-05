function ListGroup(){

    const items = ["Bhubaneswar","Cuttack","Puri"];
    return (
    <>
    <h1>City List</h1>
    <ul className = "list-group">
        {items.map ((item) => <li className="list-group-item" key={item} onClick={() => console.log({item})} >{item}</li>)}
        </ul>
    </>
    )
}

export default ListGroup;