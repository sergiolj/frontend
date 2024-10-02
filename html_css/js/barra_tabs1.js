<<<<<<< HEAD
function openCity(cityName){
     var i;
    var x=document.getElementsByClassName("city");
        for(i=0;i<x.length;i++){
            x[i].style.display="none";
        }
    document.getElementById(cityName).style.display="block";
=======
function abreCidade(nomeCidade){
    var i;
    var x=document.getElementsByClassName("cidade");
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    document.getElementById(nomeCidade).style.display="block";
>>>>>>> a30a9344aa5618aa40c88bf77ee3c97c8a44a65d
}