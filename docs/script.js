const data = [
  {
    id: "1",
    image: "./assets/logo_labw.png",
    title: "LABWIND",
    description: "Aplicação com foco em solucões metereológicas para lago de furnas",
    link: "https://github.com/Steel-Hard/LabWind"
  },
  {
    id: "2",
    image: "./assets/logo_vita.png",
    title: "VITAL-U",
    description: "Aplicação para gerenciamento de calorias",
    link: "https://github.com/Steel-Hard/VitalU"
  },
  {
    id: "3",
    image: "./assets/logo_hast.png",
    title: "HARDSTOP",
    description: "Ambiente de apredizagem virtual sobre SCRUM",
    link: "https://github.com/frevisto/hardstop"
  }
];

const time = new Date();
document.getElementById("time-display").textContent =
  `------ / ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ∷ BRASIL ∷ ©2025`;

const container = document.getElementById("projects");

data.forEach((project) => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
  <a href="${project.link}">
    <img  src="${project.image}" alt="${project.title}" />
  </a>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;
  container.appendChild(div);
});
