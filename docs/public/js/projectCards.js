
const projects = [
    {
        title: 'Proyecto 1',
        image: 'public/assets/img/about-me.jpeg',
        description: 'Descripción del Proyecto 1',
        tools: 'Tecnologías utilizadas: Lista las herramientas y lenguajes de programación que utilizaste.',
        linkDeploy: '#',
        linkRepository: '#'
    },
    {
        title: 'Proyecto 2',
        image: 'public/assets/img/projects.jpg',
        description: 'Descripción del Proyecto 2',
        tools: 'Tecnologías utilizadas: Lista las herramientas y lenguajes de programación que utilizaste.',
        linkDeploy: '#',
        linkRepository: '#'
    },
    {
        title: 'Proyecto 3',
        image: 'public/assets/img/skills.jpg',
        description: 'Descripción del Proyecto 3',
        tools: 'Tecnologías utilizadas: Lista las herramientas y lenguajes de programación que utilizaste.',
        linkDeploy: '#',
        linkRepository: '#'
    },
    {
        title: 'Proyecto 4',
        image: 'public/assets/img/certifications.jpg',
        description: 'Descripción del Proyecto 4',
        tools: 'Tecnologías utilizadas: Lista las herramientas y lenguajes de programación que utilizaste.',
        deploy: '#',
        repository: '#'
    }
];
  
let currentProject = 0;
  
async function showProject(index) {
    try {
        const pTitle = document.getElementById('projectTitle');
        const pImage = document.getElementById('projectImage');
        const pDescription = document.getElementById('projectDescription');
        const pTools = document.getElementById('projectTools');
        const pDeploy = document.getElementById('projectDeploy');
        const pRepository = document.getElementById('projectRepository'); 
    
        pTitle.textContent = projects[index].title;
        pImage.src = projects[index].image;
        pDescription.textContent = projects[index].description;
        pTools.textContent = projects[index].tools;
        pDeploy.href = projects[index].deploy;
        pRepository.href = projects[index].repository;
        
        console.log("Se cargo la card de projects correctamente");
    } catch (error) {
        console.log("No se cargo la card", error);
    }
}
