const css = `
    <style>

        * {
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
        }

        div.holder {
            width: 200px;
            margin: 0px;
            padding: 0px;
            border-radius: 12px;
            background: #E1BEE7;
            box-shadow: 0px 0px 10px 0px #c5cad1;
        }

        img {
            margin: 0px;
            padding: 24px;
            object-fit: contain;
            width: 200px;
            height: 200px;
            border-radius: 12px;
        }

        div.buttons {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            height: 64px;
            text-align: center;
            background: #f6edf7;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
        }

        div.button {
            width: 42px;
            height: 42px;
            background: #f1daf5;
            border-radius: 50%;
        }

        div.headphone {
            background-size: contain;
            
            width: 38px;
            height: 38px;
        }

        div.left {
            background: url(assets/images/_headphones_left.svg) no-repeat;
            background-position: 2px 3px;
        }

        div.both {
            background: url(assets/images/headphones_both.svg) no-repeat;
            background-position: 2px 3px;
        }

        div.right {
            background: url(assets/images/_headphones_right.svg) no-repeat;
            background-position: 2px 3px;
        }

    </style>
`;

class SoundTile extends HTMLElement {

    get imgPath() {
        return this.getAttribute("image");
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
      }

    render() {
        this.shadowRoot.innerHTML = `
            ${css}
            <div class="holder">
                <img src=${this.imgPath}>
                <div class="buttons">
                    <div class="button">
                        <div class="headphone left"></div>
                    </div>
                    <div class="button">
                        <div class="headphone both"></div>
                    </div>
                    <div class="button">
                        <div class="headphone right"></div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("sound-tile", SoundTile);