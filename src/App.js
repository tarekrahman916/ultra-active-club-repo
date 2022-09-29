import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App bg-gray-200">
      <Home></Home>
      <Blog></Blog>
    </div>
  );
}

export default App;
