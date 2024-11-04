export function renderUserCard(user, container) {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <button>X</button>
    `;
    container.appendChild(card);
  }

