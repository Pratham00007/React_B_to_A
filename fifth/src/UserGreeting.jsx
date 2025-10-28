function UserGreeting(props){

    const welcomeWessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>
    
    const loginPrompt = <h2 className="login-prompt">
                        Please login to continue
                        </h2>


    return(props.isLoggedIn ?  welcomeWessage 
                            :  loginPrompt 
    )
}

export default UserGreeting;