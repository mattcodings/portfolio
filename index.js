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
  "fa-git",
  "fa-docker",
];
const container = document.querySelector(".icon-container");
icons.forEach((icon) => {
  const faIcon = document.createElement("i");
  faIcon.className = `fa-brands ${icon} basis-1/4 flex justify-center p-2`;
  container.appendChild(faIcon);
});

// home page projects *****************************

const projects = [
  {
    name: "The Invention Group",
    tech: [
      "<span class='text-green-500'>NextJS</span> / <span class='text-yellow-500'>Tailwind</span>",
    ],
    url: "invention-group.html",
    image: "images/invention-group/invention-group-home.jpg",
    description:
      "The Invention Group website utilizes the NextJS framework, Tailwind, DaisyUI, Recharts, and PostGRES with Prisma (deployed on Render). There are several features in this website. Users can submit an invention once logged in. An admin then approves or denies the invention. The user then can make a payment through the Stripe API. Once the user has paid, a chart will display. The admin can then enter sales that the user has received for their invention, and the chart in the user's account will change accordingly",
  },
  {
    name: "DataMed",
    tech: [
      "<span class='text-blue-500'>React</span> / <span class='text-yellow-500'>Tailwind</span>",
    ],
    url: "data-med.html",
    image: "images/data-med.png",
    description:
      "The DataMed website uses the React library, and React features such as hooks (useEffect, useState, useContext) and React Router, Tailwind, DaisyUI, and Auth0. A user can log in, view products and filter the list of products, add items to a cart, and go through a checkout page with tabs that take into account all of the inputs filled.",
  },
  {
    name: "JuicyRoots Cafe",
    tech: [
      "<span class='text-red-500'>PHP</span> / <span class='text-purple-500'>Bootstrap</span>",
    ],
    url: "juicy-roots.html",
    image: "images/juicy-roots-cafe-desktop.jpg",
    description:
      "This website uses PHP, Bootstrap, and SQL through PHPMyAdmin. If the user is an admin, they can add inventory (name, type, quantity), build menu items from the list of inventory, and delete and edit items as well. A user can log in to the website, add items to their cart from the menu, and create their own juice. By doing this, the inventory is reduced.",
  },
  {
    name: "Author Website",
    tech: [
      "<span class='text-orange-500'>WordPress</span> / <span class='text-red-500'>PHP</span> / <span class='text-purple-500'>Bootstrap</span",
    ],
    url: "author-website.html",
    image: "images/author-website/author-home.jpg",
    description:
      "This project is from WordPress Development, and utilizes PHP and WordPress. Some features in this website include a 'newest release' book, random reviews created as custom post types in WordPress, the most and the most recent books by the author. In the Books tab there is a filter for the books as well as pagination. If a book is selected, the page will also display other books within the series of that book.",
  },
  {
    name: "HERA",
    tech: [
      "<span class='text-orange-500'>WordPress</span> / <span class='text-red-500'>PHP</span> / <span class='text-purple-500'>Bootstrap</span>",
    ],
    url: "hera.html",
    image: "images/hera/hera-home.jpg",
    description:
      "This website was created in a team of five with WordPress. Users can log in and complete a course on AI with the MasterStudy plugin. The Courses page provides a filter of all the courses promoted through HERA from different colleges in Southeastern Wisconsin.",
  },
];

const projectsContainer = document.querySelector(".projects-container");

projects.forEach((project) => {
  const projectTech = project.tech
    .map((item) => {
      return `<li class="text-2xl">${item}</li>`;
    })
    .join("");
  const newProject = `<a href=${project.url} class='flex'>
  <div class="w-[500px] border-2 bg-[#fff] text-black py-8 border-[#aaa] rounded-xl flex flex-col justify-between gap-12 hover:shadow-2xl hover:bg-[rgba(0,120,200,0.25)]">
  <div class="w-[400px] mx-auto">
        
          <img
            src=${project.image}
            alt=""
            class="transition-opacity duration-200 w-[500px] h-[300px]"
          />
          
            <h2 class="text-4xl text-[darkblue] py-8 text-center">
              ${project.name}
            </h2>
            <ul class="list-none flex justify-center py-8 font-bold">
            ${projectTech}
            </ul>
          
        
        <p>${project.description}</p>
      </div>
      
  <button class='w-[200px] mx-auto bg-orange-500 p-4 text-white rounded-xl font-bold'>More on this Website</button>

      </div></a>`;
  projectsContainer.insertAdjacentHTML("beforeend", newProject);
});
