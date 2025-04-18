/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    height: 100vh;
    overflow: hidden;
}

.app-container {
    display: flex;
    width: 100%;
    height: 100%;
}

.sidebar {
    background-color: #000;
    color: #fff;
    width: 250px;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
}

.sidebar h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    font-weight: bold;
    text-align: center;
}

.sidebar nav button {
    background-color: #333;
    border: none;
    color: white;
    font-size: 1.1rem;
    padding: 15px;
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
}

.sidebar nav button:hover,
.sidebar nav button.active {
    background-color: #555;
}

.main-content {
    flex-grow: 1;
    padding: 40px;
    overflow-y: auto;
    background-color: #fff;
    color: #000;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

header {
    background-color: #000;
    padding: 20px;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    margin-bottom: 30px;
}

header h1 {
    font-size: 2.5rem;
}

h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: 600;
    color: #333;
}

input[type="text"],
input[type="number"],
input[type="date"],
textarea {
    width: 100%;
    padding: 15px;
    margin: 10px 0;
    border-radius: 10px;
    border: 1px solid #ddd;
    background-color: #f4f6fa;
    font-size: 1.1rem;
    color: #444;
}

button.btn {
    width: 100%;
    padding: 15px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
}

button.btn:hover {
    background-color: #555;
}

textarea {
    height: 150px;
    resize: none;
}

/* List Styling */
#goals-list,
#notes-list {
    margin-top: 20px;
}

.goal,
.note {
    background-color: #f4f6fa;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button.delete-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #f44336;
    color: white;
    padding: 10px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button.delete-btn:hover {
    background-color: #e53935;
}

/* Tab switching */
.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Responsive Design */
@media (max-width: 768px) {
    .app-container {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        padding: 20px;
    }

    .main-content {
        padding: 20px;
    }
}
