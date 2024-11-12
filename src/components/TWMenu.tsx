function TWMenu(){

    const items = ["Travel","Tourism","News", "Fashion","Entertainment"];
    return (
    <>
    
    <div>{items.map ((item) => <button background-color="FAD7A0" key={item} onClick={() => console.log({item})} >{item}</button>)}</div>
    
    
    </>
    )
}

export default TWMenu;