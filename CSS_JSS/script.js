function solution(idbutton){
 	if (idbutton.getAttribute("id")=="solutionbutton1"){
 		var solutiontag=document.getElementById("solutiontag1");
 		var solutionbutton=document.getElementById("solutionbutton1");
 		var solutionspan=document.getElementById("solution1");
 		solutionbutton.style.width = "800px";
 		solutionbutton.style.height = "100px";
 		solutionbutton.style.left="calc(50% - 400px)";
 		solutiontag.style.display="none";
 		solutionspan.style.display="inline";
 	}else if(idbutton.getAttribute("id")=="solutionbutton2"){
 		var solutiontag=document.getElementById("solutiontag2");
 		var solutionbutton=document.getElementById("solutionbutton2");
 		var solutionspan=document.getElementById("solution2");
 		solutionbutton.style.width = "800px";
 		solutionbutton.style.height = "100px";
 		solutionbutton.style.left="calc(50% - 400px)";
 		solutiontag.style.display="none";
 		solutionspan.style.display="inline";
 	}else if(idbutton.getAttribute("id")=="solutionbutton3"){
		var solutiontag=document.getElementById("solutiontag3");
 		var solutionbutton=document.getElementById("solutionbutton3");
 		var solutionspan=document.getElementById("solution3");
 		solutionbutton.style.width = "800px";
 		solutionbutton.style.height = "100px";
 		solutionbutton.style.left="calc(50% - 400px)";
 		solutiontag.style.display="none";
 		solutionspan.style.display="inline";
	}else if(idbutton.getAttribute("id")=="solutionbutton4"){
		var solutiontag=document.getElementById("solutiontag4");
 		var solutionbutton=document.getElementById("solutionbutton4");
 		var solutionspan=document.getElementById("solution4");
 		solutionbutton.style.width = "800px";
 		solutionbutton.style.height = "100px";
 		solutionbutton.style.left="calc(50% - 400px)";
 		solutiontag.style.display="none";
 		solutionspan.style.display="inline";
	}
 }
 function help(idtext,idbutton){
	var idh = idbutton.getAttribute("id");
 	idbutton.style.display = "none" ;
 	idtext.style.display = "block";
 }
