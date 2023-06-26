const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Sviluppatore",
        foto: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Progettista",
        foto: "img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Responsabile",
        foto: "img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Sviluppatore",
        foto: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Progettista",
        foto: "img/scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Responsabile",
        foto: "img/barbara-ramos-graphic-designer.jpg"
    }
];

const teamContainer = document.getElementById("team-container");

for (let i = 0; i < teamMembers.length; i++) {
    const membro = teamMembers[i];
    const card = document.createElement("div");
    card.classList.add("card");

    const foto = document.createElement("img");
    foto.src = membro.foto;

    const nome = document.createElement("h2");
    nome.textContent = membro.nome;

    const ruolo = document.createElement("p");
    ruolo.textContent = membro.ruolo;

    card.appendChild(foto);
    card.appendChild(nome);
    card.appendChild(ruolo);

    teamContainer.appendChild(card);
}
const addMemberForm = document.getElementById("add-member-form");

addMemberForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const roleInput = document.getElementById("role");
    const imageInput = document.getElementById("image");

    const newMember = {
        nome: nameInput.value,
        ruolo: roleInput.value,
        foto: imageInput.value
    };

    teamMembers.push(newMember);
    console.log("Nuovo membro del team aggiunto:", newMember);

    const card = createCard(newMember);
    teamContainer.appendChild(card);


    addMemberForm.reset();
});

function createCard(membro) {
    const card = document.createElement("div");
    card.classList.add("card");

    const foto = document.createElement("img");
    foto.src = membro.foto;

    const nome = document.createElement("h2");
    nome.textContent = membro.nome;

    const ruolo = document.createElement("p");
    ruolo.textContent = membro.ruolo;

    card.appendChild(foto);
    card.appendChild(nome);
    card.appendChild(ruolo);

    return card;
}
