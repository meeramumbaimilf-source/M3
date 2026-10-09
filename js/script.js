
  const pages=[...document.querySelectorAll('.page')],links=[...document.querySelectorAll('nav a')];
  const nav=document.getElementById('nav'),btn=document.getElementById('menu-btn');
  function route(){
    const id=(location.hash||'#home').slice(1);
    const target=document.getElementById(id)||document.getElementById('home');
    pages.forEach(p=>p.classList.toggle('show',p===target));
    links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+target.id));

    // site tab naming below

    document.title=target.querySelector('h1').textContent+' | M3';
    nav.classList.remove('open');btn.setAttribute('aria-expanded','false');
    window.scrollTo(0,0);
  }
  btn.onclick=()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)};

  // ---- TILE DATA: edit this list. place must be the area name you want to filter by. ----

  const phoneNumber = "+91 98765433210"
  const tiles = [
  {
    place: "dharavi",
    title: "Riya",
    text: "Friendly and professional service available in Mumbai.",
    img: "assets/riya.jpeg",
    phone: phoneNumber,
    age: 26,
    height: "5'4",
    weight: 52,
    profileType: "Call Girls"

  },

  {
    place: "dharavi",
    title: "Muskan",
    text: "Available for appointments and enquiries in Mumbai.",
    img: "assets/muskan.jpeg",
    phone: phoneNumber,
    age: 24,
    height: "5'5",
    weight: 51,
      profileType: "Call Girls"

  },

  {
    place: "nasik",
    title: "Shirley",
    text: "Professional services available in Mumbai.",
    img: "assets/shirley.jpeg",
    phone: phoneNumber,
    age: 29,
    height: "5'6",
    weight: 58,
      profileType: "Call Girls"

  },

  {
    place: "nasik",
    title: "Priya",
    text: "Available for appointments in Mumbai.",
    img: "assets/priya.jpeg",
    phone: phoneNumber,
    age: 27,
    height: "5'3",
    weight: 50,
      profileType: "Call Girls"

  },

  {
    place: "nasik",
    title: "Jenny",
    text: "Friendly service and flexible appointments in Mumbai.",
    img: "assets/jenny.jpeg",
    phone: phoneNumber,
    age: 31,
    height: "5'7",
    weight: 62,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Megha",
    text: "Available for enquiries and appointments in Mumbai.",
    img: "assets/megha.jpeg",
    phone: phoneNumber,
    age: 23,
    height: "5'2",
    weight: 48,
    profileType: "Companion"
  },

  {
    place: "Colba",
    title: "Mary",
    text: "Professional and reliable service in Mumbai.",
    img: "assets/mary.jpeg",
    phone: phoneNumber,
    age: 28,
    height: "5'5",
    weight: 55,
    profileType: "Companion"
  },

  {
    place: "Colba",
    title: "Fatima",
    text: "Appointments available throughout the week.",
    img: "assets/fatima.jpeg",
    phone: phoneNumber,
    age: 30,
    height: "5'6",
    weight: 57,
    profileType: "Companion"
  },

  {
    place: "dharavi",
    title: "Baby",
    text: "Available for enquiries and bookings in Mumbai.",
    img: "assets/baby.jpeg",
    phone: phoneNumber,
    age: 25,
    height: "5'4",
    weight: 53,
    profileType: "Escorts"
  },

  {
    place: "Colba",
    title: "Pinky",
    text: "Friendly and professional service in Mumbai.",
    img: "assets/pinky.jpeg",
    phone: phoneNumber,
    age: 32,
    height: "5'8",
    weight: 64,
    profileType: "Escorts"
  },

  {
    place: "Colba",
    title: "Disha",
    text: "Available for appointments in Mumbai.",
    img: "assets/disha.jpeg",
    phone: phoneNumber,
    age: 26,
    height: "5'5",
    weight: 54,
    profileType: "Escorts"
  },

  {
    place: "dharavi",
    title: "Keerti",
    text: "Professional services with flexible availability.",
    img: "assets/keerti.jpeg",
    phone: phoneNumber,
    age: 29,
    height: "5'7",
    weight: 60,
    profileType: "Escorts"
  },

  {
    place: "dharavi",
    title: "Payal",
    text: "Available for appointments in Mumbai.",
    img: "assets/payal.jpeg",
    phone: phoneNumber,
    age: 24,
    height: "5'3",
    weight: 49,
    profileType: "Escorts"
  },

  {
    place: "dharavi",
    title: "Kriti",
    text: "Friendly service available in Mumbai.",
    img: "assets/kriti.jpeg",
    phone: phoneNumber,
    age: 27,
    height: "5'6",
    weight: 56,
    profileType: "Escorts"
  },

  {
    place: "dharavi",
    title: "Puja",
    text: "Appointments and enquiries available in Mumbai.",
    img: "assets/puja.jpeg",
    phone: phoneNumber,
    age: 30,
    height: "5'4",
    weight: 55,
    profileType: "Escorts"
  },

  {
    place: "dharavi",
    title: "Grishma",
    text: "Available for appointments in Mumbai.",
    img: "assets/grishma.jpeg",
    phone: phoneNumber,
    age: 22,
    height: "5'2",
    weight: 47,
    profileType: "Escorts"
  },

  {
    place: "dharavi",
    title: "Bebo",
    text: "Professional service available in Mumbai.",
    img: "assets/bebo.jpeg",
    phone: phoneNumber,
    age: 34,
    height: "5'7",
    weight: 63,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Rishika",
    text: "Flexible appointments available in Mumbai.",
    img: "assets/rishika.jpeg",
    phone: phoneNumber,
    age: 28,
    height: "5'5",
    weight: 53,
    profileType: "Companion"
  },

  {
    place: "dharavi",
    title: "Marlo",
    text: "Available for enquiries in Mumbai.",
    img: "assets/marlo.jpeg",
    phone: phoneNumber,
    age: 26,
    height: "5'6",
    weight: 57,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Rose",
    text: "Friendly and professional service in Mumbai.",
    img: "assets/rose.jpeg",
    phone: phoneNumber,
    age: 31,
    height: "5'4",
    weight: 54,
    profileType: "Call Girls"
  },

  {
    place: "South Bombay",
    title: "Neha",
    text: "Appointments available in Mumbai.",
    img: "assets/neha.jpeg",
    phone: phoneNumber,
    age: 25,
    height: "5'3",
    weight: 51,
    profileType: "Companion"
  },

  {
    place: "South Bombay",
    title: "Biyu",
    text: "Available for bookings and enquiries in Mumbai.",
    img: "assets/piyu.jpeg",
    phone: phoneNumber,
    age: 27,
    height: "5'5",
    weight: 56,
    profileType: "Companion"
  },

  {
    place: "dharavi",
    title: "Uxy",
    text: "Professional service available in Mumbai.",
    img: "assets/luxy.jpeg",
    phone: phoneNumber,
    age: 29,
    height: "5'9",
    weight: 66,
    profileType: "Companion"
  },

  {
    place: "dharavi",
    title: "Shweta",
    text: "Available for appointments in Mumbai.",
    img: "assets/shweta.jpeg",
    phone: phoneNumber,
    age: 33,
    height: "5'6",
    weight: 59,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Ishika",
    text: "Friendly service and flexible appointments.",
    img: "assets/ishika.jpeg",
    phone: phoneNumber,
    age: 23,
    height: "5'4",
    weight: 50,
    profileType: "Companion"
  },

  {
    place: "South Bombay",
    title: "Miya",
    text: "Available for appointments in Mumbai.",
    img: "assets/miya.jpeg",
    phone: "+91 98800 10026",
    age: 26,
    height: "5'5",
    weight: 55,
    profileType: "Escorts"
  },

  {
    place: "South Bombay",
    title: "Kiku",
    text: "Professional service available in Mumbai.",
    img: "assets/kiku.jpeg",
    phone: "+91 98200 10027",
    age: 30,
    height: "5'7",
    weight: 61,
    profileType: "Escorts"
  },

  {
    place: "dharavi",
    title: "Aish",
    text: "Available for bookings in Mumbai.",
    img: "assets/aish.jpeg",
    phone: "+91 98400 10028",
    age: 24,
    height: "5'3",
    weight: 49,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Pia",
    text: "Appointments available in Mumbai.",
    img: "assets/pia.jpeg",
    phone: "+91 98800 10029",
    age: 28,
    height: "5'8",
    weight: 63,
    profileType: "Companion"
  },

  {
    place: "dharavi",
    title: "Leena",
    text: "Friendly and professional service in Mumbai.",
    img: "assets/leena.jpeg",
    phone: "+91 98200 10030",
    age: 32,
    height: "5'5",
    weight: 57,
    profileType: "Escorts"
  },

  {
    place: "dharavi",
    title: "Kushi",
    text: "Available for appointments and enquiries.",
    img: "assets/kushi.jpeg",
    phone: "+91 98400 10031",
    age: 25,
    height: "5'6",
    weight: 54,
    profileType: "Companion"
  },

  {
    place: "Dadar",
    title: "Prema",
    text: "Professional service available in Mumbai.",
    img: "assets/prema.jpeg",
    phone: "+91 98800 10032",
    age: 35,
    height: "5'7",
    weight: 65,
    profileType: "Companion"
  },

  {
    place: "Dadar",
    title: "Bhavana",
    text: "Available for appointments in Mumbai.",
    img: "assets/bhavana.jpeg",
    phone: "+91 98200 10033",
    age: 27,
    height: "5'4",
    weight: 52,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Carla",
    text: "Flexible appointments available in Mumbai.",
    img: "assets/carla.jpeg",
    phone: "+91 98400 10034",
    age: 30,
    height: "5'8",
    weight: 64,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Mira",
    text: "Available for enquiries and appointments.",
    img: "assets/mira.jpeg",
    phone: "+91 98800 10035",
    age: 26,
    height: "5'5",
    weight: 53,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Shital",
    text: "Friendly service available in Mumbai.",
    img: "assets/shital.jpeg",
    phone: "+91 98200 10036",
    age: 29,
    height: "5'6",
    weight: 58,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Pinkuuu",
    text: "Available for appointments in Mumbai.",
    img: "assets/pinkuu.jpeg",
    phone: "+91 98400 10037",
    age: 23,
    height: "5'3",
    weight: 48,
    profileType: "Call Girls"
  },

  {
    place: "dharavi",
    title: "Janu",
    text: "Professional service available in Mumbai.",
    img: "assets/janu.jpeg",
    phone: "+91 98800 10038",
    age: 31,
    height: "5'9",
    weight: 68,
    profileType: "Call Girls"
  }
];


  const box=document.getElementById('tiles'),bar=document.getElementById('filters'),count=document.getElementById('count');
//   const characterFilters = {
//   hairColour: document.getElementById("hairFilter"),
//   eyeColour: document.getElementById("eyeFilter"),
//   skinTone: document.getElementById("skinFilter")
// };
  const places=['All',...new Set(tiles.map(t=>t.place))];
  const tel=p=>p.replace(/[^\d+]/g,'');   // '+91 98200 00001' -> '+919820000001'

// Populate dropdowns from available profile data
// function populateCharacterFilters() {
//   const options = {
//     hairColour: new Set(),
//     eyeColour: new Set(),
//     skinTone: new Set(),
//     hobby: new Set()
//   };

//   tiles.forEach(t => {
//     if (t.hairColour) options.hairColour.add(t.hairColour);
//     if (t.eyeColour) options.eyeColour.add(t.eyeColour);
//     if (t.skinTone) options.skinTone.add(t.skinTone);

//     (t.hobbies || []).forEach(hobby => {
//       options.hobby.add(hobby);
//     });
//   });

//   Object.entries(characterFilters).forEach(([key, select]) => {
//     [...options[key]]
//       .sort()
//       .forEach(value => {
//         const option = document.createElement("option");
//         option.value = value;
//         option.textContent = value;
//         select.appendChild(option);
//       });
//   });
// }

// function matchesAge(age, range) {
//   if (!range) return true;

//   if (age == null) return false;

//   const [min, max] = range.split("-").map(Number);

//   return age >= min && age <= max;
// }
  
function selectLocation(place) {
  selectedPlace = place;
  draw();

  const home = document.getElementById("home");

  if (home) {
    home.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  const nav = document.getElementById("nav");
  if (nav) nav.classList.remove("open");

  const menuBtn = document.getElementById("menu-btn");

  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", "false");
  }
}

let selectedProfile = "All";
let selectedPlace = "All";

function selectProfile(type) {
  selectedProfile = type;

  // Go back to home
  location.hash = "home";

  draw();

  // Close mobile navigation
  const nav = document.getElementById("nav");
  if (nav) nav.classList.remove("open");

  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", "false");
  }
}

function draw(place = selectedPlace) {

  selectedPlace = place;

  const query = document
    .getElementById("search")
    .value
    .trim()
    .toLowerCase();

  const list = tiles.filter(t => {

    const matchesPlace =
      selectedPlace === "All" ||
      t.place === selectedPlace;

    const matchesProfile =
      selectedProfile === "All" ||
      t.profileType === selectedProfile;

    const matchesSearch =
      (
        t.title + " " +
        t.place + " " +
        t.text
      ).toLowerCase().includes(query);

    return (
      matchesPlace &&
      matchesProfile &&
      matchesSearch
    );
  });

  if (list.length === 0) {

    box.innerHTML = `
      <div class="empty-state">
        <strong>No profiles found</strong>
        Try changing your search or filters.
      </div>
    `;

  } else {

    box.innerHTML = list.map(t => `
      <article class="tile">

        <div class="tile-image">

          <img
            src="${t.img}"
            alt="${t.title}"
            loading="lazy">

          <span class="profile-badge">
            Available
          </span>

        </div>

        <div class="tile-content">

          <div class="profile-meta">

            <span class="place">
              ${t.place}
            </span>

            <span class="profile-note">
              ${t.profileType || "Private listing"}
            </span>

          </div>

          <h3>${t.title}</h3>

          <p class="profile-description">
            ${t.text}
          </p>

          <div class="actions">

            <a
              class="view"
              href="tel:${tel(t.phone)}">
              Contact
            </a>

            <a
              class="call"
              href="sms:${tel(t.phone)}">
              Message
            </a>

          </div>

        </div>

      </article>
    `).join("");
  }

  count.textContent =
    list.length +
    " profile" +
    (list.length === 1 ? "" : "s") +
    (selectedPlace === "All" ? "" : " · " + selectedPlace) +
    (selectedProfile === "All" ? "" : " · " + selectedProfile);

  [...bar.children].forEach(button => {

    const active =
      button.dataset.place === selectedPlace;

    button.classList.toggle("on", active);

    button.setAttribute(
      "aria-pressed",
      active
    );

  });
}

  bar.innerHTML=places.map(c=>{const k=c==='All'?tiles.length:tiles.filter(t=>t.place===c).length;return `<button data-place="${c}">${c} (${k})</button>`}).join('');
  bar.onclick=e=>{if(e.target.dataset.place)draw(e.target.dataset.place)};
  document.getElementById("search").addEventListener("input", () => {
  draw();
});

// populateCharacterFilters();

// Convert height from feet.inches notation to total inches.
// Example: 5.4 means 5 feet 4 inches.
// function heightToInches(height) {
//   if (height == null || height === "") return 0;

//   const parts = String(height).split(".");
//   const feet = Number(parts[0]);
//   const inches = Number(parts[1] || 0);

//   return feet * 12 + inches;
// }

// function matchesRange(value, range) {
//   if (!range) return true;

//   switch (range) {
//     case "under45":
//       return value < 45;
//     case "45-50":
//       return value >= 45 && value <= 50;
//     case "51-55":
//       return value >= 51 && value <= 55;
//     case "56-60":
//       return value >= 56 && value <= 60;
//     case "above60":
//       return value > 60;

//     case "under5":
//       return value < 60;
//     case "5-5.3":
//       return value >= 60 && value <= 63;
//     case "5.4-5.6":
//       return value >= 64 && value <= 66;
//     case "5.7-5.9":
//       return value >= 67 && value <= 69;
//     case "above5.9":
//       return value > 69;

//     default:
//       return true;
//   }
// }

// function matchesCharacterFilters(t) {
//   const age = document.getElementById("ageFilter").value;
//   const height = document.getElementById("heightFilter").value;
//   const weight = document.getElementById("weightFilter").value;
//   const hair = document.getElementById("hairFilter").value;
//   const eye = document.getElementById("eyeFilter").value;
//   const skin = document.getElementById("skinFilter").value;


//   // Age
//   if (age) {
//     const [min, max] = age.split("-").map(Number);

//     if (!t.age || t.age < min || t.age > max) {
//       return false;
//     }
//   }

//   // Height
//   if (
//     height &&
//     !matchesRange(heightToInches(t.height), height)
//   ) {
//     return false;
//   }

//   // Weight
//   if (
//     weight &&
//     !matchesRange(Number(t.weight), weight)
//   ) {
//     return false;
//   }

//   // Hair colour
//   if (
//     hair &&
//     (t.hairColour || "").toLowerCase() !== hair.toLowerCase()
//   ) {
//     return false;
//   }

//   // Eye colour
//   if (
//     eye &&
//     (t.eyeColour || "").toLowerCase() !== eye.toLowerCase()
//   ) {
//     return false;
//   }

//   // Skin tone
//   if (
//     skin &&
//     (t.skinTone || "").toLowerCase() !== skin.toLowerCase()
//   ) {
//     return false;
//   }

//   // Personality: match if the profile has the selected value
//   if (
//     personality &&
//     !(t.personality || []).some(
//       p => p.toLowerCase() === personality.toLowerCase()
//     )
//   ) {
//     return false;
//   }

//   // Hobbies
//   if (
//     hobby &&
//     !(t.hobbies || []).some(
//       h => h.toLowerCase() === hobby.toLowerCase()
//     )
//   ) {
//     return false;
//   }

//   // Lifestyle
//   if (
//     lifestyle &&
//     (t.lifestyle || "").toLowerCase() !== lifestyle.toLowerCase()
//   ) {
//     return false;
//   }

//   return true;
// }

// Clear all character filters



// function getActivePlace() {
//   const active = document.querySelector(
//     "#filters button.on"
//   );

//   return active ? active.dataset.place : "All";
// }

// Update results whenever any filter changes
// document
//   .querySelectorAll(".character-filters select")
//   .forEach(select => {

//     select.addEventListener("change", () => {
//       draw(getActivePlace());
//     });

//   });

// Clear character filters
// document
//   .getElementById("clearCharacterFilters")
//   .addEventListener("click", () => {

//     document
//       .querySelectorAll(".character-filters select")
//       .forEach(select => {
//         select.value = "";
//       });

//     draw(getActivePlace());

//   });

// Clear all filters, including place and search
// document
//   .getElementById("clearFilters")
//   .addEventListener("click", () => {

//     document.getElementById("search").value = "";
//     draw("All");

//   });
draw('All');

// Clear all filters 
  
  addEventListener('hashchange',route);route();

  const ageGate = document.getElementById('ageGate');
const enterSite = document.getElementById('enterSite');

if(localStorage.getItem('adultConfirmed') === 'true'){
  ageGate.style.display = 'none';
}

enterSite.addEventListener('click', () => {
  localStorage.setItem('adultConfirmed', 'true');
  ageGate.style.display = 'none';
});

