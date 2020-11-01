import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ChocolateContainer from "./components/ChocolateContainer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<HooksCakeContainer />
				<CakeContainer />
				<IceCreamContainer />
				<ChocolateContainer/>
			</div>
		</Provider>
	);
}

export default App;
