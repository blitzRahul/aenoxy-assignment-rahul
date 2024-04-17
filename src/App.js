
import Navbar from "./components/Navbar";
import BackgroundImage from "./components/BackgroundImage";
import SearchBar from "./components/SearchBar";
import QuickHelp from "./components/QuickHelp";
import Categories from "./components/Categories";
import Footer from "./components/Footer";






function App() {
  return (
    <main>
     <div style={{backgroundImage:`url('/img/br3.svg')`}} className="h-full w-full absolute bg-cover -z-50 blur-[100px]">
    {/*glowing background*/}
    </div>
    <Navbar/>
   

   <SearchBar/>
  

    <QuickHelp/>
    
    <Categories/>
    <Footer/>
 
    </main>
  );
}

export default App;
