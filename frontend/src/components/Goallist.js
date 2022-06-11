import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Goallist({events, handleClick}) {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/data');
        const items = await data.json();
        setItems(items);
    }

    return (
        <div className="box-list">
            {
                items.map(item => (
                    <div key={item.id} className={item.progress === 100 ? "box completed":"box incompleted"}>
                        <picture>
                            <source media="" srcSet="https://the-royce.pebble.design/wp-content/uploads/2022/04/hero-500x400.jpg.webp" />
                            <img src="https://the-royce.pebble.design/wp-content/uploads/2022/04/hero-500x400.jpg.webp" alt={item.title}/>
                        </picture>
                        <span className="top-row">
                            <p className="title">{item.title}</p>
                            <p>
                                <span>
                                    <i>G</i>
                                    {item.score}
                                </span>
                            </p>
                        </span>
                        <p>{item.description}</p>
                        <button onClick={() => {handleClick(item.id, item.progress)}}>Mark Completed</button>
                    </div>
                ))
                // events.map((event, index) => (
				// 	<div key={event.id} className={event.progress === 100 ? "box completed":"box incompleted"}>
                //     <picture>
                //         <source media="" srcSet="https://the-royce.pebble.design/wp-content/uploads/2022/04/hero-500x400.jpg.webp" />
                //         <img src="https://the-royce.pebble.design/wp-content/uploads/2022/04/hero-500x400.jpg.webp" alt={event.title}/>
                //     </picture>
                //     <span className="top-row">
                //         <p className="title">{event.title}</p>
                //         <p>
                //             <span>
                //                 <i>G</i>
                //                 {event.score}
                //             </span>
                //         </p>
                //     </span>
                //     <p>{event.description}</p>
				// 		<button onClick={() => {handleClick(event.id, event.progress)}}>Mark Completed</button>
				// 	</div>
				// ))
            }
        </div>
    )
}

export default Goallist;
//	{ title: "masturDate", description: "Go on a solo date", id: 4, score: 30, progress: 73, checkpoints: { "Movies": 0, "Dinner": 1, "Park": 1, } }