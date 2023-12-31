const members = [
  { name: "Peter Quil", id: "peter" },
  { name: "Gamora", id: "gamora" },
  { name: "Drax o Destruidor", id: "drax" },
  { name: "Mantis", id: "mantis" },
  { name: "Rocket Raccoon", id: "rocket" },
  { name: "I am Groot", id: "groot" },
];

let activeMember = 0;
const images = document.getElementById("images");
const menu = document.getElementById('menu')
const memberName = document.getElementById('member_name')

function changeStatusButtons() {
  const prev = document.getElementById("button_prev");
  const isFirst = activeMember === 0;
  prev.disabled = isFirst;

  const next = document.getElementById("button_next");
  const isLast = activeMember == members.length - 1;
  next.disabled = isLast;
}

function navigationMember(direction) {
  activeMember = activeMember + direction;

  const member = members[activeMember];

  images.style.transform = `translateY(-${100 * activeMember}vh)`;
  memberName.classList = member.id

  changeStatusButtons();
}

function changeMenu(){
menu.classList.toggle('active')
}