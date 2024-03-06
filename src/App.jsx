
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";


function App() {
  return (
    <>
      <div className="h-screen flex justify-between flex-col ">
        <NavbarComponent />
        
        <MainComponent></MainComponent>
        <FooterComponent/>
      </div>
      
    </>
  );
}

export default App;
