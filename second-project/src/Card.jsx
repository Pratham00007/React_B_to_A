import ProfilePic from './assets/Profile.jpg'
function Card(){
    // using inline css but class is keyword in react so use className
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="Profie Pic" width="150" height="100"></img>
            <h2 className="card-title">Pratham</h2>
            <p className='card-text'>I am Software Engineer and learning React.</p>
        </div>
    );
}

export default Card