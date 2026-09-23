let container = document.getElementById("cardContainer");
let searchInput = document.getElementById("inp");
let count = document.getElementById("num");
const storageKey = "addedEmployees";
let addedEmp = JSON.parse(localStorage.getItem(storageKey) || "[]");

count.textContent=addedEmp.length;
const userDetails = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", role: "Admin", isActive: true },
  { id: 2, name: "Bob Jones", email: "bob@example.com", role: "User", isActive: false },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User", isActive: true },
  { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Editor", isActive: true },
  { id: 5, name: "Evan Wright", email: "evan@example.com", role: "User", isActive: true },
  { id: 6, name: "Fiona Gallagher", email: "fiona@example.com", role: "User", isActive: false },
  { id: 7, name: "George Miller", email: "george@example.com", role: "Admin", isActive: true },
  { id: 8, name: "Hannah Abbott", email: "hannah@example.com", role: "User", isActive: true },
  { id: 9, name: "Ian Davis", email: "ian@example.com", role: "Editor", isActive: false },
  { id: 10, name: "Julia Roberts", email: "julia@example.com", role: "User", isActive: true }
];

function renderCards(cards) {
  const cardsDetails = cards.map((card) => {
    return `
      <div class="card">
        <h2>${card.name}</h2>
        <p>${card.email}</p>
        <b>${card.role}</b>
        <br>
        ${card.isActive?`<i>Active Employee</i>`:`<i>Inactive Employee</i>`}
        <br>
        <button onClick = "addToStatus(${card.id})">Hire</button>
      </div>
    `;
  });

  container.innerHTML = cardsDetails.join("");
}

renderCards(userDetails);

function filteredCards() {
  const search = searchInput.value.trim().toLowerCase();

  const filteredData = userDetails.filter((value) =>
    value.name.toLowerCase().includes(search)
  );

  renderCards(filteredData);
}

searchInput.addEventListener("input", filteredCards);

function addToStatus(id){
  const employee = userDetails.find((user) => user.id === id);

  if (!employee || addedEmp.some((user) => user.id === id)) {
    return;
  }
  // console.log(addedEmp);
  addedEmp.push(employee);
  count.textContent = addedEmp.length;
  localStorage.setItem(storageKey, JSON.stringify(addedEmp));
}
