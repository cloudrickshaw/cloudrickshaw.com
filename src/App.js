import "./App.css";
import Navbar from "./Nav/Navbar";
import Seperator from "./Components/Seperator";

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Navbar />
				<Seperator title={"MISSION"} />
				<Seperator title={"Values"} />
				<Seperator title={"what we offer"} />
				<Seperator title={"Team"} />
				<Seperator title={"About"} />
				<Seperator title={"Contacts"} />
			</div>
		</div>
	);
}

export default App;
