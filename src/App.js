import Navi from './components/Navi';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Navi />
			</header>
			<main>
				<Home />
				<About />
				<Projects />
			</main>
		</div>
	);
}

export default App;
