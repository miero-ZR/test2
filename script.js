
function toonAdvies() {
    const gevoeligheid = document.getElementById("gevoeligheid").value;
    const toegang = document.getElementById("toegang").value;
    const grootte = document.getElementById("grootte").value;
    const samenwerking = document.getElementById("samenwerking").value;
    const adviesText = document.getElementById("advies-text");
    const resultaatDiv = document.getElementById("resultaat");

    let adviezen = [];

    // 🔹 Add matching options dynamically instead of requiring all selections

    if (gevoeligheid === "hoog") {
        adviezen.push("Gebruik een versleutelde cloudopslag zoals OneDrive of Nextcloud met encryptie.");
    }
    if (gevoeligheid === "hoog" && toegang === "team") {
        adviezen.push("Voor teamgebruik: gebruik een interne server of een SharePoint-gebaseerde oplossing.");
    }
    if (gevoeligheid === "gemiddeld") {
        adviezen.push("Voor werkbestanden: een cloudoplossing zoals Google Drive of Dropbox is geschikt.");
    }
    if (gevoeligheid === "laag") {
        adviezen.push("Voor niet-gevoelige data: gebruik een externe schijf of een goedkope cloudopslag zoals pCloud.");
    }
    if (toegang === "openbaar") {
        adviezen.push("Voor openbare toegang: Google Drive of een openbare SharePoint-map.");
    }
    if (grootte === "groot") {
        adviezen.push("Voor grote bestanden: gebruik een netwerkschijf, NAS of OneDrive Business met onbeperkte opslag.");
    }
    if (samenwerking === "ja") {
        adviezen.push("Voor samenwerking: een gedeelde drive zoals Google Drive, OneDrive of Nextcloud.");
    }

    // 🔹 If no options were selected, show a default message
    if (adviezen.length === 0) {
        adviezen.push("Selecteer minstens één optie om een opslagadvies te krijgen.");
    }

    // 🔹 Display all matching results as a list
    adviesText.innerHTML = "<ul><li>" + adviezen.join("</li><li>") + "</li></ul>";
    resultaatDiv.style.display = "block"; }
