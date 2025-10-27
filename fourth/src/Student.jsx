import PropTypes from 'prop-types';
 
// props is javascript object and get all the value passed when student is called
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {/* cant show boolean directly so use terninary operator */}
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

// proptypes to make sure crrect data is passed
// good for debugging just give warning 
Student.propTypes = {
    name:PropTypes.string,
    age: PropTypes.number,
    isStudent:PropTypes.bool,
}

Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,
}

export default Student