/**
 * @param {HTMLDivElement} sender
 */
function ShowSongs(sender, albumIndex){
    sender.style.animation = "anim-album-div";
    sender.style.animationDuration = "1s";
    sender.style.animationFillMode = "forwards";
    sender.style.maxWidth = "none";
    var cl = document.getElementsByClassName("beatles-background-image-blur");
    for (i = 0; i < cl.length; i++){
        if (i == albumIndex){
            cl[i].style.height = "500%";
            cl[i].style.filter = "blur(70px)";
        }
    }
}