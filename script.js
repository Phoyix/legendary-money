document.addEventListener('DOMContentLoaded', () => {
    // Goal-related DOM elements
    const goalForm = document.getElementById('goal-form');
    const goalNameInput = document.getElementById('goal-name');
    const amountInput = document.getElementById('amount');
    const deadlineInput = document.getElementById('deadline');
    const goalsList = document.getElementById('goals-list');

    // Note-related DOM elements
    const noteForm = document.getElementById('note-form');
    const noteContentInput = document.getElementById('note-content');
    const notesList = document.getElementById('notes-list');

    // Tab navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Tab switching logic
    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            const activeTab = button.getAttribute('data-tab');
            tabContents.forEach((tab) => {
                tab.classList.toggle('active', tab.id === activeTab);
            });
        });
    });

    // Add a new goal
    function createGoal(name, amount, deadline) {
        const goal = document.createElement('div');
        goal.classList.add('goal');
        goal.innerHTML = `
            <h4>${name}</h4>
            <p>Target: $${amount} | Deadline: ${deadline}</p>
            <button class="delete-btn">Delete</button>
        `;
        goal.querySelector('.delete-btn').addEventListener('click', () => goal.remove());
        goalsList.appendChild(goal);
    }

    goalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = goalNameInput.value.trim();
        const amount = amountInput.value.trim();
        const deadline = deadlineInput.value.trim();

        if (name && amount && deadline) {
            createGoal(name, amount, deadline);
            goalNameInput.value = '';
            amountInput.value = '';
            deadlineInput.value = '';
        }
    });

    // Add a new note
    function createNote(content) {
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerHTML = `
            <p>${content}</p>
            <button class="delete-btn">Delete</button>
        `;
        note.querySelector('.delete-btn').addEventListener('click', () => note.remove());
        notesList.appendChild(note);
    }

    noteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const content = noteContentInput.value.trim();
        if (content) {
            createNote(content);
            noteContentInput.value = '';
        }
    });
});
