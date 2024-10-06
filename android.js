    const button = document.createElement('button');
    button.innerText = 'Play Video';
    button.id = 'myButton';

    const scriptElement = document.currentScript;
    scriptElement.parentNode.insertBefore(button, scriptElement.nextSibling);
    button.style.display = 'none';

    button.onclick = function() {
        button.style.display = 'none';
      
        const video = document.createElement('video');
        video.src = 'https://vtmgr.github.io/Android_niggas_be_like.mp4';
        video.controls = true;
        video.autoplay = true;

        scriptElement.parentNode.insertBefore(video, scriptElement.nextSibling);

        video.onended = function() {
            document.body.removeChild(video);
            video.remove();
            button.style.display = 'block';
        };

        video.onerror = function() {
            document.body.removeChild(video);
            video.remove();
            button.style.display = 'block';
        };
    };
    button.style.display = 'block';
