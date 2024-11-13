
const certifications = [
    {
        title: 'Curso Práctico de JavaScript.',
        image: 'public/assets/img/certifications/javascriptPractico.png',
        issued: 'Platzi',
        date: 'Octubre 2023',
        link: 'https://platzi.com/p/chrisjv87/curso/3271-course/diploma/detalle/'
    },
    {
        title: 'Curso Básico de Programación Orientada a Objetos con JavaScript.',
        image: 'public/assets/img/certifications/javascriptPOO.png',
        issued: 'Platzi',
        date: 'Octubre 2023',
        link: 'https://platzi.com/p/chrisjv87/curso/2332-course/diploma/detalle/'
    },
    {
        title: 'Curso de Manipulación de Arrays en JavaScript.',
        image: 'public/assets/img/certifications/manipulacionArrays.png',
        issued: 'Platzi',
        date: 'Enero 2024',
        link: 'https://platzi.com/p/chrisjv87/curso/2461-course/diploma/detalle/'
    },
    {
        title: 'Curso Profesional de Git y Github.',
        image: 'public/assets/img/certifications/gitGithub.png',
        issued: 'Platzi',
        date: 'Septiembre 2023',
        link: 'https://platzi.com/p/chrisjv87/curso/1557-course/diploma/detalle/'
    },
    {
        title: 'Curso Profesional de Scrum',
        image: 'public/assets/img/certifications/scrum.png',
        issued: 'Platzi',
        date: 'Septiembre 2024',
        link: 'https://platzi.com/p/chrisjv87/curso/1750-course/diploma/detalle/'
    },
    {
        title: 'Curso Básico de Tailwind',
        image: 'public/assets/img/certifications/tailwindCSS.png',
        issued: 'Platzi',
        date: 'Septiembre 2024',
        link: 'https://platzi.com/p/chrisjv87/curso/2702-course/diploma/detalle/'
    },
    {
        title: 'Curso de Fundamentos de Sass',
        image: 'public/assets/img/certifications/sass.png',
        issued: 'Platzi',
        date: 'Agosto 2024',
        link: 'https://platzi.com/p/chrisjv87/curso/6867-course/diploma/detalle/'
    },
    {
        title: 'Curso de Arquitecturas CSS',
        image: 'public/assets/img/certifications/arquitecturasCSS.png',
        issued: 'Platzi',
        date: 'Agosto 2024',
        link: 'https://platzi.com/p/chrisjv87/curso/7991-course/diploma/detalle/'
    },
    {
        title: 'Curso Básico de Figma',
        image: 'public/assets/img/certifications/figmaBasico.png',
        issued: 'Platzi',
        date: 'Julio 2024',
        link: 'https://platzi.com/p/chrisjv87/curso/4038-course/diploma/detalle/'
    },
    {
        title: 'Curso de Introducción a la Terminal y Línea de Comandos.',
        image: 'public/assets/img/certifications/terminal.png',
        issued: 'Platzi',
        date: 'Febrero 2023',
        link: 'https://platzi.com/p/chrisjv87/curso/2292-course/diploma/detalle/'
    },
    {
        title: 'Curso Práctico de Frontend Developer',
        image: 'public/assets/img/certifications/frontendDeveloper.png',
        issued: 'Platzi',
        date: 'Octubre 2022',
        link: 'https://platzi.com/p/chrisjv87/curso/2477-course/diploma/detalle/'
    },
    {
        title: 'Curso de Responsive Design: Maquetación Mobile First',
        image: 'public/assets/img/certifications/mobileFirst.png',
        issued: 'Platzi',
        date: 'Octubre 2022',
        link: 'https://platzi.com/p/chrisjv87/curso/2030-course/diploma/detalle/'
    },
];
  
let currentCertification = 0;
  
async function showCertification(index) {
    try {
        const cTitle = document.getElementById('certificTitle');
        const cImage = document.getElementById('certificImage');
        const cIssued = document.getElementById('certificIssued');
        const cDate = document.getElementById('certificDate');
        const cLink = document.getElementById('certificLink');
    
        cTitle.textContent = certifications[index].title;
        cImage.src = certifications[index].image;
        cIssued.textContent = certifications[index].issued;
        cDate.textContent = certifications[index].date;
        cLink.href = certifications[index].link;        
    } catch (error) {
        console.log("No se cargo la card", error);
    }
}
