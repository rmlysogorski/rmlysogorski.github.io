window.addEventListener("load", () => {
    var p = document.getElementById('page');
    var s = document.getElementById('projectScreen');
    var t = document.getElementById('projectTitle');
    var set = document.getElementById('projectSettings');
    var d = document.getElementById('projectDescriptionWrapper');
    var x = document.getElementById('backX');

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

    if(x){
        x.onclick = function(){ animatePage(); }
        setTimeout(function(){ x.classList.add('backX-in')}, 2000);
    }
});

function animatePage(){
    var p = document.getElementById('page');
    p.classList.add('animate_out');    
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 800 );
}