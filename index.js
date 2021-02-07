function takeshot() { 
    let div = document.getElementById('photo'); 
    let blank = document.getElementById('blank'); 

     html2canvas(div).then( 
         
        function (canvas) {
            blank.classList.add("disappear");
            document.getElementById('output').appendChild(canvas); 
    }) 
} 

