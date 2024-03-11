import "./App.scss";
import PlayBar from "./components/playbar/PlayBar";
import MainPage from "./main-page/MainPage";

function App() {
	return (
		<div className="wrapper">
			<MainPage />
			<PlayBar />
		</div>
	);
}

export default App;
