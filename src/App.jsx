
import NavbarComponent from "./components/header/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";
import MainComponent from "./components/main/MainComponent";


function App() {
  return (
    <>
      <div className="h-screen flex justify-between flex-col ">
        <NavbarComponent />
        <MainComponent/>
        <FooterComponent/>
      </div>
    </>
  );
}

export default App;
