/**
 * @param {HTMLDivElement} sender
 */
function ShowSongs(sender, albumIndex){
    if (sender.id == "sgtPeppers){
        open("https://music.apple.com/it/album/sgt-peppers-lonely-hearts-club-band-super-deluxe-edition/1435552131");    
    }
    sender.style.animation = "anim-album-div";
    sender.style.animationDuration = "1s";
    sender.style.animationFillMode = "forwards";
    sender.style.maxWidth = "1425px";
    var cl = document.getElementsByClassName("beatles-background-image-blur");
    for (i = 0; i < cl.length; i++){
        if (i == albumIndex){
            cl[i].style.height = "500%";
            cl[i].style.filter = "blur(70px)";
        }
    }
}
