import Header from "./header" 
import Footer from "./footer";
function App() {
    return(
        // only one component can be returned so add these null braces
        <>
            <Header></Header>
            <Footer />
        </>
    );
}
export default App
