async function loadMain(page = 'principalPage') {
    try {
        let pagePath = '';

        switch(page) {
            case 'principalPage':
                pagePath = './src/components/pages/principal/principal.html';
                break;
            case 'aboutPage':
                pagePath = './src/components/pages/about/about.html';
                break;
            case 'projectsPage':
                pagePath = './src/components/pages/projects/project.html';
                break;
            case 'skillsPage':
                pagePath = './src/components/pages/skills/skill.html';
                break;
            case 'certificationsPage':
                pagePath = './src/components/pages/certifications/certification.html';
                break;
        }

        const mainIndex = document.getElementById('mainIndex');
        const response = await fetch(pagePath);
        const data = await response.text();
        mainIndex.innerHTML = data;
        console.log('Se cargo correctamente el contenido dinamico en el contendor main');
    } catch (error) {
        console.log('No se cargo el contenido de la seccion main', error);
    }
}