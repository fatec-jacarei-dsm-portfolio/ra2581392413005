const academicData = [
  {
    id: "1",
    image: "./assets/logo_labw.png",
    title: "LABWIND",
    description: "Aplicação com foco em solucões metereológicas para lago de furnas.",
    part: "Atuei como desenvolvedor.",
    link: "https://github.com/Steel-Hard/LabWind"
  },
  {
    id: "2",
    image: "./assets/logo_vita.png",
    title: "VITAL-U",
    description: "Aplicação para gerenciamento de calorias.",
    part: "Atuei como Scrum Master.",
    link: "https://github.com/Steel-Hard/VitalU"
  },
  {
    id: "3",
    image: "./assets/logo_hast.png",
    title: "HARDSTOP",
    description: "Ambiente de apredizagem virtual sobre SCRUM.",
    part: "Atuei como desenvolvedor.",
    link: "https://github.com/frevisto/hardstop"
  }
];

const time = new Date();
document.getElementById("time-display").textContent =
  `------ / ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ∷ BRASIL ∷ ©2025`;

const container = document.getElementById("projects");

academicData.forEach((project) => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
  <a href="${project.link}">
    <img  src="${project.image}" alt="${project.title}" />
  </a>
    <h2>${project.title}</h2>
    <div>    
        <p> <span>Sobre:        </span> ${project.description}  </p>
        <p> <span>Participação: </span> ${project.part}         </p>
    <div/>
  `;
  container.appendChild(div);
});
