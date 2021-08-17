import React, {useState} from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(true);
	// console.log(hogs)


	return (
		<div className="App">
			<Nav setShowGreased={setShowGreased}/>
			<HogContainer showGreased={showGreased} hogs={hogs.filter(hog => showGreased || !hog.greased)} />
		
			
		</div>
	);
}


export default App;
