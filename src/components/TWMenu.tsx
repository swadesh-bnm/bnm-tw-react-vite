function TWMenu(){

    const items = ["Cities","Featured Blogs", "Hidden Gems"];
    return (
    <>
    <h1>Menu</h1>
    <ul className = "list-group">
    {items.map ((item) => <li className="list-group-item" key={item} onClick={() => console.log({item})} >{item}</li>)}
    </ul>
    </>
    )
}

export default TWMenu;