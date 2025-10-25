import Student from "./Student"

function App() {
  return(
    // student is child app is parent
    <>
    {/* to send other than string wnclose {} */}
      <Student name="Pratham" age={30} isStudent={true}/>
    </>
  )
}

export default App
