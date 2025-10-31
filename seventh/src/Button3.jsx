function Button3(){

//    e is for event
    const handleClick2 = (e) => console.log(e);


    return (<button onClick={(e)=>handleClick2(e)}>ClickMe </button>)

}

export default Button3;