import { Content } from "./m_components/Content";
import { Header } from "./m_components/Header";
import Slider from "./m_components/Slider";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Slider/>
    </div>
  );
}

export default App;
