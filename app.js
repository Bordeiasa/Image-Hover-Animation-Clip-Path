const socials = document.querySelectorAll(".social");

socials.forEach((social) => {
    social.addEventListener("mouseover", (e) => {
        
        // To hide rest of the socials

        socials.forEach((s =>s.style.zIndex = '0'));

        // To bring the current social on top

        e.target.style.zIndex = "10"

    });
});