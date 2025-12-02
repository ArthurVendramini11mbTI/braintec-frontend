document.getElementById("btn-ir").addEventListener("click", () => {
  document.getElementById("inicio").scrollIntoView({
    behavior: "smooth"
  });
});

const btnMenu = document.getElementById("barras");
const btnFechar = document.getElementById("btn-fechar");
const sidebar = document.getElementById("sidebar");

btnMenu.addEventListener("click", () => {
  sidebar.classList.add("ativo");
});

btnFechar.addEventListener("click", () => {
  sidebar.classList.remove("ativo");
});

let sidebarWidth = 260;
let position = -sidebarWidth;
let speed = 15;
let animating = false;

function abrirSidebar() {
  if (animating) return;
  animating = true;

  function animar() {
    position += speed;

    if (position >= 0) {
      position = 0;
      animating = false;
    } else {
      requestAnimationFrame(animar);
    }

    sidebar.style.right = position + "px";
  }

  animar();
}

function fecharSidebar() {
  if (animating) return;
  animating = true;

  function animar() {
    position -= speed;

    if (position <= -sidebarWidth) {
      position = -sidebarWidth;
      animating = false;
    } else {
      requestAnimationFrame(animar);
    }

    sidebar.style.right = position + "px";
  }

  animar();
}

btnMenu.addEventListener("click", abrirSidebar);
btnFechar.addEventListener("click", fecharSidebar);

function init() {
  const sidebar = document.querySelector("#sidebar")
  const nav = document.querySelector("#nav")

  const user = JSON.parse(sessionStorage.getItem("user"))

  if (user) {
    sidebar.innerHTML += `

            <h2>Usuário:  ${user.name}</h2>
            <button id="logout">Sair</button>
        `

    nav.innerHTML += `

            <a href="desafios/../desafios/desfios.html">Jogar</a>
             <a href="./ranking/ranking.html">Ranking</a>
        `



    const logoutButton = document.querySelector("#logout")
    logoutButton.addEventListener("click", logout)

    return
  }

  sidebar.innerHTML += `
        
            <a href="./login/login.html">Login</a>
  
    `
}

function logout() {
  sessionStorage.removeItem("user")
  window.location.reload()
}

init()