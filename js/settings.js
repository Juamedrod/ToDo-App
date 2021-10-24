class Settings {

    constructor(mainColor, secColor, fontColor, hovercolor, fontMain = "Nanum Myeongjo", fontSecond = "Rampart One", priourgente, prionormal, priorelaxed, fontSize) {

        this.mainColor = mainColor,
            this.secColor = secColor,
            this.fontColor = fontColor,
            this.hovercolor = hovercolor,
            this.fontMain = fontMain,
            this.fontSecond = fontSecond,
            this.priourgente = priourgente,
            this.prionormal = prionormal,
            this.priorelaxed = priorelaxed,
            this.root = document.querySelector(':root')

    }

    jsonify() {
        return JSON.stringify(this);
    }

    saveToLocalStorage() {
        localStorage.setItem('lsSettings', this.jsonify());
    }

    defaultSettings() {
        let defaultSetts = JSON.parse('{"mainColor":"#1563a3","secColor":"#ffa500","fontColor":"#ffffff","hovercolor":"#68ab30","fontMain":"Nanum Myeongjo","fontSecond":"Rampart One","priourgente":"#ff0000","prionormal":"#c4ec13","priorelaxed":"#00ff00"}');

        this.mainColor = defaultSetts.mainColor
        this.secColor = defaultSetts.secColor
        this.fontColor = defaultSetts.fontColor
        this.hovercolor = defaultSetts.hovercolor
        this.fontMain = defaultSetts.fontMain
        this.fontSecond = defaultSetts.fontSecond
        this.priourgente = defaultSetts.priourgente
        this.prionormal = defaultSetts.prionormal
        this.priorelaxed = defaultSetts.priorelaxed

        this.root.style.setProperty('--colorPrincipal', defaultSetts.mainColor);
        this.root.style.setProperty('--colorSecundario', defaultSetts.secColor);
        this.root.style.setProperty('--colorLetra', defaultSetts.fontColor);
        this.root.style.setProperty('--hoverColor', defaultSetts.hovercolor);
        this.root.style.setProperty('--fontMain', defaultSetts.fontMain);
        this.root.style.setProperty('--fontSecond', defaultSetts.fontSecond);
        this.root.style.setProperty('--priourgente', defaultSetts.priourgente);
        this.root.style.setProperty('--prionormal', defaultSetts.prionormal);
        this.root.style.setProperty('--priorelaxed', defaultSetts.priorelaxed);
        this.saveToLocalStorage();
        this.updateActualValues();
    }

    showSettings(section) {
        section.innerHTML =
            `
        <article id="settings">
            <h3>Color Settings</h3>
            <div class="option">
                <input type="color" id="mainColor"><label for="mainColor">Main Color</label>
            </div>
            <div class="option">
                <input type="color" id="secColor"><label for="secColor">Secondary Color</label>

            </div>
            <div class="option">
                <input type="color" id="fontColor"><label for="fontColor">Font Color</label>

            </div>
            <div class="option">
                <input type="color" id="hovercolor"><label for="hovercolor">Hover Color</label>

            </div>
            <div class="option">
                <input type="color" id="priourgente"><label for="priourgente">High Piority Color</label>

            </div>
            <div class="option">
                <input type="color" id="prionormal"><label for="prionormal">Normal Priority Color</label>

            </div>
            <div class="option">
                <input type="color" id="priorelaxed"><label for="priorelaxed">Low Priority Color</label>
            </div>
        </article>

        <article id="settings">
            <h3>Font Settings</h3>
            <div class="flex">
                <select id="fontMain">
                    <option value="">Main Font Selection</option>
                    <option value="Nanum Myeongjo, serif" style="font-family: 'Nanum Myeongjo', serif;">Nanum
                        Myeongjo</option>
                    <option value="Rampart One" style="font-family: 'Rampart One',serif;">Rampart One
                    </option>
                    <option value="Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
                        style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">Segoe UI</option>
                </select>

                <select id="fontSecond">
                    <option value="">Secondary Font Selection</option>
                    <option value="Nanum Myeongjo, serif" style="font-family: 'Nanum Myeongjo', serif;">Nanum
                        Myeongjo</option>
                    <option value="Rampart One,serif" style="font-family: 'Rampart One',serif;">Rampart One
                    </option>
                    <option value="Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
                        style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Segoe UI</option>
                </select>
            </div>


            </select>
        </article>
        <div class="resetDiv"><button id="resetSettings">RESET</button></div>
        
        `;

        let mainCol = document.querySelector('#mainColor');
        let secCol = document.querySelector('#secColor');
        let fontColor = document.querySelector('#fontColor');
        let hoverColor = document.querySelector('#hovercolor');
        let prioUrgen = document.querySelector('#priourgente');
        let prioNormal = document.querySelector('#prionormal');
        let prioRelax = document.querySelector('#priorelaxed');
        let fontMain = document.querySelector('#fontMain');
        let fontSecond = document.querySelector('#fontSecond');
        let btnReset = document.querySelector('.resetDiv #resetSettings');

        mainCol.addEventListener('change', (event) => this.setMainColor(event));
        secCol.addEventListener('change', (event) => this.setsecColor(event));
        fontColor.addEventListener('change', (event) => this.setfontColor(event));
        hoverColor.addEventListener('change', (event) => this.sethovercolor(event));
        prioUrgen.addEventListener('change', (event) => this.setpriourgente(event));
        prioNormal.addEventListener('change', (event) => this.setprionormal(event));
        prioRelax.addEventListener('change', (event) => this.setpriorelaxed(event));
        fontMain.addEventListener('change', (event) => this.setfontMain(event));
        fontSecond.addEventListener('change', (event) => this.setfontSecond(event));
        btnReset.addEventListener('click', (event) => this.defaultSettings(event));


    }

    updateActualValues() {
        let mainCol = document.querySelector('#mainColor');
        let secCol = document.querySelector('#secColor');
        let fontColor = document.querySelector('#fontColor');
        let hoverColor = document.querySelector('#hovercolor');
        let prioUrgen = document.querySelector('#priourgente');
        let prioNormal = document.querySelector('#prionormal');
        let prioRelax = document.querySelector('#priorelaxed');
        let fontMain = document.querySelector('#fontMain');
        let fontSecond = document.querySelector('#fontSecond');

        mainCol.value = this.mainColor;
        secCol.value = this.secColor;
        fontColor.value = this.fontColor;
        hoverColor.value = this.hovercolor;
        prioUrgen.value = this.priourgente;
        prioNormal.value = this.prionormal;
        prioRelax.value = this.priorelaxed;
    }

    resetSettings() {

        this.mainColor = getComputedStyle(document.documentElement).getPropertyValue('--colorPrincipal');
        this.secColor = getComputedStyle(document.documentElement).getPropertyValue('--colorSecundario');
        this.fontColor = getComputedStyle(document.documentElement).getPropertyValue('--colorLetra');
        this.hovercolor = getComputedStyle(document.documentElement).getPropertyValue('--hoverColor');
        this.fontMain = getComputedStyle(document.documentElement).getPropertyValue('--fontMain');
        this.fontSecond = getComputedStyle(document.documentElement).getPropertyValue('--fontSecond');
        this.priourgente = getComputedStyle(document.documentElement).getPropertyValue('--priourgente');
        this.prionormal = getComputedStyle(document.documentElement).getPropertyValue('--prionormal');
        this.priorelaxed = getComputedStyle(document.documentElement).getPropertyValue('--priorelaxed');
        this.updateActualValues();
    }

    setMainColor(event) {
        this.root.style.setProperty('--colorPrincipal', event.target.value);
        this.mainColor = event.target.value;
        this.saveToLocalStorage();
    }

    setsecColor(event) {
        this.root.style.setProperty('--colorSecundario', event.target.value);
        this.secColor = event.target.value;
        this.saveToLocalStorage();
    }

    setfontColor(event) {
        this.root.style.setProperty('--colorLetra', event.target.value);
        this.fontColor = event.target.value;
        this.saveToLocalStorage();
    }

    sethovercolor(event) {
        this.root.style.setProperty('--hoverColor', event.target.value);
        this.hovercolor = event.target.value;
        this.saveToLocalStorage();
    }

    setfontMain(event) {
        this.root.style.setProperty('--fontMain', event.target.value.replace(`'`, `\"`));
        this.fontMain = event.target.value;
        this.saveToLocalStorage();
    }

    setfontSecond(event) {
        this.root.style.setProperty('--fontSecond', event.target.value);
        this.fontSecond = event.target.value;
        this.saveToLocalStorage();
    }

    setpriourgente(event) {
        this.root.style.setProperty('--priourgente', event.target.value);
        this.priourgente = event.target.value;
        this.saveToLocalStorage();
    }

    setprionormal(event) {
        this.root.style.setProperty('--prionormal', event.target.value);
        this.prionormal = event.target.value;
        this.saveToLocalStorage();
    }

    setpriorelaxed(event) {
        this.root.style.setProperty('--priorelaxed', event.target.value);
        this.priorelaxed = event.target.value;
        this.saveToLocalStorage();
    }

    loadFromJson(dataObject) {

        this.mainColor = dataObject.mainColor
        this.secColor = dataObject.secColor
        this.fontColor = dataObject.fontColor
        this.hovercolor = dataObject.hovercolor
        this.fontMain = dataObject.fontMain
        this.fontSecond = dataObject.fontSecond
        this.priourgente = dataObject.priourgente
        this.prionormal = dataObject.prionormal
        this.priorelaxed = dataObject.priorelaxed

        this.root.style.setProperty('--colorPrincipal', dataObject.mainColor);
        this.root.style.setProperty('--colorSecundario', dataObject.secColor);
        this.root.style.setProperty('--colorLetra', dataObject.fontColor);
        this.root.style.setProperty('--hoverColor', dataObject.hovercolor);
        this.root.style.setProperty('--fontMain', dataObject.fontMain);
        this.root.style.setProperty('--fontSecond', dataObject.fontSecond);
        this.root.style.setProperty('--priourgente', dataObject.priourgente);
        this.root.style.setProperty('--prionormal', dataObject.prionormal);
        this.root.style.setProperty('--priorelaxed', dataObject.priorelaxed);


    }

}