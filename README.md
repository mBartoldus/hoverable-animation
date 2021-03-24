# hoverable-animation

(The animation in question was done for Simply Banh Mi, a DC restaurant that makes really good iced coffee and sandwiches)

live demo: https://mbartoldus.github.io/hoverable-animation/

This project provides an interface for playing animations on hover/focus. To add this to your project, just copy the files "sprite-sheet.css" and "spriteSheet.js" into your directory, and include them in your html:

	<link rel="stylesheet" href="sprite-sheet.css">
	<script src="spriteSheet.js"></script>

Other than that, to make this work for a particular animation, you'll need to flatten the animation into a horizontal spritesheet and include the following tag, keeping in mind to change "IMG-URL" and "NUMBER-OF-FRAMES" with the relevant info.

    <sprite-sheet style="background-image: url(  IMG-URL  ); --framecount:  NUMBER-OF-FRAMES  ;"> </sprite-sheet>

By default the image will be 200px by 200px, looping for 1s, with the browser's default filtering. I added "image-rendering: pixelated" to the styling on this one since it's supposed to be pixelart, but I have some other animations I've been working on that'd look more natural without it, so I left it off the CSS class for ease of reuse.
