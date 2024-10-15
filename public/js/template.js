document.addEventListener('DOMContentLoaded', () => {
    templateHeader();
    templateFooter();
});

function templateHeader() {
    fetch('../../templates/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        console.log("Header cargado exitosamente");
    })
    .catch(error => console.log('No se cargo el header'));
};

function templateFooter() {
    fetch('../../templates/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        console.log("Footer cargado exitosamente");
    })
    .catch(error => console.log('No se cargo el footer'));
};
