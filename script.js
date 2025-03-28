function toonAdvies() {
    const gevoeligheid = document.getElementById("gevoeligheid").value;
    const toegang = document.getElementById("toegang").value;
    const grootte = document.getElementById("grootte").value;
    const samenwerking = document.getElementById("samenwerking").value;
    const adviesText = document.getElementById("advies-text");
    const resultaatDiv = document.getElementById("resultaat");

    let advies = "Kies een opslagoptie die past bij je behoeften.";

    if (gevoeligheid === "hoog" && toegang === "privé") {
        if (grootte === "klein") {
            advies = "Gebruik een versleutelde cloudopslag zoals OneDrive of iCloud met extra encryptie.";
        } else {
            advies = "Gebruik een beveiligde netwerkschijf of een NAS met encryptie.";
        }
    }
    else if (gevoeligheid === "hoog" && toegang === "team") {
        if (samenwerking === "ja") {
            advies = "Gebruik een beveiligde cloudoplossing zoals SharePoint of Nextcloud met toegangsbeheer.";
        } else {
            advies = "Gebruik een interne server of een versleutelde netwerkopslag.";
        }
    }
    else if (gevoeligheid === "gemiddeld" && toegang === "openbaar") {
        advies = "Gebruik Google Drive, Dropbox of een publieke cloudoplossing, maar wees voorzichtig met gevoelige gegevens.";
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
