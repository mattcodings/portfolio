import { data } from "./utils/data.js";
const projectContainer = document.querySelector(".project-area");
const projects = document.createElement("div");
projects.classList.add("project-container");
const projectItems = data.map((item) => {
  return `<a data-bs-toggle="modal" data-bs-target="#${item.id}"
          ><img
            src="${item.image}"
            alt=""
            class="project-image"
        /><h4 class="text-center">${item.projectName}</h4></a>
        

        <!-- Modal -->
        <div
          class="modal fade"
          id="${item.id}"
          tabindex="-1"
          aria-labelledby="${item.id}Label"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-color text-center">
                <h1 class="modal-title" id="${item.id}Label">${item.projectName}</h1>
                <button
                  type="button"
                  class="btn-close close-x"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body modal-color">
                <p>
                  ${item.description}
                </p>
                <ul class="modal-tools-container">
                
                  ${item.languages}
                </ul>
                <h3>Includes</h3>
                <ul>
                  ${item.included}
                </ul>
              </div>
              <div class="modal-foot d-flex justify-content-evenly pb-5">
                <div>
                <a href="${item.githubLink}" target="_blank"><button type="button" class="link-button">GitHub</button> </a></div>
                <div>
                <a href="${item.websiteLink}" target="_blank"><button type="button" class="link-button">Website</button></a></div>
              </div>
            </div>
          </div>
        </div>`;
});

for (let item of projectItems) {
  projects.innerHTML += item;
}

projectContainer.appendChild(projects);
// console.log(projectItems.length);
// console.log(project);

// for (let project of projectItems) {
//   let div = document.createElement("div");
//   div.innerHTML = project;
//   projectContainer.appendChild(projectItems);
// }
