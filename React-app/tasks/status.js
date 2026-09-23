const storageKeyStatus = "addedEmployees";
let loadEmp = JSON.parse(localStorage.getItem(storageKeyStatus) || []);
const Container = document.getElementById("cardContainer");
function loadDetails(cards){
    const cardsDetails = cards.map((card) => {
    return `
      <div class="card">
        <h2>${card.name}</h2>
        <p>${card.email}</p>
        <b>${card.role}</b>
        <br>
        ${card.isActive?`<i>Active Employee</i>`:`<i>Inactive Employee</i>`}
        <br>
        <button onClick = "RemoveFromStatus(${card.id})">Terminate</button>
      </div>
    `;
  });
  console.log(cards);

  Container.innerHTML = cardsDetails.join("");
}

loadDetails(loadEmp);

function RemoveFromStatus(id){
    const userId = loadEmp.filter(value=>value.id !== id);
    loadEmp = userId;
    localStorage.setItem(storageKeyStatus, JSON.stringify(loadEmp));
    loadDetails(loadEmp);
}