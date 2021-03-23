; (() => {
    function makeSpriteSheet(sprite) {
        var is_focused = false

        function focus_start() {
            is_focused = true
            this.setAttribute("data-animate", "true")
        }

        function focus_end() {
            is_focused = false
        }

        function finish_animation() {
            if (!is_focused) {
                this.setAttribute("data-animate", "false")
            }
        }

        console.log("hi")

        sprite.addEventListener("mouseover", focus_start)
        sprite.addEventListener("focus", focus_start)

        sprite.addEventListener("blur", focus_end)
        sprite.addEventListener("mouseleave", focus_end)

        sprite.addEventListener("animationiteration", finish_animation)
    }

    for (let sprite of document.getElementsByClassName("sprite-sheet")) {
        makeSpriteSheet(sprite)
    }
})()