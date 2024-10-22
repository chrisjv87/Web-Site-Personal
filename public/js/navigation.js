function handleClickPrincipal(event) {
    event.preventDefault();
    templateMain('principalPage');
}
function handleClickAbout(event) {
    event.preventDefault();
    templateMain('aboutPage');
}
function handleClickProject(event) {
    event.preventDefault();
    templateMain('projectsPage');
}
function handleClickSkills(event) {
    event.preventDefault();
    templateMain('skillsPage');
}
function handleClickCertific(event) {
    event.preventDefault();
    templateMain('certificationsPage');
}

async function addListeners() {

    try {
        const principalDirection = document.querySelectorAll('.principalDir');
        principalDirection.forEach(principal => { 
            principal.removeEventListener('click', handleClickPrincipal);
            principal.addEventListener('click', handleClickPrincipal);
        });
    
        const aboutDirection = document.querySelectorAll('.aboutDir');
        aboutDirection.forEach(about => {  
            about.removeEventListener('click', handleClickAbout);
            about.addEventListener('click', handleClickAbout);
        });
        
        const projectsDirection = document.querySelectorAll('.projectDir');
        projectsDirection.forEach(project => {   
            project.removeEventListener('click', handleClickProject);
            project.addEventListener('click', handleClickProject);
        });
        
        const skillsDirection = document.querySelectorAll('.skillsDir');
        skillsDirection.forEach(skill => {   
            skill.removeEventListener('click', handleClickSkills);
            skill.addEventListener('click', handleClickSkills);  
        });
        
        const certificDirection = document.querySelectorAll('.certificDir');
        certificDirection.forEach(certific => {   
            certific.removeEventListener('click', handleClickCertific);
            certific.addEventListener('click', handleClickCertific);
        });
        
    } catch (error) {
        console.log('No se agregaron los eventos', error);
    }
}
