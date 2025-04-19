// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8q7ry5dZt-pKlkSEoTEFPMujub2JTfkw",
  authDomain: "my-awesome-project-104ff.firebaseapp.com",
  projectId: "my-awesome-project-104ff",
  storageBucket: "my-awesome-project-104ff.firebasestorage.app",
  messagingSenderId: "65569755641",
  appId: "1:65569755641:web:a01bce9d3d9c4f08ebad28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Fetch Total Balance from Wallets collection
async function fetchTotalBalance() {
  const querySnapshot = await getDocs(collection(db, "wallets"));
  let totalBalance = 0;
  querySnapshot.forEach((doc) => {
    totalBalance += doc.data().amount;
  });
  document.getElementById("total-balance").innerText = `฿${totalBalance.toFixed(2)}`;
}

// Fetch Goals Progress
async function fetchGoalsProgress() {
  const querySnapshot = await getDocs(collection(db, "goals"));
  let totalSaved = 0, totalTarget = 0;
  querySnapshot.forEach((doc) => {
    totalSaved += doc.data().saved;
    totalTarget += doc.data().target;
  });
  const progress = (totalSaved / totalTarget) * 100;
  document.querySelector('.progress-bar-inner').style.width = `${progress.toFixed(2)}%`;
  document.querySelector('.progress-bar-inner').parentElement.querySelector('small').innerText = `฿${totalSaved.toFixed(2)} / ฿${totalTarget.toFixed(2)}`;
}

// Fetch Notes Count
async function fetchNotesCount() {
  const querySnapshot = await getDocs(collection(db, "notes"));
  const noteCount = querySnapshot.size;
  document.getElementById("note-count").innerText = noteCount;
}

// On page load, fetch and display data
window.onload = function() {
  fetchTotalBalance();
  fetchGoalsProgress();
  fetchNotesCount();
};
