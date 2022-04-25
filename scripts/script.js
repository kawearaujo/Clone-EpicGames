$(document).ready(function(){
    let navegador = document.getElementById("topo");
    let corpo = document.getElementById("corpo");
    $(window).scroll(function(){
        if(this.scrollY > 60){
            navegador.classList.add("navfixed");
            // console.log($('.topo'))
        }else{
            navegador.classList.remove("navfixed");
            // corpo.style.margimTop = '50px'
        }
    });
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
