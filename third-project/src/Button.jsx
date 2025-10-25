function Button(){
//    inline css good for compoent withh min styling
        const styles={
            
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderradius: "5px",
            border: "none",
            cursor: "pointer",
            }
 return(
        
        <button style={styles}>Click Me</button>
    );
}

export default Button