// PROJECT MODAL

function showProject(project) {

    const modal = document.getElementById("projectModal");
    const title = document.getElementById("projectModalTitle");
    const description = document.getElementById("projectModalDescription");
    const icon = document.getElementById("projectModalIcon");

    const liveDemoBtn = document.getElementById("liveDemoBtn");
    const githubBtn = document.getElementById("githubBtn");

    if (project === "Portfolio Website") {

        icon.textContent = "🌐";
        title.textContent = "Modern Portfolio Website";

        description.textContent =
            "A modern responsive portfolio website built using HTML, CSS and JavaScript.";

        liveDemoBtn.href = "#";
        githubBtn.href = "#";

    }

    else if (project === "Shopping Website") {

        icon.textContent = "🛒";
        title.textContent = "Online Shopping Website";

        description.textContent =
            "A clean and responsive online shopping website concept with a modern UI.";

        liveDemoBtn.href = "#";
        githubBtn.href = "#";

    }

    else if (project === "Business Website") {

        icon.textContent = "💼";
        title.textContent = "Business Website";

        description.textContent =
            "A professional business website designed with a modern and responsive layout.";

        liveDemoBtn.href = "#";
        githubBtn.href = "#";
    }

    modal.classList.add("show");
}


function closeProject() {

    document.getElementById("projectModal")
        .classList.remove("show");

}