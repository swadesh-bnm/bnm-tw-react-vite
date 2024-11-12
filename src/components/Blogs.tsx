function Blogs(){

    const items = ["First Blog","Second Blog","Third Blog"];
    return (
    <>
    <h1>Featured Blogs</h1>
    <ul className = "list-group">
        {items.map ((item) => <li className="list-group-item" key={item} onClick={() => console.log({item})} >{item}</li>)}
        </ul>
    </>
    )
}

export default Blogs;