import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import ContentBlock from "./Components/Contents/ContentBlock";
import metaData from "./Constants/meta.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        {
          Object.keys(metaData).map((title) =>
            <ContentBlock
              title={title}
              content={metaData[title]}
              key={title}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
