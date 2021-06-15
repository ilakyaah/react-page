import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import QuestionPage from './components/QuestionPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import CardPage from './components/CardPage';
import QuestionCard from './components/QuestionCard';
import FourthPage from './components/FourthPage';
import Nav from './pages/Nav';
import MainPage from './components/MainPage';

const App = () => {
	return (
		<Router>
			<div className="App">
				{/* <Navbar /> */}
				<Route path="/" component={FirstPage} exact />
				<Route path="/test" component={CardPage} exact />
				<Route path="/questionbank" component={QuestionCard} exact />
				<Route path="/questionbank/questions" component={FourthPage} exact />
				<Route path="/test/questions" component={MainPage} exact />
				<Route path="/addquestions" component={SecondPage} exact />

				<Nav />
			</div>
		</Router>
	);
};

export default App;
