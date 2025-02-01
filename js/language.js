class Language{
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.loadLanguage('de');
        });
    }   

    // Diese Funktion lädt die entsprechende Sprachdatei
    loadLanguage(language) {
        fetch(`languages/${language}.json`)  // Beispiel: languages/en.json oder languages/de.json
            .then(response => response.json())
            .then(data => {
                // Texte in der HTML-Datei aktualisieren
                document.getElementById('title').innerText = data.title;
                document.getElementById('softEggTime').innerText = data.softEgg.time;
                document.getElementById('softEggDescription').innerText = data.softEgg.description;
                document.getElementById('softEggLabel').setAttribute('title', data.softEgg.description);
                document.getElementById('mediumEggTime').innerText = data.mediumEgg.time;
                document.getElementById('mediumEggDescription').innerText = data.mediumEgg.description;
                document.getElementById('mediumEggLabel').setAttribute('title', data.mediumEgg.description);
                document.getElementById('hardEggTime').innerText = data.hardEgg.time;
                document.getElementById('hardEggDescription').innerText = data.hardEgg.description;
                document.getElementById('hardEggLabel').setAttribute('title', data.hardEgg.description);
                document.getElementById('startButton').innerText = data.startButton;
            })
            .catch(error => {
                console.error('Fehler beim Laden der Sprachdatei:', error);
            });
    }
}

let language = new Language();