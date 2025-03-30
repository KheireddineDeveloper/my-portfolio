function loadPage(page) {
    fetch (`pages/${page}.html`)
        .then (response => response.text())
        .then (html => document.getElementById("content").innerHTML = html)
        .catch(err => console.error("Fehler beim Laden:", err));
}