const data = [
  {
    id: "1",
    image: "./assets/logo_labw.png",
    title: "LABWIND",
    description: "Aplicação com foco em solucões metereológicas para lago de furnas"
  },
  {
    id: "2",
    image: "./assets/logo_vita.png",
    title: "VITAL-U",
    description: "Aplicação para gerenciamento de calorias"
  },
  {
    id: "3",
    image: "./assets/logo_hast.png",
    title: "HARDSTOP",
    description: "Ambiente de apredizagem virtual sobre SCRUM"
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
    <img src="${project.image}" alt="${project.title}" />
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;
  container.appendChild(div);
});
