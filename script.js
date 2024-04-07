document.addEventListener("DOMContentLoaded", function() {
    loadWebsites();
});
const defaultWebsites = {
        "Google": "https://google.com",
        "Rule34": {
            "Url": "https://rule34.xxx",
            "hide": true
        },
        "Roblox": "https://roblox.com",
        "Youtube": "https://youtube.com",
        "Reddit": "https://reddit.com",
        "Twitter": "https://twitter.com",
        "ChatGPT": "https://chat.openai.com",
        "YTGames": "https://www.youtube.com/playables?bp=EgZicm93c2U%3D",
        "Flash Museum": "https://flashmuseum.org/",
        "Minecraft": {
            "Url": "/bg",
            "FavIcon": "bg.png"
        },
        "CMG": "https://www.coolmathgames.com/",
        "Minesweeper": "https://minesweeper.online/",
        "Kemono": {
            "Url": "https://kemono.su",
            "hide": true
        },
        "TL2": {
            "Url": "/TL2WGL",
            "FavIcon": "TL2WGL.png",
            "hide": true
        }
    };
	const existingWebsites = JSON.parse(localStorage.getItem('websites')) || {};
    let mergedWebsites = { ...defaultWebsites, ...existingWebsites };
function loadWebsites() {

    localStorage.setItem('websites', JSON.stringify(mergedWebsites));

    const websitesContainer = document.getElementById('websites-container');
    websitesContainer.innerHTML = '';

    for (const [website, data] of Object.entries(mergedWebsites)) {
		if (data["hide"]==null) {
            const websiteButton = document.createElement('a');
            websiteButton.className = "website-btn";
            websiteButton.innerHTML = `
                <img src="${data.FavIcon ? data.FavIcon : 'https://www.google.com/s2/favicons?sz=64&domain=' + (data.Url ? data.Url : data)}" alt="${website} favicon" width="50" height="50">
                <div class="website-name">${website}</div>
            `;
            if (data.Url) {
                websiteButton.href = data.Url;
            } else {
                websiteButton.href = data;
            }
            websitesContainer.appendChild(websiteButton);
		}
    }

    websitesContainer.innerHTML += ` <button type="button" class="add-website-btn" onclick="toggleAddWebsiteForm()">
        <img src="32360.png" alt="Add Website" width="30" height="30" style="filter:invert(70%);">
    </button>`;
}

var sequenceTotal = 0;
const targetSequenceTotal = 34; // Total sum to reveal hidden websites

function checkSequence() {
    if (sequenceTotal === targetSequenceTotal) {
        revealHiddenWebsites();
    }
}

function revealHiddenWebsites() {
    const websitesData = mergedWebsites;
    for (const [website, data] of Object.entries(websitesData)) {
        if (data.hide) {
            data.hide = null;
        }
    }
    loadWebsites();
}

window.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        const number = parseInt(key);
        sequenceTotal = sequenceTotal + number;
        if (sequenceTotal > targetSequenceTotal) {
            sequenceTotal = 0;
        }
    }
    checkSequence();
});

function toggleAddWebsiteForm() {
    var formOverlay = document.getElementById('add-website-form-overlay');
    var formContainer = document.getElementById('add-website-form-container');
    formOverlay.style.display = (formOverlay.style.display === 'none' || formOverlay.style.display === '') ? 'block' : 'none';
    formContainer.style.display = (formContainer.style.display === 'none' || formContainer.style.display === '') ? 'block' : 'none';
}

function addWebsite() {
    const websiteName = document.getElementById('add-website-input').value.trim();
    const websiteUrl = document.getElementById('add-url-input').value.trim();
    const websiteFavicon = document.getElementById('add-favicon-input').value.trim();
	const hideonload = document.getElementById('hide-input').checked;
	if (hideonload==false){
		hideonload = null
	}

    if (websiteName !== '' && websiteUrl !== '') {
        const websitesData = JSON.parse(localStorage.getItem('websites')) || {};
        websitesData[websiteName] = {
            Url: websiteUrl,
            FavIcon: websiteFavicon,
			hide: hideonload
        };
        localStorage.setItem('websites', JSON.stringify(websitesData));
		mergedWebsites = { ...defaultWebsites, ...websitesData };
        loadWebsites();
        document.getElementById('add-website-input').value = "";
        document.getElementById('add-url-input').value = "";
        document.getElementById('add-favicon-input').value = "";
		document.getElementById('hide-input').checked = false;
        toggleAddWebsiteForm();
    }
}
