const main = document.querySelector("main");
const teamName = document.querySelector("main #team-name h2")
const teamContainer = document.querySelector("main #team-container");
const teamLogo = document.querySelector("main #team-container #logo");
const fullName = document.querySelector("main #team-container #full-name");
const trophies = document.querySelector("main #trophies span");
const capName = document.querySelector("main #cap-name span");
const startBtn = document.querySelector("button");

const teams = [
  {
    teamName: "CSK",
    logoSrc:
      "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    fullName: "Chennai Super Kings",
    trophies: 5,
    capName: "Ruturaj Gaikwad",
    primaryColor: "rgb(255, 203, 5)",
    secondaryColor: "#2C313C"
  },
  {
    teamName: "DC",
    logoSrc:
      "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
    fullName: "Delhi Capitals",
    trophies: 0,
    capName: "Axar Patel",
    primaryColor: "#FF2845",
    secondaryColor: "#032ADB"
  },
  {
    teamName: "GT",
    logoSrc:
      "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png",
    fullName: "Gujarat Titans",
    trophies: 1,
    capName: "Shubman Gill",
    primaryColor: "#77C7F2",
    secondaryColor: "#0D1A30"
  },
  {
    teamName: "KKR",
    logoSrc:
      "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    capName: "Ajinkya Rahane",
    primaryColor: "#ECC542",
    secondaryColor: "#29204A"
  },
  {
    teamName: "LSG",
    logoSrc:
      "https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
    fullName: "Lucknow Super Giants",
    trophies: 0,
    capName: "Rishabh Pant",
    primaryColor: "#FFFFFF",
    secondaryColor: "#0248BC"
  },
  {
    teamName: "MI",
    logoSrc:
      "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png",
    fullName: "Mumbai Indians",
    trophies: 5,
    capName: "Rishabh Pant",
    primaryColor: "#2D6AB1",
    secondaryColor: "#133266"
  },
  {
    teamName: "PKXI",
    logoSrc:
      "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
    fullName: "Punjab Kings",
    trophies: 0,
    capName: "Shreyas Iyer",
    primaryColor: "#D71920",
    secondaryColor: "#283665"
  },
  {
    teamName: "RR",
    logoSrc:
      "https://documents.iplt20.com/ipl/RR/Logos/RR_Logo.png",
    fullName: "Rajasthan Royals",
    trophies: 1,
    capName: "Riyan Parag",
    primaryColor: "#F74E8E",
    secondaryColor: "#042652"
  },
  {
    teamName: "RCB",
    logoSrc:
      "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
    fullName: "Royal Challengers Bengaluru",
    trophies: 1,
    capName: "Rajat Patidar",
    primaryColor: "#2B2A29",
    secondaryColor: "#551D20"
  },
    {
    teamName: "RCB",
    logoSrc:
      "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
    fullName: "Sunrisers Hyderabad",
    trophies: 1,
    capName: "Pat Cummins",
    primaryColor: "#F26522",
    secondaryColor: "#712324"
  },

];

startBtn.addEventListener("click", getTeam);

function getTeam() {
  let winner = randomIndex();
  render(winner);
  startBtn.textContent = "Try Again!!";
  console.log(winner);
}

function randomIndex() {
  return (teams[Math.floor(Math.random() * teams.length)]);
}

function render(winner) {
  main.style.backgroundColor = winner.secondaryColor;
  teamName.textContent = winner.teamName + " Won!!";
  teamContainer.style.backgroundColor = winner.primaryColor;
  teamLogo.src = winner.logoSrc;
  fullName.textContent = winner.fullName;
  trophies.textContent = winner.trophies;
  capName.textContent = winner.capName;
}
