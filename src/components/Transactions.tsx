function Transactions(){

    const items = ["Expenses","Earnings"];
    return (
    <>
    <h1>Transactions</h1>
    <ul className = "list-group">
        {items.map ((item) => <li className="list-group-item" key={item} onClick={() => console.log({item})} >{item}</li>)}
        </ul>
    </>
    )
}

export default Transactions;