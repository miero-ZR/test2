function toonAdvies() {
    const gevoeligheid = document.getElementById("gevoeligheid").value;
    const toegang = document.getElementById("toegang").value;
    const grootte = document.getElementById("grootte").value;
    const archiefactief = document.getElementById("archiefactief").value;
    const access = document.getElementById("access").value;
    const adviesText = document.getElementById("advies-text");
    const resultaatDiv = document.getElementById("resultaat");

    let advies = "Kies een optie die past bij je behoeften.";

    if (gevoeligheid === "hoog" && toegang === "privé") {
        if (grootte === "klein") {
            advies = "Gebruik een pesoonlijke netwerkschijf (H-schijf) op Uantwerpen infrastructuur.";
        } else {
            advies = "Gebruik een gedeelde netwerkschijf (N-chijf) op Uantwerpen infrastructuur.";
        }
    }
    else if (gevoeligheid === "hoog" && toegang === "team") {
        if (archiefactief === "ja") {
            advies = "Gebruik een beveiligde cloudoplossing zoals SharePoint of Nextcloud met toegangsbeheer.";
        } else {
            advies = "Gebruik een interne server of een versleutelde netwerkopslag.";
            advies = "test meerdere opties"
        }
    }
    else if (gevoeligheid === "gemiddeld" && toegang === "openbaar") {
        advies = "Gebruik Teams, communicatie en samenwerkingsoplossing in M365 omgeving van Uantwerpen. Wees voorzichtig met gevoelige gegevens.";
    }
    else if (gevoeligheid === "laag" && grootte === "groot") {
        advies = "Gebruik een externe harde schijf of een cloudservice met veel opslag zoals Google Drive of OneDrive.";
    }
    else if (gevoeligheid === "laag" && toegang === "team") {
        advies = "Gebruik een gedeelde drive zoals SharePoint, Google Drive of een interne netwerkschijf.";
    }
    else {
        advies = "Selecteer opties om een opslagadvies te krijgen.";
    }

    adviesText.textContent = advies;
    resultaatDiv.style.display = "block"; }
