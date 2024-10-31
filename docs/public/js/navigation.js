
function prevCardProject() {
    currentProject = (currentProject === 0) ? projects.length - 1 : currentProject - 1;
    showProject(currentProject);
}

function nextCardProject() {
    currentProject = (currentProject === projects.length - 1) ? 0 : currentProject + 1;
    showProject(currentProject);
}

function prevCardCertific() {
    console.log("Funciona el boton hacia atras");
    currentCertification = (currentCertification === 0) ? certifications.length - 1 : currentCertification - 1;
    showCertification(currentCertification);
}

function nextCardCertific() {
    console.log("Funciona el boton hacia adelante");
    currentCertification = (currentCertification === certifications.length - 1) ? 0 : currentCertification + 1;
    showCertification(currentCertification);
}

async function addListenersPages() {
    
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

async function addListenersProjects() {
    const buttonProjectPrev = document.getElementById('prevBtnP'); 
    buttonProjectPrev.addEventListener('click', prevCardProject);
    
    const buttonProjectNext = document.getElementById('nextBtnP'); 
    buttonProjectNext.addEventListener('click', nextCardProject);
}

async function addListenersCertifications() {
    const buttonCertificPrev = document.getElementById('prevBtnC'); 
    buttonCertificPrev.addEventListener('click', prevCardCertific);
    
    const buttonCertificNext = document.getElementById('nextBtnC'); 
    buttonCertificNext.addEventListener('click', nextCardCertific);
}


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