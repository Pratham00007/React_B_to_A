// conditional rendring = allows you to get what get rendered based on certain conditions

import UserGreeting from "./UserGreeting"

function App() {
  return(
  <UserGreeting isLoggedIn={false} username="Pratham" />
  );
}


export default App
