
const academicData = [
    {
        id: "1",
        image: "./assets/logo_labw.png",
        title: "LABWIND",
        description: "Aplicação com foco em soluções meteorológicas para o lago de Furnas.",
        part: "Atuei como desenvolvedor.",
        link: "https://github.com/Steel-Hard/LabWind"
    },
    {
        id: "2",
        image: "./assets/logo_vita.png",
        title: "VITAL-U",
        description: "Aplicação para gerenciamento de calorias e bem-estar.",
        part: "Atuei como Scrum Master.",
        link: "https://github.com/Steel-Hard/VitalU"
    },
    {
        id: "3",
        image: "./assets/logo_hast.png",
        title: "HARDSTOP",
        description: "Ambiente de aprendizagem virtual gamificado sobre SCRUM.",
        part: "Atuei como desenvolvedor.",
        link: "https://github.com/frevisto/hardstop"
    }
];

const personalData = [
    {
        id: "p1",
        image: "./assets/logo_scfl.png",
        title: "SCRUMFLOW",
        description: "Sistema para gerenciamento de projetos scrum.",
        part: "Desenvolvedor Full-Stack.",
        link: "https://github.com/claudsaints/scrumflow_backend"
    },
    {
        id: "p2",
        image: "./assets/logo_merl.png",
        title: "MERLIN'S BOOK",
        description: "Sistema para avaliação de livros.",
        part: "Desenvolvedor Full-Stack.",
        link: "https://github.com/claudsaints/merlins_book"
    }
];


const projectsGrid = document.getElementById("projects-grid");
const btnAcademic = document.getElementById("btn-academic");
const btnPersonal = document.getElementById("btn-personal");


function displayProjects(projectList) {
    projectsGrid.innerHTML = ""; 

    projectList.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project";
        projectCard.innerHTML = `
            <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt="Logo do projeto ${project.title}" />
            </a>
            <div class="project-info">
                <h2>${project.title}</h2>
                <p><span>Sobre:</span> ${project.description}</p>
                <p><span>Participação:</span> ${project.part}</p>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}


btnAcademic.addEventListener("click", () => {
    displayProjects(academicData);
    btnAcademic.classList.add("active");
    btnPersonal.classList.remove("active");
});

btnPersonal.addEventListener("click", () => {
    displayProjects(personalData);
    btnPersonal.classList.add("active");
    btnAcademic.classList.remove("active");
});

window.addEventListener("load", () => {
    displayProjects(academicData);
});