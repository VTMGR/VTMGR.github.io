document.addEventListener("DOMContentLoaded", function() {
            loadWebsites();
        });

        function loadWebsites() {
            if (!localStorage.getItem('websites')) {
                localStorage.setItem('websites', JSON.stringify({
    "Google": "https://google.com",
    "Rule34": "https://rule34.xxx",
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
    "Kemono": "https://kemono.su",
    "TL2": {
        "Url": "/TL2WGL",
        "FavIcon": "TL2WGL.png"
    },
}));
            }
    const websitesData = JSON.parse(localStorage.getItem('websites'));
    const websitesContainer = document.getElementById('websites-container');
    websitesContainer.innerHTML = '';
    for (const [website, data] of Object.entries(websitesData)) {
        const websiteButton = document.createElement('div');
        websiteButton.className = "website-btn";
        websiteButton.onclick = function() {
            if (data.Url) {
                window.location.href = data.Url;
            } else {
                window.location.href = data;
            }
        };
        websiteButton.innerHTML = `
            <img src="${data.FavIcon ? data.FavIcon : 'https://www.google.com/s2/favicons?sz=64&domain=' + (data.Url ? data.Url : data)}" alt="${website} favicon" width="50" height="50">
            <div class="website-name">${website}</div>
        `;
        websitesContainer.appendChild(websiteButton);
    }
        }

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

            if (websiteName !== '' && websiteUrl !== '') {
                const websitesData = JSON.parse(localStorage.getItem('websites')) || {};
                websitesData[websiteName] = {
                    url: websiteUrl,
                    favicon: websiteFavicon
                };
                localStorage.setItem('websites', JSON.stringify(websitesData));
                loadWebsites();
                document.getElementById('add-website-input').value = "";
                document.getElementById('add-url-input').value = "";
                document.getElementById('add-favicon-input').value = "";
                toggleAddWebsiteForm();
            }
        }
