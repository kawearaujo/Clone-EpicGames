// var indice = 1;
// var tabcurrent_a = "1a";
// var tabcurrent_b = "1b";

$(document).ready(function(){
    let navegador = document.getElementById("topo");
    let corpo = document.getElementById("corpo");
    
    $(".owl-carousel").owlCarousel(({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    }));



    $(window).scroll(function(){
        if(this.scrollY > 60){
            navegador.classList.add("navfixed");
            // console.log($('.topo'))
        }else{
            navegador.classList.remove("navfixed");
            // corpo.style.margimTop = '50px'
        }
    });
    
    timer();
});
function changepanel(e) {
    if(e=="rl"){
        document.getElementById("img").src='/src/assets/nascar1.jpg';
    }else 
    if(e=='ash'){
        document.getElementById("img").src='/src/assets/ash1.jpg';
    }else 
    if(e=="fi"){
        document.getElementById("img").src='/src/assets/fi1.jpg';
    }else 
    if(e=="mf"){
        document.getElementById("img").src='/src/assets/mf1.jpg';
    }else 
    if(e=="sp"){
        document.getElementById("img").src='/src/assets/sp1.jpg';
    }
}
$('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })


// var i =0;
// function move(tabcurrent_b) {
//     var elem = document.getElementById(tabcurrent_b);
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//     changepanel(elem.children[0].id)
// }

// function timer() {
//     if(indice>1){
//         // tabcurrent_a=indice+"a";
//         tabcurrent_b=indice+"b";
//     }
//     setInterval(move(tabcurrent_b), 300);
//     if(indice => 5){
//         indice=1;
//     }else{
//         indice++;
//     };
//     timer();
// }