import React, {useState} from 'react';

export default function Newgoalform({addGoal, goalid}) {
    const [title, setTitle] = useState('');
    const [score, setScore] = useState('');

    const resetForm = () => {
        setTitle('')
        setScore('')
    }

    const handleSubmit = (e, gid) => {
        e.preventDefault();

        const goal = {
            title: title,
            score: score,
            id: Math.floor(Math.random() * 10000)
            // id: parseInt(gid) + 1
        }
        addGoal(goal)
        resetForm();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, goalid)}>
            <label>
                <span>Title</span>
                <input type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Score</span>
                <input type="text" 
                    onChange={(e) => setScore(e.target.value)}
                    value={score}
                />
            </label>
            <button>Add</button>
        </form>
    )
}
