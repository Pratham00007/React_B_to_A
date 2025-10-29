function List2(props){

    const category=props.category;
    const itemList=props.items;
        
    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}:&nbsp;
                                            <b>{item.calories}</b>
    </li>);
//  means fruit in fruits
    return(<><h3>{category}</h3><ul>{listItems}</ul></>);
}
export default List2