let storyElement = document.getElementById("story");
let choicesElement = document.getElementById("choices");
let restartButton = document.getElementById("restart");

const story = [
    {
        text: "You wake up in a dark forest. What do you want to do?",
        choices: [
            { text: "Explore the forest", nextStoryIndex: 1 },
            { text: "Sit down and wait", nextStoryIndex: 2 }
        ]
    },
    {
        text: "You find a treasure chest! Do you want to open it?",
        choices: [
            { text: "Yes", nextStoryIndex: 3 },
            { text: "No", nextStoryIndex: 4 }
        ]
    },
    {
        text: "You wait for hours but nothing happens. You decide to leave.",
        choices: [
            { text: "Go back home", nextStoryIndex: 5 }
        ]
    },
    {
        text: "Inside the chest, you find gold coins! You are rich!",
        choices: [
            { text: "Celebrate your wealth", nextStoryIndex: 5 }
        ]
    },
    {
        text: "You walk away from the chest, leaving your fortune behind.",
        choices: [
            { text: "Go back home", nextStoryIndex: 5 }
        ]
    },
    {
        text: "You have returned home safely. The adventure ends here.",
        choices: []
    }
];

function startGame() {
    restartButton.style.display = "none";
    showStory(0);
}

function showStory(index) {
    storyElement.innerText = story[index].text;
    choicesElement.innerHTML = "";

    story[index].choices.forEach(choice => {
        let button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => showStory(choice.nextStoryIndex);
        choicesElement.appendChild(button);
    });

    if (index === story.length - 1) {
        restartButton.style.display = "block";
    }
}

restartButton.onclick = startGame;

startGame();
