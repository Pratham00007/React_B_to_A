function Button(){

    // js function
    // const handleClick = () => console.log("OUCH");
    const handleClick2 =(name) => console.log(`${name} stop clicking`);

    // by this function is called automatic without click as soon it runs
    // return<button onClick={handleClick2("Rakesh")}>Click me 💕</button>

    // Solution
    return (<button onClick={()=>handleClick2('Rakesh')}>ClickMe </button>)

    // window + ;
}

export default Button;