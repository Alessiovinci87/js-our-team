const teamMembers = [
    {
      nome: "Mario Rossi",
      ruolo: "Sviluppatore",
      foto: "mario.jpg"
    },

    {
      nome: "Laura Bianchi",
      ruolo: "Progettista",
      foto: "laura.jpg"
    },
    
    {
      nome: "Luigi Verdi",
      ruolo: "Responsabile",
      foto: "luigi.jpg"
    }
  ];

  for (let i = 0; i < teamMembers.length; i++) {
    const membro = teamMembers[i];
    console.log("Nome: " + membro.nome);
    console.log("Ruolo: " + membro.ruolo);
    console.log("Foto: " + membro.foto);
    console.log("-----------------------");
  }