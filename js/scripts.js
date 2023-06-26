const teamMembers = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      foto: "wayne.jpg"
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "angela.jpg"
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "walter.jpg"
    },
    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: "angela2.jpg"
    },
    {
      nome: "Scott Estrada",
      ruolo: "Developer",
      foto: "scott.jpg"
    },
    {
      nome: "Barbara Ramos",
      ruolo: "Graphics Designer",
      foto: "barbara.jpg"
    }
  ];
  
  for (let i = 0; i < teamMembers.length; i++) {
    const membro = teamMembers[i];
    console.log("Nome: " + membro.nome);
    console.log("Ruolo: " + membro.ruolo);
    console.log("Foto: " + membro.foto);
    console.log("-----------------------");
  }
  

  const teamContainer = document.getElementById("team-container");

  for (let i = 0; i < teamMembers.length; i++) {
    const membro = teamMembers[i];
    const membroString = "Nome: " + membro.nome + "<br>" +
                         "Ruolo: " + membro.ruolo + "<br>" +
                         "Foto: " + membro.foto + "<br><br>";
    teamContainer.innerHTML += membroString;
  }