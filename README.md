# hoverable-animation

(The animation in question was done for Simply Banh Mi, a DC restaurant that makes really good iced coffee and sandwiches)

This project provides an interface for playing animations on hover/focus. To add this to your project, just copy the files "sprite-sheet.css" and "spriteSheet.js" into your directory, and make sure to include "defer" in the html script tag, like so:

    <script defer src="spriteSheet.js"></script>

Other than that, to make this work for a particular animation, you'll need to flatten the animation into a horizontal spritesheet and include the following tag, keeping in mind to change "IMG-URL" and "NUMBER-OF-FRAMES" with the relevant info.

    <div class="sprite-sheet" style="background-image: url(  IMG-URL  ); --framecount:  NUMBER-OF-FRAMES  ;">

By default the image will be 200px by 200px with the browser's default filtering. I added "image-rendering: pixelated" to the styling on this one since it's supposed to be pixelart, but I have some other animations I've been working on that'd look more natural without it, so I left it off the CSS class for ease of reuse.
