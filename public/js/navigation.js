
function addMainListeners() {
    const principalDirection = document.querySelectorAll('.principalDir');
    principalDirection.forEach(principal => {
        principal.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Presionaste el boton principal');
        })    
    });

    const aboutDirection = document.querySelectorAll('.aboutDir');
    aboutDirection.forEach(about => {
        about.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Presionaste el boton about');
        })    
    });
    
    const projectsDirection = document.querySelectorAll('.projectDir');
    projectsDirection.forEach(project => {
        project.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Presionaste el boton project');
        })    
    });
    
    const skillsDirection = document.querySelectorAll('.skillsDir');
    skillsDirection.forEach(skill => {
        skill.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Presionaste el boton skill');
        })    
    });
    
    const certificDirection = document.querySelectorAll('.certificDir');
    certificDirection.forEach(certific => {
        certific.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Presionaste el boton certification');
        })    
    });
}
