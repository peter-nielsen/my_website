function initialize(){
    jsajax();
};

function jsAjax(){
    var ajaxRequest = new XMLHttpRequest();
    console.log(ajaxRequest);
    
    ajaxRequest.onreadystatechange = function(){
        console.log(ajaxRequest.readyState);
        if (ajaxRequest.readyState == 4){
            
        }
    };
    
    
    ajaxRequest.open('GET', 'data/MegaCities.geojson', true);
    
    ajaxRequest.responseType = 'json';
    
    ajaxRequest.send();
};

function jsCallback(){
    var htmlstring = '<h3>JavaScript AJAX response text:</h3>';
    htmlstring += JSON.stringify(data);
    var p = document.createElement('p');
    p.innerHTML = htmlstring;
    document.getElementById('mydiv').appendChild(p);
};

window.onload = initialize;