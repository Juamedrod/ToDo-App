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
                    <option value="'Nanum Myeongjo', serif;" style="font-family: 'Nanum Myeongjo', serif;">Nanum
                        Myeongjo</option>
                    <option value="'Rampart One',serif;" style="font-family: 'Rampart One',serif;">Rampart One
                    </option>
                    <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
                        style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Segoe UI</option>
                </select>

                <select id="fontSecond">
                    <option value="">Secondary Font Selection</option>
                    <option value="'Nanum Myeongjo', serif;" style="font-family: 'Nanum Myeongjo', serif;">Nanum
                        Myeongjo</option>
                    <option value="'Rampart One',serif;" style="font-family: 'Rampart One',serif;">Rampart One
                    </option>
                    <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
                        style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Segoe UI</option>
                </select>
            </div>


            </select>
        </article>
        
        `;


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
        this.root.style.setProperty('--colorPrincipal', mainColor);
        this.mainColor = mainColor;
    }

    setsecColor(secColor) {
        this.root.style.setProperty('--colorSecundario', secColor);
        this.secColor = secColor;
    }

    setcolorLetra(fontColor) {
        this.root.style.setProperty('--colorLetra', fontColor);
        this.fontColor = fontColor;

    }

    sethovercolor(hovercolor) {
        this.root.style.setProperty('--hoverColor', hovercolor);
        this.hovercolor = hovercolor;
    }

    setfontMain(fontMain) {
        this.root.style.setProperty('--fontMain', fontMain);
        this.fontMain = fontMain;
    }

    setfontSecond(fontSecond) {
        this.root.style.setProperty('--fontSecond', fontSecond);
        this.fontSecond = fontSecond;
    }

    setpriourgente(fontSecond) {
        this.root.style.setProperty('--priourgente', priourgente);
        this.priourgente = priourgente;
    }

    setprionormal(prionormal) {
        this.root.style.setProperty('--prionormal', prionormal);
        this.prionormal = prionormal;
    }

    setpriorelaxed(priorelaxed) {
        this.root.style.setProperty('--priorelaxed', priorelaxed);
        this.priorelaxed = priorelaxed;
    }

}