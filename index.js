// home page icons **********************************
const icons = [
  "fa-html5",
  "fa-css3-alt",
  "fa-js",
  "fa-react",
  "fa-bootstrap",
  "fa-wordpress",
  "fa-php",
  "fa-figma",
  "fa-vuejs",
  "fa-git",
  "fa-docker",
];
const container = document.querySelector(".icon-container");
icons.forEach((icon) => {
  const faIcon = document.createElement("i");
  faIcon.className = `fa-brands ${icon}`;
  container.appendChild(faIcon);
});

// home page projects *****************************

const projects = [
  {
    name: "The Invention Group",
    tech: ["NextJS, Tailwind"],
    url: "invention-group.html",
    image: "/images/invention-group/invention-group-home.jpg",
  },
  {
    name: "DataMed",
    tech: ["React, Tailwind"],
    url: "data-med.html",
    image: "/images/data-med.png",
  },
  {
    name: "JuicyRoots Cafe",
    tech: ["PHP, Bootstrap"],
    url: "juicy-roots.html",
    image: "/images/juicy-roots-cafe-desktop.jpg",
  },
  {
    name: "Author Website",
    tech: ["WordPress, PHP, Bootstrap"],
    url: "author-website.html",
    image: "/images/author-website/author-home.jpg",
  },
  {
    name: "HERA",
    tech: ["WordPress, PHP, Bootstrap"],
    url: "hera.html",
    image: "/images/hera/hera-home.jpg",
  },
];

const projectsContainer = document.querySelector(".projects-container");
projects.forEach((project) => {
  const projectTech = project.tech
    .map((item) => {
      return `<li class="text-4xl text-white">${item}</li>`;
    })
    .join("");
  const newProject = `
  <div class="relative group">
        <a href=${project.url}>
          <img
            src=${project.image}
            alt=""
            class="block transition-opacity duration-200 group-hover:opacity-50 w-[500px] h-[300px]"
          />
          <div
            class="absolute inset-0 opacity-0 bg-black bg-opacity-70 transition-opacity duration-200 group-hover:opacity-100"
          >
            <h2 class="text-4xl text-white text-center py-8">
              ${project.name}
            </h2>
            <ul class="list-none flex justify-center gap-10 py-8">
            ${projectTech}
            </ul>
          </div>
        </a>
      </div>`;
  projectsContainer.insertAdjacentHTML("beforeend", newProject);
});
