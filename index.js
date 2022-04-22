const buttonMenu = document.querySelector('.menu-button');
const navmenu = document.querySelector('.popup-menu');
const main = document.querySelector('.main-content');
buttonMenu.addEventListener('click', () => {
  navmenu.classList.toggle('active');
  main.classList.toggle('active');
  buttonMenu.classList.toggle('active');
});

// Speakers SECTION
const speakersList = [
  {
    name: 'Deborah Archer',
    image: 'images/speakers/deborah.svg',
    graduate: 'President ACLU',
    experience: 'Deborah is the president of the American Civil Liberties Union (ACLU).',
  },
  {
    name: 'Johanna Faries',
    image: 'images/speakers/johanna.svg',
    graduate: 'Head of Activision Blizzard',
    experience: 'Johanna is head of Activision Blizzards Call of Dutty franchise',
  },
  {
    name: 'Andrew MacAfee',
    image: 'images/speakers/andrew.svg',
    graduate: 'Principal Research Scientist MII',
    experience: 'Andrew is co-founder and co-director of MIT’s Initiative on the Digital Economy',
  },
  {
    name: 'Michelle Zatlyn',
    image: 'images/speakers/Michelle.svg',
    graduate: 'Co-founder Cloudflare',
    experience: 'Michelle is co-founder and COO of Cloudflare,one of the world’s largest networks',
  },
];

const speakers = document.querySelector('.top-speakers');
for (let i = 0; i < speakersList.length; i += 1) {
  const el = document.createElement('div');
  el.classList.add('speaker');
  el.innerHTML = `

  <div>
     <img
         class="speaker-img"
         src="${speakersList[i].image}"
         alt="Deborah Archer"
      />
  </div>
  <div>
     <h2>${speakersList[i].name}</h2>
     <h3>${speakersList[i].graduate}</h3>
        <p>
        ${speakersList[i].experience}
        </p>
   </div>

`;
  speakers.appendChild(el);
}
