function abreCidade(nomeCidade){
    var i;
    var x=document.getElementsByClassName("cidade");
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    document.getElementById(nomeCidade).style.display="block";
}