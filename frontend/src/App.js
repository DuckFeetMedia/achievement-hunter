// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {getGamerScore} from './functions/custom.js'
import Title from './components/Title'
import Modal from './components/Modal'
import Eventlist from './components/Goallist'
import Newgoalform from './components/Newgoalform';
import {Link} from 'react-router-dom';
import Data from './data.json';

function App() {
	
	// const [items, setItems] = useState([]);

    // const fetchItems = async () => {
    //     const data = await fetch('/data');
    //     const items = await data.json();
    //     setItems(items);
    // }

	useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/data');
        const items = await data.json();
        setItems(items);
    }

	let data = items;
	// let data = [
	// 	{ title: "Make it not drizzle", id: 1, description: "Have 5k savings", score: 25, progress: 0 },
	// 	{ title: "Make it not rain", id: 2, description: "Have 10k savings", score: 50, progress: 50 },
	// 	{ title: "I'm a business man and this is my business", id: 3, description: "Register a business ABN", score: 30, progress: 0 },
	// 	{ title: "masturDate", description: "Go on a solo date", id: 4, score: 30, progress: 73, checkpoints: { "Movies": 0, "Dinner": 1, "Park": 1, } }
	// ]

	let getScore = getGamerScore(data);
	const [showModal, setShowModal] = useState(false)
	const [showEvents, setShowEvents] = useState(true)
	// const [items, setItems] = useState(data)
	const [totalScore, setTotalScore] = useState(getScore)

	const addGoal = (item) => {
		setItems((prevItems) => {
			return [...prevItems, item]
		})
		setShowModal(false)
	}

	const handleClick = (id, progress) => {
		setItems((prevItems) => {
			prevItems.forEach((item) => {
				if (item.id === id) {
					item.progress = 100;
					if (progress === 100) {
						item.progress = 0;
					}
				}
				// return prevItems;
			})

			setTotalScore(getGamerScore(items))


			return prevItems.filter((item) => {
				return true;// id !== item.id
			});

		})
	}

	const handleClose = () => {
		setShowModal(false)
	}

	return (
		<div className="App">
		<Title title="Goals" />
			<header className="App-header">
				{showEvents && (
					<div>
						<button onClick={() => setShowEvents(false)}>hide items</button>
					</div>
				)}

				{!showEvents && (
					<div>
						<button onClick={() => setShowEvents(true)}>show items</button>
					</div>
				)}

				<div className="gamer-score">
					{totalScore.currentScore}/{totalScore.total}
				</div>
			</header>

			<section className="goal-list">
				{showEvents && <Eventlist items={items} handleClick={handleClick}/>}
			</section>

			{showModal && <Modal handleClose={handleClose}>
				<Newgoalform goalid={items.length} addGoal={addGoal}/>
			</Modal>}

			{!showModal && <button onClick={() => setShowModal(true)} >
					Add New Goal
			</button>}
		</div>
	);
}

export default App;
