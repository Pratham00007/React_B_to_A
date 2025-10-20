import Header from "./header" 
import Footer from "./footer";
import Food from "./Food";
function App() {
    return(
        // only one component can be returned so add these null braces
        <>
            <Header></Header>
            <Footer />
            <Food/>
        </>
    );
}
export default App
