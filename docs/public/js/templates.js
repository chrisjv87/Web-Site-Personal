document.addEventListener('DOMContentLoaded', loadPage());

async function loadPage() {
    try {
        await templateHeader();
        await templateFooter();
        await templateMain();

    } catch (error) {
        console.log('Hubo un error al cargar la pagina', error);
    }
}

async function templateHeader () {
    try {
        const headerContainer = document.getElementById('headerIndex');
        const response = await fetch('src/templates/header/header.html');
        const data = await response.text();
        headerContainer.innerHTML = data;

        console.log("Header cargado exitosamente");
        adjustMenuDisplay();
        
    } catch (error) {
        console.log('No se cargo el contenido del header', error);
    }
}

async function templateFooter () {
    try {
        const footerContainer = document.getElementById('footerIndex');
        const response = await fetch('src/templates/footer/footer.html');
        const data = await response.text();
        footerContainer.innerHTML = data;

        console.log("Footer cargado exitosamente");    
    } catch (error) {
        console.log('No se cargo el contenido del footer', error);
    }
}

async function templateMain (page = 'principalPage') {
    try {
        let pagePath = '';

        switch(page) {
            case 'principalPage':
                pagePath = 'src/templates/principal/principal.html';
                break;
            case 'aboutPage':
                pagePath = 'src/pages/about/about.html';
                break;
            case 'projectsPage':
                pagePath = 'src/pages/projects/project.html';
                break;
            case 'skillsPage':
                pagePath = 'src/pages/skills/skill.html';
                break;
            case 'certificationsPage':
                pagePath = 'src/pages/certifications/certification.html';
                break;
        }

        const mainContainer = document.getElementById('mainIndex');
        const response = await fetch(pagePath);
        const data = await response.text();
        mainContainer.innerHTML = data;
        console.log('Main cargado exitosamente');

        if (page === 'projectsPage') {
            await showProject(currentProject);
            await addListenersProjects();
        }
        else if (page === 'certificationsPage') {
            await showCertification(currentCertification);
            await addListenersCertifications();
        } else {
            await addListenersPages();
        }

    } catch (error) {
        console.log('No se cargo el contenido del main', error);
    }
}
