
const projects = [
    {
        title: 'Todo Machine',
        image: 'public/assets/img/projects/todoMachine.png',
        description: 'Creacion de una lista de tareas con React.',
        tools: 'HTML, CSS, JavaScript, React.',
        deploy: 'https://chrisjv87.github.io/Todo-Machine/',
        repository: 'https://github.com/chrisjv87/Todo-Machine'
    },
    {
        title: 'Yard Sale',
        image: 'public/assets/img/projects/yardSale.png',
        description: 'Creando una Tienda en Linea.',
        tools: 'HTML, CSS, JavaScript.',
        deploy: 'https://chrisjv87.github.io/Yard-Sale/',
        repository: 'https://github.com/chrisjv87/Yard-Sale'
    },
    {
        title: 'Platzi Travel',
        image: 'public/assets/img/projects/platziTravel.png',
        description: 'Implementando estilos con Tailwind.',
        tools: 'HTML, Tailwind.',
        deploy: 'https://chrisjv87.github.io/Platzi-Travel/',
        repository: 'https://github.com/chrisjv87/Platzi-Travel'
    },
    {
        title: 'Cat Photos',
        image: 'public/assets/img/projects/catPhotos.png',
        description: 'Consumo de API para ver y almacenar diferentes imagenes de gatos.',
        tools: 'HTML, CSS, JavaScript.',
        deploy: 'https://chrisjv87.github.io/Cat-Photos/',
        repository: 'https://github.com/chrisjv87/Cat-Photos'
    },
    {
        title: 'Eco Store',
        image: 'public/assets/img/projects/ecoStore.png',
        description: 'Implementando Sass para los estilos.',
        tools: 'HTML, Sass.',
        deploy: 'https://chrisjv87.github.io/Eco-Store/',
        repository: 'https://github.com/chrisjv87/Eco-Store'
    },
    {
        title: 'Batatabit',
        image: 'public/assets/img/projects/batataBit.png',
        description: 'Responsive Design con Mobile First',
        tools: 'HTML, CSS.',
        deploy: 'https://chrisjv87.github.io/Batatabit/',
        repository: 'https://github.com/chrisjv87/Batatabit'
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
