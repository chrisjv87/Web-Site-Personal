document.addEventListener('DOMContentLoaded', templateMain('about'));

async function templateMain (page) {
    try {
        let pagePath = '';

        switch(page) {
            // atoms
            case 'button':
                pagePath = 'src/atoms/button/buttons.html';
                break;
            case 'icon':
                pagePath = 'src/atoms/icon/icons.html';
                break;
            case 'image':
                pagePath = 'src/atoms/image/images.html';
                break;
            //molecules
            case 'cardFooter':
                pagePath = 'src/molecules/cardFooter/cards.html';
                break;
            case 'cardSection':
                pagePath = 'src/molecules/cardSection/cards.html';
                break;
            case 'menuOptions':
                pagePath = 'src/molecules/menuOptions/menu.html';
                break;
            case 'socialMedia':
                pagePath = 'src/molecules/socialMedia/socialMedia.html';
                break;
            //organisms
            case 'cardSectionO':
                pagePath = 'src/organisms/cardSection/cards.html';
                break;
            case 'footerSection':
                pagePath = 'src/organisms/footerSection/footer.html';
                break;
            case 'headerSection':
                pagePath = 'src/organisms/headerSection/header.html';
                break;
            case 'heroSection':
                pagePath = 'src/organisms/heroSection/hero.html';
                break;
            //templates
            case 'header':
                pagePath = 'src/templates/header/header.html';
                break;
            case 'footer':
                pagePath = 'src/templates/footer/footer.html';
                break;
            //pages
            case 'about':
                pagePath = 'src/pages/about/about.html';
                break;
            case 'certifications':
                pagePath = 'src/pages/certifications/certification.html';
                break;
            case 'principal':
                pagePath = 'src/pages/principal/principal.html';
                break;
            case 'projects':
                pagePath = 'src/pages/projects/project.html';
                break;
            case 'skills':
                pagePath = 'src/pages/skills/skill.html';
                break;
        }

        const mainContainer = document.getElementById('testMain');
        const response = await fetch(pagePath);
        console.log('data', response);
        const data = await response.text();
        mainContainer.innerHTML = data;

    } catch (error) {
        console.log('No se cargo el contenido del main', error);
    }
}