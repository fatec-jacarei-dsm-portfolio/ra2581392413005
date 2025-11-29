const academicData = [
    {
        id: "1",
        image: "./assets/logo_vest.png",
        title: "VESTA",
        description: "Um sistema inteligente de detecção de quedas para idosos. A solução é composta por um dispositivo vestível, conectado via Wi-Fi a um aplicativo mobile de monitoramento.",
        part: "Atuei como desenvolvedor backend, onde fui responsável por criar lógica de intregração entre frontend - backend - dispositivel.",
        link: "https://github.com/Steel-Hard/Vesta",
        techs: [
            "https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Python-00599C?style=flat&logo=python&logoColor=white", 
            "https://img.shields.io/badge/Typescript-0059EE?style=flat&logo=typescript&logoColor=white", 
            "https://img.shields.io/badge/MongoDb-43853A?style=flat&logo=mongodb&logoColor=white", 
            "https://img.shields.io/badge/IoT-ESP32-important?style=flat"
        ]
    },
    {
        id: "2",
        image: "./assets/logo_labw.png",
        title: "LABWIND",
        description: "Aplicação com foco em soluções meteorológicas para o lago de Furnas.",
        part: "Atuei como desenvolvedor full stack, implementando modelo de banco de dados assim como criando interface de usuário.",
        link: "https://github.com/Steel-Hard/LabWind",
        techs: [
            "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white",
            
        ]
    },
    {
        id: "3",
        image: "./assets/logo_vita.png",
        title: "VITAL-U",
        description: "Aplicação para gerenciamento de calorias e bem-estar. atuei gerindo uma equipe e desenvolvendo partes do backend.",
        part: "Atuei como Scrum Master.",
        link: "https://github.com/Steel-Hard/VitalU",
        techs: [
            "https://img.shields.io/badge/Scrum-Master-blue?style=flat",
                        "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Backend-Node-green?style=flat",
            "https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white"
        ]
    },
    {
        id: "4",
        image: "./assets/logo_hast.png",
        title: "HARDSTOP",
        description: "Ambiente de aprendizagem virtual gamificado sobre SCRUM.",
        part: "Atuei como desenvolvedor frontend, criando telas e processos de intregração com a api.",
        link: "https://github.com/frevisto/hardstop",
        techs: [
            "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white",
            "https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white",
            "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"
        ]
    }
];

const personalData = [
    {
        id: "p1",
        image: "./assets/logo_scfl.png",
        title: "SCRUMFLOW",
        description: "Sistema para gerenciamento de projetos scrum.",
        part: "Desenvolvedor Full-Stack.",
        link: "https://github.com/claudsaints/scrumflow_backend",
        techs: [
            "https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white",
            "https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white",
            "https://img.shields.io/badge/ANGULAR-ff0000?style=flat&logo=angular&logoColor=white"
        ]
    },
    {
        id: "p2",
        image: "./assets/logo_merl.png",
        title: "MERLIN'S BOOK",
        description: "Sistema para avaliação de livros.",
        part: "Desenvolvedor Full-Stack.",
        link: "https://github.com/claudsaints/merlins_book",
        techs: [
            "https://img.shields.io/badge/Vue-ff00gg?style=flat&logo=vuedotjs&logoColor=white",
            "https://img.shields.io/badge/Nest-092E20?style=flat&logo=nestjs&logoColor=white"
        ]
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
        
        // Lógica para criar as imagens das tecnologias
        // Se não houver techs, retorna string vazia para não quebrar
        let techsHtml = '';
        if (project.techs && project.techs.length > 0) {
            techsHtml = `<div class="tech-badges">
                ${project.techs.map(techUrl => `<img src="${techUrl}" alt="Tech Badge" />`).join('')}
            </div>`;
        }

        projectCard.innerHTML = `
            <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt="Logo do projeto ${project.title}" />
            </a>
            <div class="project-info">
                <h2>${project.title}</h2>
                <p><span>Sobre:</span> ${project.description}</p>
                <p><span>Participação:</span> ${project.part}</p>
                
                <p><span>Tecnologias:</span></p>
                ${techsHtml}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// ... (Restante dos Event Listeners iguais ao seu código original) ...
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