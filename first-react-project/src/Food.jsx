function Food(){
// we can directtly use js outside return statement

const food1="Apple";
const food2="Banana";

return(
    <ul>
        <li>Orange</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
    </ul>
)
}

export default Food