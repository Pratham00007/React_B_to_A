function List(){
    const fruits=[{id:1,name:"apple",calories:95},
                {id:2,name:"orange",calories:75},
                {id:3,name:"coconut",calories:155},
                {id:4,name:"pineapple",calories:35}];
    


    // fruits.sort((a,b)=>a.name.localeCompare(b.name)); // alphabetically accending
    // fruits.sort((a,b)=>b.name.localeCompare(a.name)); // alphabetically decending
    // fruits.sort((a,b)=>a.calories-b.calories); // by calories
    
    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                         {fruit.name}:&nbsp;
    //                                         <b>{fruit.calories}</b>
    // </li>);
//  means fruit in fruits
    // return(<ul>{listItems}</ul>);

        const lowCalFruits=fruits.filter(fruit => fruit.calories < 100);

        const listItems = lowCalFruits.map(localCalFruit => <li key={localCalFruit.id}>
                                             {localCalFruit.name}:&nbsp;
                                             <b>{localCalFruit.calories}</b>
    </li>);

    return (<ol>{listItems}</ol>);


}


export default List