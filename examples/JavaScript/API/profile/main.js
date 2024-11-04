// Import functions from modules
import { fetchUserData } from './modules/api.js';
import { renderUserCard } from './modules/render.js';
import { validateForm } from './modules/validate.js';

// Get elements
const userList = document.getElementById("userList");
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Fetch initial user data
(async function loadUsers() {
  try {
    const users = await fetchUserData();
    users.forEach(user => renderUserCard(user, userList));
  } catch (error) {
    console.error("Error loading users:", error);
  }
})();

// Form submission event
userForm.addEventListener("submit", function (e) {
  e.preventDefault();

  userList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        console.log(e.target.tagName);
    }
});

  // Validate form data
  if (!validateForm(nameInput.value, emailInput.value)) {
    alert("Invalid input. Please check the fields.");
    return;
  }

  // Create new user and render it
  const newUser = {
    name: nameInput.value,
    email: emailInput.value
  };
  renderUserCard(newUser, userList);

  // Clear form
  nameInput.value = '';
  emailInput.value = '';
});
