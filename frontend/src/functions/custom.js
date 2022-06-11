
const sum = (a,b) => {
    return a + b;
}

export const getGamerScore = (events) => {
    let total = 0;
    let currentScore = 0;
    events.forEach((goal) => {
        total = sum(total, goal.score);
        if (goal.progress === 100) {
            currentScore = sum(currentScore, goal.score)
        }
    })

    let score = {
        currentScore, 
        total
    }

    return score;
}
