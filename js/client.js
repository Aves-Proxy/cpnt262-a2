// TODO: put role objects in a separate js file
// objects for storing/referencing game role data, would have put in a separate js file but had trouble importing/exporting
const tank = {
  role: `Tank`,
  jobs: [`Paladin`, `Warrior`, `Dark Knight`, `Gunbreaker`],
  description: `High in HP and trained in defense, a tank serves as the party's shield. Skilled at keeping a foe's attention and bearing the brunt of enemy attacks.`,
  theme: `tank`,
  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(10,20,93,1) 75%, rgba(0,142,255,1) 100%)`,
}

const healer = {
  role: `Healer`,
  jobs: [`White Mage`, `Scholar`, `Astrologian`, `Sage`],
  description: `Healers use restorative arts to mend wounded companions. They can also help to mitigate damage, remove detrimental effects, and even bring fallen allies back to life.`,
  theme: `healer`,
  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(10,93,18,1) 75%, rgba(155,255,0,1) 100%)`,
}

const dpsMel = {
  role: `Melee DPS`,
  jobs: [`Monk`, `Dragoon`, `Ninja`, `Samurai`, `Reaper`],
  description: `Melee DPS are close-range attackers. Focused on combos and careful positioning to inflict the maximum amount of damage.`,
  theme: `dps`,
  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(93,10,10,1) 75%, rgba(255,0,95,1) 100%)`,
}

const dpsPhysR = {
  role: `Physical Ranged DPS`,
  jobs: [`Bard`, `Machinist`, `Dancer`],
  description: `Physical ranged DPS attack foes from a distance. They excel at inflicting sustained damage, and also provide support for companions.`,
  theme: `dps`,
  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(93,10,10,1) 75%, rgba(255,0,95,1) 100%)`,
}

const dpsMagR = {
  role: `Magical Ranged DPS`,
  jobs: [`Black Mage`, `Summoner`, `Red Mage`],
  description: `Magical ranged DPS attack foes using a variety of arcane arts. Movement is restricted by casting times, but they excel at inflicting high burst damage.`,
  theme: `dps`,
  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(93,10,10,1) 75%, rgba(255,0,95,1) 100%)`,
}

// blank slate restoration in case a user tries to submit "choose a role"
const unemployed = {
  role: ``,
  jobs: [],
  description: ``,
}

const form = document.querySelector('form');

// function stores submitted value and puts corresponding object in callback function
const handleSubmit = (event) => {
  event.preventDefault();

  //get the value
  const roleVal = document.getElementById('roleDropdown').value;

  // switch block changes fxn input based on submitted value
  switch (roleVal) {
    case 'tank':
      infoHandler(tank);
    break;
    case 'healer':
      infoHandler(healer);
    break;
    case 'dpsMel':
      infoHandler(dpsMel);
    break;
    case 'dpsPhysR':
      infoHandler(dpsPhysR);
    break;
    case 'dpsMagR':
      infoHandler(dpsMagR);
    break;
    case 'unemployed':
      infoHandler(unemployed);
    break;
  }
}

// callback function for tidying up the mess of many moving parts
const infoHandler = (input) => {
  document.querySelector('.role').innerHTML = input.role;
  document.querySelector('.description').innerHTML = input.description;
  document.querySelector('.jobs').innerHTML = (input.jobs).join(', ');
  document.querySelector('body').classList.remove('tank', 'healer', 'dps')
  document.querySelector('body').classList.add(input.theme);
  document.getElementById('info').style.visibility = 'visible';
  
  // fiddling with anime.js
  anime({
    targets: "body",
    duration: 2000,
    easing: 'linear',
    background: (input.background),
  });
}

form.addEventListener('submit', handleSubmit);