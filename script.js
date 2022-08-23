// const moon = document.querySelector(".fa-moon");
const musicDisplay = document.querySelector(".music-display");
const waves = document.querySelectorAll(".wave");
const myAudio = document.getElementById("myAudio");
const musicLst = document.querySelector(".music-list");
const Lst = document.querySelector(".list");
const displayImg = document.querySelector(".display-img");

const songs = [];

// moon.addEventListener("click", () => {
//   if (moon.classList.contains("fa-regular")) {
//     moon.classList.remove("fa-regular");
//     moon.classList.add("fa-solid");
//   } else {
//     moon.classList.remove("fa-solid");
//     moon.classList.add("fa-regular");
//   }
// });

const fillEffectPart = (nodes) => {
  let i = 0;
  setInterval(() => {
    let newNode = document.createElement("span");
    newNode.classList.add("box");
    newNode.style.background = `rgba(216,20,121,${0.9 - i * 0.1})`;
    newNode.style.bottom = `${i * 21}px`;
    nodes[0].appendChild(newNode);
    i++;
    if (i > 5) {
      nodes[0].innerHTML = "";
      i = 0;
    }
  }, 200);
};

const fillEffect = () => {
  const nodes = document.querySelectorAll(".rod");
  fillEffectPart(nodes);

  setTimeout(() => {
    let i = 0;
    setInterval(() => {
      let newNode = document.createElement("span");
      newNode.classList.add("box");
      newNode.style.background = `rgba(255,159,243,${0.9 - i * 0.1})`;
      newNode.style.bottom = `${i * 21}px`;
      nodes[1].appendChild(newNode);
      i++;
      if (i > 7) {
        nodes[1].innerHTML = "";
        i = 0;
      }
    }, 200);
  }, 100);

  setTimeout(() => {
    let i = 0;
    setInterval(() => {
      let newNode = document.createElement("span");
      newNode.classList.add("box");
      newNode.style.background = `rgba(255,107,107,${0.9 - i * 0.1})`;
      newNode.style.bottom = `${i * 21}px`;
      nodes[2].appendChild(newNode);
      i++;
      if (i > 9) {
        nodes[2].innerHTML = "";
        i = 0;
      }
    }, 200);
  }, 100);

  setTimeout(() => {
    let i = 0;
    setInterval(() => {
      let newNode = document.createElement("span");
      newNode.classList.add("box");
      newNode.style.background = `rgba(29,209,161,${0.9 - i * 0.1})`;
      newNode.style.bottom = `${i * 21}px`;
      nodes[3].appendChild(newNode);
      i++;
      if (i > 11) {
        nodes[3].innerHTML = "";
        i = 0;
      }
    }, 200);
  }, 100);

  setTimeout(() => {
    let i = 0;
    setInterval(() => {
      let newNode = document.createElement("span");
      newNode.classList.add("box");
      newNode.style.background = `rgba(95,39,205,${0.9 - i * 0.1})`;
      newNode.style.bottom = `${i * 21}px`;
      nodes[4].appendChild(newNode);
      i++;
      if (i > 14) {
        nodes[4].innerHTML = "";
        i = 0;
      }
    }, 200);
  }, 100);

  setTimeout(() => {
    let i = 0;
    setInterval(() => {
      let newNode = document.createElement("span");
      newNode.classList.add("box");
      newNode.style.background = `rgba(84,160,255,${0.9 - i * 0.1})`;
      newNode.style.bottom = `${i * 21}px`;
      nodes[5].appendChild(newNode);
      i++;
      if (i > 12) {
        nodes[5].innerHTML = "";
        i = 0;
      }
    }, 200);
  }, 100);

  setTimeout(() => {
    let i = 0;
    setInterval(() => {
      let newNode = document.createElement("span");
      newNode.classList.add("box");
      newNode.style.background = `rgba(253,167,223,${0.9 - i * 0.1})`;
      newNode.style.bottom = `${i * 21}px`;
      nodes[6].appendChild(newNode);
      i++;
      if (i > 10) {
        nodes[6].innerHTML = "";
        i = 0;
      }
    }, 200);
  }, 100);

  setTimeout(() => {
    let i = 0;
    setInterval(() => {
      let newNode = document.createElement("span");
      newNode.classList.add("box");
      newNode.style.background = `rgba(247,159,31,${0.9 - i * 0.1})`;
      newNode.style.bottom = `${i * 21}px`;
      nodes[7].appendChild(newNode);
      i++;
      if (i > 8) {
        nodes[7].innerHTML = "";
        i = 0;
      }
    }, 200);
  }, 100);

  setTimeout(() => {
    let i = 0;
    setInterval(() => {
      let newNode = document.createElement("span");
      newNode.classList.add("box");
      newNode.style.background = `rgba(181,52,113,${0.9 - i * 0.1})`;
      newNode.style.bottom = `${i * 21}px`;
      nodes[8].appendChild(newNode);
      i++;
      if (i > 6) {
        nodes[8].innerHTML = "";
        i = 0;
      }
    }, 200);
  }, 100);

  setTimeout(() => {
    let i = 0;
    setInterval(() => {
      let newNode = document.createElement("span");
      newNode.classList.add("box");
      newNode.style.background = `rgba(165,94,234,${0.9 - i * 0.1})`;
      newNode.style.bottom = `${i * 21}px`;
      nodes[9].appendChild(newNode);
      i++;
      if (i > 5) {
        nodes[9].innerHTML = "";
        i = 0;
      }
    }, 200);
  }, 100);
};

const addEffect = () => {
  let j = 5;
  for (let i = 0; i < 10; i++) {
    let node = document.createElement("div");
    node.classList.add("rod");
    node.style.bottom = "0px";
    node.style.left = `${i * 40}px`;
    if (i < 5) {
      node.style.height = `${120 + i * 40}px`;
    } else {
      node.style.height = `${120 + 40 * j--}px`;
    }
    musicDisplay.appendChild(node);
  }
  var interval_id = window.setInterval(() => {}, 99999);
  for (var i = 0; i < interval_id; i++) window.clearInterval(i);
  fillEffect();
};

document.getElementById("folder").addEventListener("change", function (event) {
  let files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i].webkitRelativePath);
    // just an idea how to get the path name from the full path
    var fileName = files[i].webkitRelativePath.substring(
      0,
      files[i].webkitRelativePath.indexOf("/")
    );
    console.log(fileName);
    songs[i] = files[i].webkitRelativePath;
  }
  alert("Music Uploaded Succesfully - now you can Enjoy");
});

// const Folder = document.getElementById("folder");
// const Footer = document.querySelector(".footer");
// Folder.addEventListener("click", () => {
//   Folder.style.display = "none";
//   Folder.style.overflow = "hidden";
//   Folder.style.zIndex = "99";
// });

const playBtn = document.querySelector(".play-btn");
const leftBtn = document.querySelector(".fa-caret-left");
const rigthBtn = document.querySelector(".fa-caret-right");
const listBtn = document.querySelector(".list-btn");
const closeListBtn = document.querySelector(".close-list-btn");

let i = 0;

playBtn.addEventListener("click", () => {
  if (playBtn.classList.contains("fa-play")) {
    if (songs.length > 0) {
      playBtn.classList.remove("fa-play");
      playBtn.classList.add("fa-pause");
      const rod = document.querySelectorAll(".rod");
      for (let i = 0; i < rod.length; i++) {
        rod[i].style.display = "block";
      }
      for (let i = 0; i < waves.length; i++) {
        waves[i].style.display = "block";
      }
      addEffect();
      const ps = document.querySelectorAll(".p");
      myAudio.src = songs[i];
      myAudio.play();
      ps[i].style.color = "blue";
    } else {
      let res = confirm(`no songs found kindly add`);
      if (res) {
        document.getElementById("folder").click();
      }
    }
  } else {
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    const rod = document.querySelectorAll(".rod");
    for (let i = 0; i < rod.length; i++) {
      rod[i].style.display = "none";
    }
    for (let i = 0; i < waves.length; i++) {
      waves[i].style.display = "none";
    }
    myAudio.pause();
  }
});

leftBtn.addEventListener("click", () => {
  if (i === 0) {
    i = songs.length - 1;
  } else {
    i = i - 1;
  }
  myAudio.pause();
  myAudio.src = songs[i];
  myAudio.play();
  const ps = document.querySelectorAll(".p");
  ps[i].style.color = "blue";
});

rigthBtn.addEventListener("click", () => {
  if (i === songs.length) {
    i = 0;
  } else {
    i = i + 1;
  }
  myAudio.pause();
  myAudio.src = songs[i];
  myAudio.play();
  const ps = document.querySelectorAll(".p");
  ps[i].style.color = "blue";
});

listBtn.addEventListener("click", () => {
  if (musicLst.style.display === "block") {
    musicLst.style.display = "none";
  } else {
    musicLst.style.display = "block";
    if (songs.length > 0) {
      Lst.innerHTML = "";
      for (let i = 0; i < songs.length; i++) {
        let data = `<p class="p">${songs[i]}<p>`;
        Lst.insertAdjacentHTML("beforeend", data);
      }
      const ps = document.querySelectorAll(".p");
      for (let i = 0; i < ps.length; i++) {
        ps[i].addEventListener("click", () => {
          playBtn.classList.remove("fa-play");
          playBtn.classList.add("fa-pause");
          myAudio.pause();
          myAudio.src = songs[i];
          myAudio.play();
          addEffect();
          ps[i].style.color = "blue";
          const rod = document.querySelectorAll(".rod");
          for (let i = 0; i < rod.length; i++) {
            rod[i].style.display = "block";
          }
          for (let i = 0; i < waves.length; i++) {
            waves[i].style.display = "block";
          }
        });
      }
    } else {
      Lst.innerHTML = "<h3>No Music Found</h3>";
    }
  }
});

closeListBtn.addEventListener("click", () => {
  musicLst.style.display = "none";
  musicLst.style.overflow = "hidden";
});
