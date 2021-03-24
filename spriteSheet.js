class spriteSheet extends HTMLElement {
    constructor() {
        super()
        this.is_focused = false
        this.addEventListener("mouseover", this.focus_start)
        this.addEventListener("focus", this.focus_start)

        this.addEventListener("blur", this.focus_end)
        this.addEventListener("mouseleave", this.focus_end)

        this.addEventListener("animationiteration", this.finish_animation)
    }

    focus_start() {
        this.is_focused = true
        this.setAttribute("data-animate", "true")
    }
    focus_end() {
        this.is_focused = false
    }
    finish_animation() {
        if (!this.is_focused) {
            this.setAttribute("data-animate", "false")
        }
    }
}
window.customElements.define("sprite-sheet", spriteSheet)
