class Settings {
    constructor(mainColor, secColor, fontColor, hovercolor, fontMain = "'Nanum Myeongjo', serif", fontSecond = "'Rampart One',serif", priourgente, prionormal, priorelaxed, fontSize) {

        this.mainColor = mainColor,
            this.secColor = secColor,
            this.fontColor = fontColor,
            this.hovercolor = hovercolor,
            this.fontMain = fontMain,
            this.fontSecond = fontSecond,
            this.priourgente = priourgente,
            this.prionormal = prionormal,
            this.priorelaxed = priorelaxed,
            this.root = document.querySelector(':root');

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


        mainCol.addEventListener('change', (event) => this.setMainColor(event));
        secCol.addEventListener('change', (event) => this.setsecColor(event));
        fontColor.addEventListener('change', (event) => this.setfontColor(event));
        hoverColor.addEventListener('change', (event) => this.sethovercolor(event));
        prioUrgen.addEventListener('change', (event) => this.setpriourgente(event));
        prioNormal.addEventListener('change', (event) => this.setprionormal(event));
        prioRelax.addEventListener('change', (event) => this.setpriorelaxed(event));
        fontMain.addEventListener('change', (event) => this.setfontMain(event));
        fontSecond.addEventListener('change', (event) => this.setfontSecond(event));

        this.updateActualValues();

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
        this.mainColor = getComputedStyle(document.documentElement).getPropertyValue('--colorPrincipal'),
            this.secColor = getComputedStyle(document.documentElement).getPropertyValue('--colorSecundario'),
            this.fontColor = getComputedStyle(document.documentElement).getPropertyValue('--colorLetra'),
            this.hovercolor = getComputedStyle(document.documentElement).getPropertyValue('--hoverColor'),
            this.fontMain = getComputedStyle(document.documentElement).getPropertyValue('--fontMain'),
            this.fontSecond = getComputedStyle(document.documentElement).getPropertyValue('--fontSecond'),
            this.priourgente = getComputedStyle(document.documentElement).getPropertyValue('--priourgente'),
            this.prionormal = getComputedStyle(document.documentElement).getPropertyValue('--prionormal'),
            this.priorelaxed = getComputedStyle(document.documentElement).getPropertyValue('--priorelaxed')
    }

    setMainColor(event) {
        this.root.style.setProperty('--colorPrincipal', event.target.value);
        this.mainColor = event.target.value;
    }

    setsecColor(event) {
        this.root.style.setProperty('--colorSecundario', event.target.value);
        this.secColor = event.target.value;
    }

    setfontColor(event) {
        this.root.style.setProperty('--colorLetra', event.target.value);
        this.fontColor = event.target.value;

    }

    sethovercolor(event) {
        this.root.style.setProperty('--hoverColor', event.target.value);
        this.hovercolor = event.target.value;
    }

    setfontMain(event) {
        console.log(event.target.value)
        this.root.style.setProperty('--fontMain', event.target.value.replace(`'`, `\"`));
        console.log(getComputedStyle(document.documentElement).getPropertyValue('--fontMain'));
        this.fontMain = event.target.value;
    }

    setfontSecond(event) {
        this.root.style.setProperty('--fontSecond', event.target.value);
        this.fontSecond = event.target.value;
    }

    setpriourgente(event) {
        this.root.style.setProperty('--priourgente', event.target.value);
        this.priourgente = event.target.value;
    }

    setprionormal(event) {
        this.root.style.setProperty('--prionormal', event.target.value);
        this.prionormal = event.target.value;
    }

    setpriorelaxed(event) {
        this.root.style.setProperty('--priorelaxed', event.target.value);
        this.priorelaxed = event.target.value;
    }

}