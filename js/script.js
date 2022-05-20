const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  document.body.classList.toggle('no-scroll');
  menu.classList.toggle('show');
}

menuToggler.addEventListener('click', (event) => {
  toggleMenu(event);
});

closeMenuBtn.addEventListener('click', (event) => {
  toggleMenu(event);
});

menuLinks.forEach((link) => link.addEventListener(
  'click',
  (event) => toggleMenu(event, false),
));

// Dynamic section
const artists = [
  {
    name: 'Davido',
    title: 'Multi Award Winning artist',
    image: 'speaker1.jpg',
    bio: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
  },
  {
    name: 'Burna Boy',
    title: 'Grammy winning artist',
    image: 'burna.jpg',
    bio: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
  },
  {
    name: 'Van Vicker',
    title: 'Movie Actor',
    image: 'speaker3.jpg',
    bio: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
  },
  {
    name: 'Tiwa Savage',
    title: 'Actor/Artist',
    image: 'speaker4.jpg',
    bio: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
  },
  {
    name: 'Diamond Platinumz',
    title: 'Tanzanian Artist',
    image: 'speaker8.jpg',
    bio: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
  },
  {
    name: 'Beyonce',
    title: 'Musician',
    image: 'speaker9.png',
    bio: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
  },
];

const speakersPlaceHolder = document.querySelector('#speakers .persons');

artists.forEach((artist, index) => {
    speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
    <div class="person-graphic">
      <img src="images/${artist.image}" alt="" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${artist.name}</h4>
      <p class="person-title"><em>${artist.title}</em></p>
      <p class="person-bio">${artist.bio}</p>
    </div>
  </div>
  `;
});

// Show more speackers
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    document.querySelectorAll('.mobile-hide').forEach((el) => {
      el.classList.toggle('mobile-hide');
    });
    moreSpeakerButton.style.display = 'none';
  },
);

