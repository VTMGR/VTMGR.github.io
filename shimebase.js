const audioElement = document.getElementById("backgroundAudio");
console.log("hi i work?");
        audioElement.volume = 0.1;
        const targetSubstring = "7a1053de-a29c-4416-8b91-0e86bdc42e0b";

        function playAudio() {
            if (window.location.href.includes(targetSubstring)) {
                try {
                    audioElement.play();
                } catch (error) {}
            }
        }

        function pauseAudio() {
            if (!audioElement.paused) {
                audioElement.pause();
            }
        }

        playAudio();

        let audioShouldPlay = false;

        setInterval(() => {

            if (window.location.href.includes(targetSubstring)) {
                if (audioElement.paused) {
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
