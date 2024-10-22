document.addEventListener('DOMContentLoaded', () => {
    loadPage();
});

async function loadPage() {
    try {
        await templateHeader();
        await loadMain();
        await templateFooter();
        addMainListeners();

    } catch (error) {
        console.log('Hubo un error al cargar la pagina', error);
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
