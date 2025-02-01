class EggTimer {
        constructor(){
        this.startBtn = document.getElementById("start-timer-btn");
        this.timerInterval = null;
        this.language = null;
        

        document.addEventListener('DOMContentLoaded', () => {
            // Event-Listener für Maus-Events auf den Timer-Optionen hinzufügen
            const labels = document.querySelectorAll('.timer-options label');
        
            labels.forEach(label => {
                label.addEventListener('mouseover', (event) => {
                    const input = label.querySelector('input');
                    const span = label.querySelector('span'); // Hole das <span>-Element
        
                    if (input && span) { // Stelle sicher, dass sowohl input als auch span existieren
                        const type = input.value;
                        const title = span.innerText.trim();
                        this.showPreview(type, title, event);
                    }
                });
        
                label.addEventListener('mouseout', () => {
                    this.hidePreview();
                });
            });
        
            // Sprache laden
            this.language = new Language();
            this.language.loadLanguage("de");
        });
        
        

        this.startBtn.addEventListener('click', () => {
            this.startTimer();
        })
    };

    startTimer = () => {
        let selectedTime = document.querySelector('input[name="timer"]:checked');
        if (!selectedTime) {
            language.showError();
            return;
        }
        
        document.getElementById('bigEgg').style.display = 'block';
        document.getElementById('previewContainer').style.display = 'none';

        let time = parseInt(selectedTime.value);
        let countdownElement = document.getElementById('countdown');

        clearInterval(this.timerInterval);

        let interval = setInterval(() => {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            countdownElement.innerText = `Noch ${minutes}:${seconds < 10 ? '0' : ''}${seconds} Minuten`;
            this.updateBigEggState(time, selectedTime.value);
            if (time <= 0) {
                clearInterval(interval);
                countdownElement.innerText = "Fertig!";
            }
            time--;
        }, 1000);

        this.timerInterval = interval;
        this.updateBigEggState(time, selectedTime.value);
    }

    updateBigEggState = (time, totalTime) => {
        let yolk = document.querySelector('#bigEgg .yolk');
        let progress = 1 - (time / totalTime);
        if (progress < 0.33) {
            yolk.style.background = 'yellow';
            yolk.style.animation = 'yolkDrip 3s infinite';
        } else if (progress < 0.66) {
            yolk.style.background = 'gold';
            yolk.style.animation = '';
        } else {
            yolk.style.background = 'orange';
            yolk.style.animation = '';
        }
    }

    showPreview = (type, title, event) => {
        let previewContainer = document.getElementById('previewContainer');
        let previewTitle = document.getElementById('previewTitle');
        let yolk = document.querySelector('#previewEgg .yolk');

        previewContainer.style.display = 'block';
        previewTitle.innerText = title;
        
        // Vorschau je nach Ei-Typ anpassen
        if (type === 'soft') {
            yolk.style.background = 'yellow';
            yolk.style.animation = ''; // Keine Animation für weiches Ei
        } else if (type === 'medium') {
            yolk.style.background = 'gold';
            yolk.style.animation = '';
        } else if (type === 'hard') {
            yolk.style.background = 'orange';
            yolk.style.animation = '';
        }
    }

    hidePreview = () => {
        document.getElementById('previewContainer').style.display = 'none';
    }
}


let eggTimer = new EggTimer();