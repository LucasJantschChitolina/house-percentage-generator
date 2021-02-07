function takeshot() { 
    // document.getElementById("slider").style.width = "75px";
    // document.getElementById("slider").style.height = "15px";

    let div = document.getElementById('photo'); 
    let blank = document.getElementById('blank'); 

     html2canvas(div).then( 
        function (canvas) {
            blank.classList.add("disappear");
            document.getElementById('output').appendChild(canvas); 
    }) 
} 

function updateUi(){
    let slidervalue = document.getElementById("input-percentage").value;
    
    console.log(slidervalue);

    document.getElementById("output-p").value = slidervalue;
    document.getElementById("slider").style.width = `${slidervalue}px`;
};




