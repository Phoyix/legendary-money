// script.js

document.addEventListener('DOMContentLoaded', () => {
    const goalForm = document.getElementById('goal-form');
    const goalNameInput = document.getElementById('goal-name');
    const amountInput = document.getElementById('amount');
    const deadlineInput = document.getElementById('deadline');
    const goalsList = document.getElementById('goals-list');

    const noteForm = document.getElementById('note-form');
    const noteContent = document.getElementById('note-content');
    const notesList = document.getElementById('notes-list');

    // Function to create a new goal
    function createGoal(name, amount, deadline) {
        const goal = document.createElement('div');
        goal.classList.add('goal');

        goal.innerHTML = `
            <h3>${name}</h3>
            <p>Target: $${amount} | Deadline: ${deadline}</p>
            <button class="delete-goal-btn">Delete Goal</button>
        `;

        const deleteBtn = goal.querySelector('.delete-goal-btn');
        deleteBtn.addEventListener('click', () => {
            goal.remove();
        });

        goalsList.appendChild(goal);
    }

    // Handle goal form submission
    goalForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = goalNameInput.value.trim();
        const amount = amountInput.value.trim();
        const deadline = deadlineInput.value.trim();

        if (name && amount && deadline) {
            createGoal(name, amount, deadline);
            goalNameInput.value = ''; // Clear the input field
            amountInput.value = '';
            deadlineInput.value = '';
        }
    });

    // Function to create a new note
    function createNote(content) {
        const note = document.createElement('div');
        note.classList.add('note');
        
        note.innerHTML = `
            <p>${content}</p>
            <button class="delete-note-btn">Delete</button>
        `;

        const deleteBtn = note.querySelector('.delete-note-btn');
        deleteBtn.addEventListener('click', () => {
            note.remove();
        });

        notesList.appendChild(note);
    }

    // Handle note form submission
    noteForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const content = noteContent.value.trim();
        if (content) {
            createNote(content);
            noteContent.value = ''; // Clear the input field
        }
    });
});
