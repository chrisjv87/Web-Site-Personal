document.addEventListener('DOMContentLoaded', () => {
    loadTemplates();
});

async function loadTemplates() {
    try {
        await templateHeader();
        await templateFooter();
    } catch (error) {
        console.log('Hubo un error al cargar templates', error);
    }
}


async function templateHeader () {
    try {
        const headerContainer = document.getElementById('headerIndex');
        const response = await fetch('./src/components/templates/header.html');
        const data = await response.text();
        headerContainer.innerHTML = data;
        console.log("Header cargado exitosamente");    
    } catch (error) {
        console.log('No se cargo el contenido del header', error);
    }
}

async function templateFooter () {
    try {
        const footerContainer = document.getElementById('footerIndex');
        const response = await fetch('./src/components/templates/footer.html');
        const data = await response.text();
        footerContainer.innerHTML = data;
        console.log("Footer cargado exitosamente");    
    } catch (error) {
        console.log('No se cargo el contenido del footer', error);
    }
}
