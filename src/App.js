import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { Home } from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
