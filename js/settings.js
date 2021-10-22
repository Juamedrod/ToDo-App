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
            this.fontSize = fontSize
        this.root = document.querySelector(':root');

    }


    setMainColor(mainColor) {
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

    setfontSize(fontSize) {
        this.root.style.setProperty('--fontSize', fontSize);
        this.fontSize = fontSize;
    }


}