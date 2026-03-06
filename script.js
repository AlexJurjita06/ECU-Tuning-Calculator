// ========== HAMBURGER MENU ==========
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function toggleSidebar() {
    hamburgerBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

hamburgerBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// ========== ACCORDION SIDEBAR ==========
function toggleAccordion(titleEl) {
    var content = titleEl.nextElementSibling;
    var isOpen = titleEl.classList.contains('open');
    
    // Close all sections first
    document.querySelectorAll('.sidebar-section-title').forEach(function(t) {
        t.classList.remove('open');
        t.nextElementSibling.classList.remove('open');
    });
    
    // Toggle clicked one
    if (!isOpen) {
        titleEl.classList.add('open');
        content.classList.add('open');
    }
}

// ========== SUB-ACCORDION (individual text per item) ==========
function toggleSubText(itemEl) {
    var textEl = itemEl.nextElementSibling;
    var isOpen = itemEl.classList.contains('active-item');
    
    // Close all sub-texts in the same section
    var section = itemEl.closest('.sidebar-section-content');
    section.querySelectorAll('.sidebar-despre-item').forEach(function(item) {
        item.classList.remove('active-item');
    });
    section.querySelectorAll('.sidebar-sub-text').forEach(function(txt) {
        txt.classList.remove('open');
    });
    
    // Toggle clicked one
    if (!isOpen) {
        itemEl.classList.add('active-item');
        textEl.classList.add('open');
    }
}

function scrollToEdu(id) {
    toggleSidebar();
    // Make sure homeView is visible
    document.getElementById("homeView").style.display = "block";
    document.getElementById("resultsView").style.display = "none";
    
    setTimeout(function() {
        var el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.boxShadow = '0 0 0 3px rgba(211,47,47,0.3)';
            setTimeout(function() { el.style.boxShadow = ''; }, 2000);
        }
    }, 400);
}

// Highlight today's row in the schedule
(function highlightToday() {
    var days = ['Duminica','Luni','Marti','Miercuri','Joi','Vineri','Sambata'];
    var today = days[new Date().getDay()];
    var rows = document.querySelectorAll('#scheduleTable tr');
    rows.forEach(function(row) {
        if (row.cells[0] && row.cells[0].textContent === today) {
            row.classList.add('today');
        }
    });
})();

// ========== ORIGINAL APP LOGIC ==========
window.onload = function() {
    var dataListElement = document.getElementById("carList");
    var searchInput = document.getElementById("carSearch");
    
    if (dataListElement && searchInput && typeof carDatabase !== 'undefined') {
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
    }
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

// --- NAVIGARE LA RECENZII ---
function navigateToReviews() {
    toggleSidebar();
    var resultsView = document.getElementById("resultsView");
    var homeView = document.getElementById("homeView");
    if (resultsView) resultsView.style.display = "none";
    if (homeView) homeView.style.display = "block";
    setTimeout(function() {
        var section = document.querySelector('.reviews-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 300);
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

// ========== SCROLL REVEAL ANIMATION ==========
(function() {
    var reveals = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    reveals.forEach(function(el) { observer.observe(el); });
})();

// ========== COUNTER ANIMATION ==========
(function() {
    var counters = document.querySelectorAll('.stat-number[data-target]');
    var started = false;
    var statsBar = document.querySelector('.stats-bar');
    if (!statsBar) return;

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !started) {
                started = true;
                counters.forEach(function(counter) {
                    var target = parseInt(counter.getAttribute('data-target'));
                    var duration = 1800;
                    var start = 0;
                    var startTime = null;
                    function animate(ts) {
                        if (!startTime) startTime = ts;
                        var progress = Math.min((ts - startTime) / duration, 1);
                        var ease = 1 - Math.pow(1 - progress, 3);
                        counter.textContent = Math.round(ease * target) + '+';
                        if (progress < 1) requestAnimationFrame(animate);
                    }
                    requestAnimationFrame(animate);
                });
            }
        });
    }, { threshold: 0.3 });
    observer.observe(statsBar);
})();

// ========== REVIEWS SYSTEM (localStorage) ==========
function getReviews() {
    try {
        return JSON.parse(localStorage.getItem('ajp_reviews') || '[]');
    } catch (e) { return []; }
}

function saveReviews(reviews) {
    localStorage.setItem('ajp_reviews', JSON.stringify(reviews));
}

function renderStars(count) {
    var s = '';
    for (var i = 0; i < 5; i++) {
        s += i < count ? '<i class="fas fa-star"></i>' : '<i class="far fa-star" style="color:#333;"></i>';
    }
    return s;
}

function sanitize(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function renderReviews() {
    var reviews = getReviews();
    var list = document.getElementById('reviewsList');
    var noReviews = document.getElementById('noReviews');
    var avgBlock = document.getElementById('reviewsAvg');

    // Clear existing items (keep noReviews placeholder)
    list.querySelectorAll('.review-item').forEach(function(el) { el.remove(); });

    if (reviews.length === 0) {
        noReviews.style.display = 'block';
        avgBlock.style.display = 'none';
        return;
    }

    noReviews.style.display = 'none';
    avgBlock.style.display = 'flex';

    // Calculate average
    var total = reviews.reduce(function(sum, r) { return sum + r.rating; }, 0);
    var avg = (total / reviews.length).toFixed(1);
    document.getElementById('avgNumber').textContent = avg;
    document.getElementById('avgStars').innerHTML = renderStars(Math.round(parseFloat(avg)));
    document.getElementById('avgCount').textContent = reviews.length + (reviews.length === 1 ? ' recenzie' : ' recenzii');

    // Render each review (newest first)
    reviews.slice().reverse().forEach(function(r) {
        var initials = r.name.split(' ').map(function(w) { return w.charAt(0).toUpperCase(); }).join('').substring(0, 2);
        var div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML =
            '<div class="review-item-header">' +
                '<div class="review-item-name"><span class="review-avatar">' + sanitize(initials) + '</span>' + sanitize(r.name) + '</div>' +
                '<div><span class="review-item-stars">' + renderStars(r.rating) + '</span> <span class="review-item-date">' + sanitize(r.date) + '</span></div>' +
            '</div>' +
            (r.text ? '<p class="review-item-text">' + sanitize(r.text) + '</p>' : '');
        list.appendChild(div);
    });

    // Also render in sidebar
    renderSidebarReviews(reviews, avg);
    updateSidebarAvg();
}

function renderSidebarReviews(reviews, avg) {
    var container = document.getElementById('sidebarReviewsContainer');
    if (!container) return;
    container.innerHTML = '';

    if (reviews.length === 0) {
        container.innerHTML = '<p class="sidebar-no-reviews">Nicio recenzie inca.</p>';
        return;
    }

    // Average bar
    var avgHtml = '<div class="sidebar-review-avg">' +
        '<div class="sidebar-review-avg-num">' + avg + '</div>' +
        '<div><div class="sidebar-review-avg-stars">' + renderStars(Math.round(parseFloat(avg))) + '</div>' +
        '<div class="sidebar-review-avg-count">' + reviews.length + (reviews.length === 1 ? ' recenzie' : ' recenzii') + '</div></div></div>';

    var listHtml = '<div class="sidebar-reviews-scroll">';
    reviews.slice().reverse().forEach(function(r) {
        var initials = r.name.split(' ').map(function(w) { return w.charAt(0).toUpperCase(); }).join('').substring(0, 2);
        listHtml += '<div class="sidebar-review-item">' +
            '<div class="sidebar-review-header">' +
                '<div class="sidebar-review-name"><span class="sr-avatar">' + sanitize(initials) + '</span>' + sanitize(r.name) + '</div>' +
                '<div><span class="sidebar-review-stars">' + renderStars(r.rating) + '</span></div>' +
            '</div>' +
            (r.text ? '<p class="sidebar-review-text">' + sanitize(r.text) + '</p>' : '') +
            '<div class="sidebar-review-date">' + sanitize(r.date) + '</div>' +
        '</div>';
    });
    listHtml += '</div>';

    container.innerHTML = avgHtml + listHtml;
}

function submitReview() {
    var ratingEl = document.querySelector('#starRating input:checked');
    var nameEl = document.getElementById('reviewName');
    var textEl = document.getElementById('reviewText');

    if (!ratingEl) {
        alert('Te rog selecteaza un numar de stele!');
        return;
    }
    var name = nameEl.value.trim();
    if (!name) {
        alert('Te rog introdu numele tau!');
        return;
    }

    var reviews = getReviews();
    var now = new Date();
    var dateStr = now.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });

    reviews.push({
        rating: parseInt(ratingEl.value),
        name: name,
        text: textEl.value.trim(),
        date: dateStr
    });

    saveReviews(reviews);

    // Reset form
    ratingEl.checked = false;
    nameEl.value = '';
    textEl.value = '';

    renderReviews();
}

// Initial render on page load
renderReviews();
updateSidebarAvg();

// ========== SIDEBAR AVG BADGE ==========
function updateSidebarAvg() {
    var badge = document.getElementById('sidebarAvgBadge');
    if (!badge) return;
    var reviews = getReviews();
    if (reviews.length === 0) {
        badge.innerHTML = '';
        badge.style.display = 'none';
        return;
    }
    var total = reviews.reduce(function(sum, r) { return sum + r.rating; }, 0);
    var avg = (total / reviews.length).toFixed(1);
    badge.style.display = 'inline-flex';
    badge.innerHTML = '<i class="fas fa-star" style="font-size:9px;"></i> ' + avg + '/5';
}

