        window.music = document.createElement('audio');
        window.music.loop = true;
        window.music.volume = 0.1;

        const source = document.createElement('source');
        source.src = 'https://vtmgr.github.io/WANT%20SOME%20MORE!%20-%20Clover!%20(youtube).mp3';
        source.type = 'audio/mpeg';
        window.music.appendChild(source);

        function playAudio() {
            if (window.location.href.includes(targetSubstring)) {
            try {
                window.music.play();
            } catch (error) {}
            }
        }

        function pauseAudio() {
            if (!window.music.paused) {
                window.music.pause();
            }
        }

        playAudio();

        const targetSubstring = "7a1053de-a29c-4416-8b91-0e86bdc42e0b";
        let audioShouldPlay = false;

        setInterval(() => {

            if (window.location.href.includes(targetSubstring)) {
                if (window.music.paused) {
                    playAudio();
                }
                audioShouldPlay = true;
            } else {
                if (audioShouldPlay) {
                    pauseAudio();
                }
            }
        }, 100); 

        document.addEventListener('click', playAudio);
        document.addEventListener('keydown', playAudio);
