function toggleCollapse(button, list){
    var list = document.getElementById(list).style;
    var button = document.getElementById(button);

    if(list.display === "block"){
        list.display = "none";
    } else {
        list.display = "block";
    }

    if(button.className === "liTop"){
        button.className = "liTop2"
    } else {
        button.className = "liTop";
    }
}

function toggleFlicker(){
    var nav = document.getElementById('projectScreen');

    if(nav.classList.contains('flicker')){
        nav.classList.remove('flicker');
    } else {
        nav.classList.add('flicker');
    }
}

function toggleButtonAnimation(){
    var arr = document.getElementsByClassName('button');
    var arr2 = document.getElementsByClassName('noButton');

    if(arr.length > 0){
        while(arr.length){
            arr[0].className = 'noButton';
        }
    } else if (arr2.length > 0){
        while(arr2.length){
            arr2[0].className = 'button';
        }
    }
}

function expandAll(){
    var arr = document.getElementsByClassName('liTop2');

    if (arr.length > 0){
        while(arr.length){
            arr[0].className = 'liTop';
        }
    }

    var arr2 = document.getElementsByName('list');

    for(var i = 0; i < arr2.length; i++){
        arr2[i].style.display = 'block';
    }
}

function collapseAll(){
    var arr = document.getElementsByClassName('liTop');

    if(arr.length){
        while(arr.length){
            arr[0].className = 'liTop2';
        }
    }

    var arr2 = document.getElementsByName('list');

    for(var i = 0; i < arr2.length; i++){
        arr2[i].style.display = 'none';
    }
}