const contentDiv = document.getElementById("content");

function renderHomePage() {
  contentDiv.innerHTML = `
    <h1>Welcome to my Single Page App</h1>
    <p>This is the home page.</p>
  `;
}

function renderAboutPage() {
  // Use AJAX to fetch content from server
  fetch("about.html")
    .then(response => response.text())
    .then(html => {
      contentDiv.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
      contentDiv.innerHTML = `<p>Error loading content.</p>`;
    });
}

function renderContactPage() {
  // Use AJAX to fetch content from server
  fetch("contact.html")
    .then(response => response.text())
    .then(html => {
      contentDiv.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
      contentDiv.innerHTML = `<p>Error loading content.</p>`;
    });
}

function renderPage() {
  const route = window.location.hash.substring(2);
  switch (route) {
    case "":
      renderHomePage();
      break;
    case "about":
      renderAboutPage();
      break;
    case "contact":
      renderContactPage();
      break;
    default:
      contentDiv.innerHTML = `<p>Page not found.</p>`;
      break;
  }
}

window.addEventListener("hashchange", renderPage);
renderPage();
