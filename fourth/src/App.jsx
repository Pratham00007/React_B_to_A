import Student from "./Student"

function App() {
  return(
    // student is child app is parent
    <>
    {/* to send other than string wnclose {} */}
      <Student name="Pratham" age="30" isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student/>
    </>
  )
}

export default App
