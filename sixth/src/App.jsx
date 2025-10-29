import List from "./List";
import List2 from "./List2";

function App() {

   const fruits=[{id:1,name:"apple",calories:95},
                {id:2,name:"orange",calories:75},
                {id:3,name:"coconut",calories:155},
                {id:4,name:"pineapple",calories:35}];


    const vegetables=[{id:1,name:"potatoes",calories:95},
                {id:2,name:"brinjal",calories:75},
                {id:3,name:"celery",calories:155},
                {id:4,name:"corn",calories:35}];
 
  return (
    <>
      <List/>
      <List2 items={fruits} category="Fruits"/>       
      <List2 items={vegetables} category="Vegetables"/> 
    </>
  );
}

export default App
