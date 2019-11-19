window.addEventListener("load", () => {
    var p = document.getElementById('page');
    var s = document.getElementById('screenDiv');
    var t = document.getElementById('title');
    var set = document.getElementById('settings');
    var d = document.getElementById('description');

    p.classList.add("loaded");
    p.style.overflow = 'hidden';
    s.classList.add("flicker");

    if(t){
        t.classList.add("fade-in");
    }

    if(set){
        set.classList.add("fade-left");
    }

    if(d){
        d.classList.add("rush-up");
    }

});

function animatePage(){
    var p = document.getElementById('page');

    p.classList.add('animate_out');

    
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 900 );
}