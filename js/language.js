class Language{
    constructor() {
        this.jsTexts = {};
        this.currentLanguage = "de";
    }   

    // Funktion zum Laden der JSON-Dateien
    loadLanguage = (lang) => {
        this.currentLanguage = lang;
        
        setTimeout(() => {
        // Lade HTML-Texte
        fetch(`/languages/${lang}/index.json`)
            .then(response => response.json())
            .then(data => this.updateHTMLText(data))
            .catch(error => console.error("Fehler beim Laden der HTML-Sprachdatei:", error));
        
        // Lade JS-Texte
        fetch(`/languages/${lang}/js/index.json`)
            .then(response => response.json())
            .then(data => this.updateJSText(data))
            .catch(error => console.error("Fehler beim Laden der JS-Sprachdatei:", error));
        },100);
    }
    
    // Aktualisiere HTML-Texte
    updateHTMLText = (data) => {
        // Überschrift setzen
        let header = document.querySelector("h1");
        if (header) header.innerText = data.header;
    
        // Timer-Optionen setzen
        let softLabel = document.querySelector('label[for="soft"] span');
        if (softLabel) softLabel.innerText = `3 Minuten (${data.label.soft})`;
    
        let mediumLabel = document.querySelector('label[for="medium"] span');
        if (mediumLabel) mediumLabel.innerText = `5 Minuten (${data.label.medium})`;
    
        let hardLabel = document.querySelector('label[for="hard"] span');
        if (hardLabel) hardLabel.innerText = `8 Minuten (${data.label.hard})`;
    
        // Start-Button setzen
        let startButton = document.getElementById("start-timer-btn");
        if (startButton) startButton.innerText = data.button.start;
    };
    
    
    // Aktualisiere JS-Texte (z.B. Alerts)
    updateJSText = (data) =>{
        console.log("data " + JSON.stringify(data));

        this.jsTexts = data;
    }
    
    // Fehler anzeigen (wenn z. B. keine Zeit gewählt wurde)
    showError = () => {
        alert(jsTexts.alert.timeoption);
    }  
}