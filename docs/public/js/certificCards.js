
const certifications = [
    {
        title: 'Certificado 1',
        image: 'public/assets/img/certifications.jpg',
        issued: 'Institucion que emite del Certificado 1',
        date: 'Fecha de emision',
        link: '#'
    },
    {
        title: 'Certificado 2',
        image: 'public/assets/img/about-me.jpeg',
        issued: 'Institucion que emite del Certificado 1',
        date: 'Fecha de emision',
        link: '#'
    },
    {
        title: 'Certificado 3',
        image: 'public/assets/img/profile.jpeg',
        issued: 'Institucion que emite del Certificado 1',
        date: 'Fecha de emision',
        link: '#'
    },
    {
        title: 'Certificado 4',
        image: 'public/assets/img/projects.jpg',
        issued: 'Institucion que emite del Certificado 1',
        date: 'Fecha de emision',
        link: '#'
    },
    {
        title: 'Certificado 5',
        image: 'public/assets/img/skills.jpg',
        issued: 'Institucion que emite del Certificado 1',
        date: 'Fecha de emision',
        link: '#'
    }
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
