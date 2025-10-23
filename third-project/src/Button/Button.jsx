import styles from './Button.module.css'
function Button(){
    return(
        // Module CSS -> if differnt button 
        // so style dont conflict 
        // it genrate unique hash class name
        <button className={styles.button}>Click Me</button>
    );
}

export default Button