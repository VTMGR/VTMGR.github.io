        window.music = document.createElement('audio');
        window.music.loop = true;
        window.music.volume = 0.1;

        const source = document.createElement('source');
        source.src = 'https://vtmgr.github.io/WANT%20SOME%20MORE!%20-%20Clover!%20(youtube).mp3';
        source.type = 'audio/mpeg';
        window.music.appendChild(source);

        function playAudio() {
            try {
                window.music.play();
                console.log("Audio is now playing.");
            } catch (error) {
                console.error("Error playing audio:", error);
                alert("Audio playback failed. Please interact with the page.");
            }
        }

        function pauseAudio() {
            if (!window.music.paused) {
                window.music.pause();
                console.log("Audio is now paused.");
            }
        }

        playAudio();

        const targetSubstring = "7a1053de-a29c-4416-8b91-0e86bdc42e0b";
        let audioShouldPlay = false;

        setInterval(() => {
            const currentURL = window.location.href;

            if (currentURL.includes(targetSubstring)) {
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
