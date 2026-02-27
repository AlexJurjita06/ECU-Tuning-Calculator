window.onload = function() {
    const dataListElement = document.getElementById("carList");
    const searchInput = document.getElementById("carSearch");
    
    // Populăm lista de căutare din baza de date
    carDatabase.forEach(car => {
        let option = document.createElement("option");
        option.value = `${car.brand} ${car.model} (${car.stockHP} CP)`;
        dataListElement.appendChild(option);
    });

    // Permite apăsarea tastei Enter
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            calculateTuning(); 
        }
    });
};

function calculateTuning() {
    const inputValue = document.getElementById("carSearch").value;
    const carImage = document.getElementById("carImage");
    const warningList = document.getElementById("warningList");
    
    // Validări
    if (!inputValue) {
        alert("Te rog caută și selectează o mașină din listă!");
        return;
    }

    const car = carDatabase.find(c => `${c.brand} ${c.model} (${c.stockHP} CP)` === inputValue);

    if (!car) {
        alert("Mașina introdusă nu a fost găsită. Te rog folosește o opțiune validă din listă.");
        return;
    }

    // --- COMUTARE VIEW-URI (Magia aplicației) ---
    // Ascundem Home și arătăm Rezultatele
    document.getElementById("homeView").style.display = "none";
    document.getElementById("resultsView").style.display = "block";

    // Punem datele mașinii în HTML
    document.getElementById("carTitle").innerText = `${car.brand} ${car.model}`;
    document.getElementById("stockHP").innerText = car.stockHP;
    document.getElementById("stockNM").innerText = car.stockNM;
    document.getElementById("tunedHP").innerText = car.tunedHP;
    document.getElementById("tunedNM").innerText = car.tunedNM;

    // Afișăm poza dacă există
    if (car.imageUrl) {
        carImage.src = car.imageUrl;
        carImage.style.display = "block"; 
    } else {
        carImage.style.display = "none"; 
    }

    // Populăm lista cu avertismente
    warningList.innerHTML = "";
    car.warnings.forEach(warning => {
        let li = document.createElement("li");
        li.innerText = warning;
        warningList.appendChild(li);
    });

    // Ne asigurăm că butonul de contact este resetat (ascunde detaliile)
    document.getElementById("revealContactBtn").style.display = "inline-flex";
    document.getElementById("hiddenContactInfo").style.display = "none";
    
    // Scroll automat sus la afișarea rezultatelor
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
    // Ascundem Rezultatele și arătăm Home
    document.getElementById("resultsView").style.display = "none";
    document.getElementById("homeView").style.display = "block";
    
    // Golim căsuța de text pentru o nouă căutare
    document.getElementById("carSearch").value = "";
    
    // Facem scroll elegant la zona de căutare
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- FUNCȚIILE DE CONTACT ---
function showContactInfo() {
    const contactInfoDiv = document.getElementById("hiddenContactInfo");
    const revealBtn = document.getElementById("revealContactBtn");
    
    contactInfoDiv.style.display = "block";
    revealBtn.style.display = "none";
}

function revealPhone() {
    const phoneSpan = document.getElementById("phoneNumber");
    const showBtn = document.getElementById("showPhoneBtn");
    
    phoneSpan.innerText = "0747 802 610";
    showBtn.style.display = "none";
}