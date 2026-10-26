/***************** DATA *****************/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// 6. Funzione che stampa i membri del team
renderTeam(teamMembers);

// 5. Funzione che fa tutti i passaggi precedenti
function renderTeam(listaMembri) {

  const teamCardsContainer = document.querySelector(".team-container");

  // 1. Ciclo su tutto l'array
  for (let i = 0; i < teamMembers.length; i++) {

    // 3. Pezzo dinamico della stringa
    const membro = teamMembers[i];

    // 2. Chiamiamo la funzione passando l'oggetto corrente
    teamCardsContainer.innerHTML += getMemberCard(membro);
  }

}

// 4. Funzione 
function getMemberCard(oggetto) {
  return `<div class="team-card">
    <div class="card-image">
      <img src="${oggetto.img}" alt="${oggetto.name}" />
    </div>
    <div class="card-text">
      <h3>${oggetto.name}</h3>
      <p>${oggetto.role}</p>
      <span>${oggetto.email}</span>
    </div>
  </div>`;
}

const form = document.getElementById(`member-form`);
const nameField = document.getElementById(`name`);
const roleField = document.getElementById(`role`);
const imageField = document.getElementById(`image`);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Variabili d'appoggio
  const name = nameField.value;
  const role = roleField.value;
  const image = imageField.value;

  // Se manca uno di questi campi
  if (!name || !role || !image) {
    alert(`Campo obbligatorio!`);
    return;
  }

  const newMember = {
    name, //proprietà "name" con variabile uguale alla variabile "name"
    role,
    image,
  };

})