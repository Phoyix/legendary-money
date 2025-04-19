
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8q7ry5dZt-pKlkSEoTEFPMujub2JTfkw",
  authDomain: "my-awesome-project-104ff.firebaseapp.com",
  projectId: "my-awesome-project-104ff",
  storageBucket: "my-awesome-project-104ff.firebasestorage.app",
  messagingSenderId: "65569755641",
  appId: "1:65569755641:web:a01bce9d3d9c4f08ebad28"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchTotalBalance() {
  const querySnapshot = await getDocs(collection(db, "wallets"));
  let totalBalance = 0;
  querySnapshot.forEach((doc) => {
    totalBalance += doc.data().amount;
  });
  document.getElementById("total-balance").innerText = `฿${totalBalance.toFixed(2)}`;
}

async function fetchGoalsProgress() {
  const querySnapshot = await getDocs(collection(db, "goals"));
  let totalSaved = 0, totalTarget = 0;
  querySnapshot.forEach((doc) => {
    totalSaved += doc.data().saved;
    totalTarget += doc.data().target;
  });
  const progress = (totalSaved / totalTarget) * 100;
  document.getElementById("goals-progress").innerText = `${progress.toFixed(2)}%`;
  document.querySelector('.progress-bar-inner').style.width = `${progress.toFixed(2)}%`;
}

async function fetchNotesCount() {
  const querySnapshot = await getDocs(collection(db, "notes"));
  const noteCount = querySnapshot.size;
  document.getElementById("note-count").innerText = noteCount;
}

window.onload = function() {
  fetchTotalBalance();
  fetchGoalsProgress();
  fetchNotesCount();
};

function openModal(itemType) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  document.getElementById("modal-title").innerText = `Add ${itemType.charAt(0).toUpperCase() + itemType.slice(1)}`;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.querySelectorAll('#modal input, #modal textarea').forEach(el => el.value = '');
}

function saveItem() {
  const name = document.getElementById('modal-name').value;
  const purpose = document.getElementById('modal-purpose').value;
  const amount = document.getElementById('modal-amount').value;
  const target = document.getElementById('modal-target').value;
  const deadline = document.getElementById('modal-deadline').value;
  const note = document.getElementById('modal-note').value;

  closeModal();
}
