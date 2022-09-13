 var abonnements = function() {
	var Jouer = document.getElementById("Jouer");
	Jouer.addEventListener("click",Lancer);
	var Générer = document.getElementById("Générer");
	Générer.addEventListener("click",Gen);
	var col1 = document.getElementById("C1");
	col1.addEventListener("click",invc1);
	var col1b = document.getElementById("C1b");
	col1b.addEventListener("click",invc1);
	var col2 = document.getElementById("C2");
	col2.addEventListener("click",invc2);
	var col2b = document.getElementById("C2b");
	col2b.addEventListener("click",invc2);
    var col3 = document.getElementById("C3");
	col3.addEventListener("click",invc3);
	var col3b = document.getElementById("C3b");
	col3b.addEventListener("click",invc3);
	var diag1 = document.getElementById("D1");
	diag1.addEventListener("click",invd1);
	var diag1b = document.getElementById("D1b");
	diag1b.addEventListener("click",invd1);
	var diag2 = document.getElementById("D2");
	diag2.addEventListener("click",invd2);
	var diag2b = document.getElementById("D2b");
	diag2b.addEventListener("click",invd2);
    var lig1 = document.getElementById("L1");
	lig1.addEventListener("click",invl1);
	var lig1b = document.getElementById("L1b");
	lig1b.addEventListener("click",invl1);
	var lig2 = document.getElementById("L2");
	lig2.addEventListener("click",invl2)
	var lig2b = document.getElementById("L2b");
	lig2b.addEventListener("click",invl2);
	var lig3 = document.getElementById("L3");
	lig3.addEventListener("click",invl3);
	var lig3b = document.getElementById("L3b");
	lig3b.addEventListener("click",invl3);
	var rein = document.getElementById("Réinitialiser");
	rein.addEventListener("click",invRein);
	var solu = document.getElementById("Solution");
	solu.addEventListener("click",sol);
}

window.addEventListener("load",abonnements);

/*pg principal
initialise la variable globale correspondant à l'état du bouton Jouer*/
var etat4 = true;
var nbin=[0,0,0,0,0,0,0,0,0];
var nbin2=[0,0,0,0,0,0,0,0,0];
var nbin3=[0,0,0,0,0,0,0,0,0];


/*quand on appuie sur le bouton Jouer*/
var Lancer = function(){
	if (etat4) {
		creationTableau();
		remplirTableau(nbin);
		Jouer.value = "Quitter"
	}
	else {
		grille.innerHTML="";
		grille2.innerHTML="";
		Jouer.value = "Jouer"
		var soluTab = document.getElementById("soluTab")
	soluTab.style.display = "none";
	}
	etat4=!etat4;
}

/*quand on appuie sur générer une grille*/
var Gen = function(){
	for (var k=0;k<=8;k++) 
	{
		nbin[k]=0
		remplirTableau(nbin);
	}
	var soluTab = document.getElementById("soluTab")
	soluTab.style.display = "none";
	for (var i = 0; i<9; i++) {
		nbin2[i] = Math.floor(Math.random() * 2 );
	}
	var A=((nbin2[0] + nbin2[8])%2);
	var B=((nbin2[2] + nbin2[6])%2);
	var C=((nbin2[1] + nbin2[3] + nbin2[5] + nbin2[7])%2);
	
	while (A !== B || B !== C){
		for (var i = 0; i<9; i++) {
			nbin2[i] = Math.floor(Math.random() * 2 );
		}
		A=((nbin2[0] + nbin2[8])%2);
		B=((nbin2[2] + nbin2[6])%2);
		C=((nbin2[1] + nbin2[3] + nbin2[5] + nbin2[7])%2)
	}
	
	creationTableau2();
	remplirTableau2(nbin2);
}	

/*quand on appuie sur le bouton Solution*/
var sol = function() 
{var tSol = [0,0,0,0,0,0,0,0];
var j = 7;
var quotient = 5;
var soluTab = document.getElementById("soluTab")
	soluTab.style.display = "block";
	for(var k=0;k<256;k++)
	{
		var kbin = k.toString(2);
		
		while (quotient!=0)
		{	
		var reste = kbin%10;
			var quotient = Math.floor(kbin/10);
			tSol[j] = reste;
			kbin = quotient;
			j= j-1
		}

		nbin3 = [0,0,0,0,0,0,0,0,0];
			if (tSol[0]==1) {invdv1()};
			if (tSol[1]==1) {invlv1()};
			if (tSol[2]==1) {invlv2()};
			if (tSol[3]==1) {invlv3()};
			if (tSol[4]==1) {invdv2()};
			if (tSol[5]==1) {invcv1()};
			if (tSol[6]==1) {invcv2()};
			if (tSol[7]==1) {invcv3()};
		
			var test=1;
			for(var m=0;m<9;m++){
			if (nbin2[m]==nbin3[m] ){b=1}else{b=0}; test=test*b
			 }
			
			var B = ["D1 ","L1 ","L2 ","L3 ","D2 ","C1 ","C2 ","C3 "];
			var sol ="Cliquez sur ";
			
			for (var i=0; i<8; i++) {
				if (tSol[i]==1) {sol+= B[i]}
			}
		if (test==1) {
			var soluTab = document.getElementById("soluTab")
			soluTab.innerHTML = sol;
		}
			
			

		/*réinitialisation*/
		quotient = 5;
		j=7;
		tSol = [0,0,0,0,0,0,0,0];
		
	}
}
	
/*quand on appuie sur C1*/
var invc1 = function() {
	if (nbin[0]==0) {nbin[0]=1 }
	else {nbin[0]=0};
	
	if (nbin[3]==0) {nbin[3]=1 }
	else {nbin[3]=0};	

	if (nbin[6]==0) {nbin[6]=1 }
	else {nbin[6]=0};
	remplirTableau(nbin);
	var test = true;
	for(var m=0;m<9;m++){
		if (nbin[m]!=nbin2[m] ){test = false}
	}
	if (test == true) {
		alert("Bien joué !")
	}
}

/*quand on appuie sur C2*/
var invc2 = function() {
	if (nbin[1]==0) {nbin[1]=1 }
	else {nbin[1]=0};
	
	if (nbin[4]==0) {nbin[4]=1 }
	else {nbin[4]=0};	

	if (nbin[7]==0) {nbin[7]=1 }
	else {nbin[7]=0};
	remplirTableau(nbin);
	var test = true;
	for(var m=0;m<9;m++){
		if (nbin[m]!=nbin2[m] ){test = false}
	}
	if (test == true) {
		alert("Bien joué !")
	}
}

/*quand on appuie sur C3*/
var invc3 = function() {
	if (nbin[2]==0) {nbin[2]=1 }
	else {nbin[2]=0};
	
	if (nbin[5]==0) {nbin[5]=1 }
	else {nbin[5]=0};	

	if (nbin[8]==0) {nbin[8]=1 }
	else {nbin[8]=0};
	remplirTableau(nbin);
	var test = true;
	for(var m=0;m<9;m++){
		if (nbin[m]!=nbin2[m] ){test = false}
	}
	if (test == true) {
		alert("Bien joué !")
	}
}

/*quand on appuie sur D1*/
var invd1 = function() {
	if (nbin[0]==0) {nbin[0]=1 }
	else {nbin[0]=0};
	
	if (nbin[4]==0) {nbin[4]=1 }
	else {nbin[4]=0};	

	if (nbin[8]==0) {nbin[8]=1 }
	else {nbin[8]=0};
	remplirTableau(nbin);
	var test = true;
	for(var m=0;m<9;m++){
		if (nbin[m]!=nbin2[m] ){test = false}
	}
	if (test == true) {
		alert("Bien joué !")
	}
}

/*quand on appuie sur D2*/
var invd2 = function() {
	if (nbin[2]==0) {nbin[2]=1 }
	else {nbin[2]=0};
	
	if (nbin[4]==0) {nbin[4]=1 }
	else {nbin[4]=0};	

	if (nbin[6]==0) {nbin[6]=1 }
	else {nbin[6]=0};
	remplirTableau(nbin);
	var test = true;
	for(var m=0;m<9;m++){
		if (nbin[m]!=nbin2[m] ){test = false}
	}
	if (test == true) {
		alert("Bien joué !")
	}
}

/*quand on appuie sur L1*/
var invl1 = function() {
	if (nbin[0]==0) {nbin[0]=1 }
	else {nbin[0]=0};
	
	if (nbin[1]==0) {nbin[1]=1 }
	else {nbin[1]=0};	

	if (nbin[2]==0) {nbin[2]=1 }
	else {nbin[2]=0};
	remplirTableau(nbin);
	var test = true;
	for(var m=0;m<9;m++){
		if (nbin[m]!=nbin2[m] ){test = false}
	}
	if (test == true) {
		alert("Bien joué !")
	}
}

/*quand on appuie sur L2*/
var invl2 = function() {
	if (nbin[3]==0) {nbin[3]=1 }
	else {nbin[3]=0};
	
	if (nbin[4]==0) {nbin[4]=1 }
	else {nbin[4]=0};	

	if (nbin[5]==0) {nbin[5]=1 }
	else {nbin[5]=0};
	remplirTableau(nbin);
	var test = true;
	for(var m=0;m<9;m++){
		if (nbin[m]!=nbin2[m] ){test = false}
	}
	if (test == true) {
		alert("Bien joué !")
	}
}

/*quand on appuie sur L3*/
var invl3 = function() {
	if (nbin[6]==0) {nbin[6]=1 }
	else {nbin[6]=0};
	
	if (nbin[7]==0) {nbin[7]=1 }
	else {nbin[7]=0};	

	if (nbin[8]==0) {nbin[8]=1 }
	else {nbin[8]=0};
	remplirTableau(nbin);
	var test = true;
	for(var m=0;m<9;m++){
		if (nbin[m]!=nbin2[m] ){test = false}
	}
	if (test == true) {
		alert("Bien joué !")
	}
}

/*quand on appuie sur Dv1*/
var invdv1 = function() {
	if (nbin3[0]==0) {nbin3[0]=1 }
	else {nbin3[0]=0};
	
	if (nbin3[4]==0) {nbin3[4]=1 }
	else {nbin3[4]=0};	
	if (nbin3[8]==0) {nbin3[8]=1 }
	else {nbin3[8]=0};
	
}

/*quand on appuie sur Lv1*/
var invlv1 = function() {
	if (nbin3[0]==0) {nbin3[0]=1 }
	else {nbin3[0]=0};
	
	if (nbin3[1]==0) {nbin3[1]=1 }
	else {nbin3[1]=0};	

	if (nbin3[2]==0) {nbin3[2]=1 }
	else {nbin3[2]=0};
}

/*quand on appuie sur Lv2*/
var invlv2 = function() {
	if (nbin3[3]==0) {nbin3[3]=1 }
	else {nbin3[3]=0};
	
	if (nbin3[4]==0) {nbin3[4]=1 }
	else {nbin3[4]=0};	

	if (nbin3[5]==0) {nbin3[5]=1 }
	else {nbin3[5]=0};
}

/*quand on appuie sur Lv3*/
var invlv3 = function() {
	if (nbin3[6]==0) {nbin3[6]=1 }
	else {nbin3[6]=0};
	
	if (nbin3[7]==0) {nbin3[7]=1 }
	else {nbin3[7]=0};	

	if (nbin3[8]==0) {nbin3[8]=1 }
	else {nbin3[8]=0};
}

/*quand on appuie sur Dv2*/
var invdv2 = function() {
	if (nbin3[2]==0) {nbin3[2]=1 }
	else {nbin3[2]=0};
	
	if (nbin3[4]==0) {nbin3[4]=1 }
	else {nbin3[4]=0};	

	if (nbin3[6]==0) {nbin3[6]=1 }
	else {nbin3[6]=0};
}


/*quand on appuie sur Cv1*/
var invcv1 = function() {
	if (nbin3[0]==0) {nbin3[0]=1 }
	else {nbin3[0]=0};
	
	if (nbin3[3]==0) {nbin3[3]=1 }
	else {nbin3[3]=0};	

	if (nbin3[6]==0) {nbin3[6]=1 }
	else {nbin3[6]=0};
}

/*quand on appuie sur Cv2*/
var invcv2 = function() {
	if (nbin3[1]==0) {nbin3[1]=1 }
	else {nbin3[1]=0};
	
	if (nbin3[4]==0) {nbin3[4]=1 }
	else {nbin3[4]=0};	

	if (nbin3[7]==0) {nbin3[7]=1 }
	else {nbin3[7]=0};
}

/*quand on appuie sur Cv3*/
var invcv3 = function() {
	if (nbin3[2]==0) {nbin3[2]=1 }
	else {nbin3[2]=0};
	
	if (nbin3[5]==0) {nbin3[5]=1 }
	else {nbin3[5]=0};	

	if (nbin3[8]==0) {nbin3[8]=1 }
	else {nbin3[8]=0};
}

/*quand on appuie sur Réinitialiser*/
var invRein = function() {
	for (var k=0;k<=8;k++) {nbin[k]=0};
	remplirTableau(nbin);
}

/*crée un tableau 3*3 (Jeu)*/
var creationTableau = function() {
	var temp="";
	var grille = document.getElementById("grille");
	for (var i=0;i<3;i++) {
		temp=temp+"<tr>";
		for (var j=0;j<3;j++){
			temp+='<td class="cellules"> </td>';
		}
		temp=temp+"</tr>";
	}
	grille.innerHTML=temp;
}

/*remplit le tableau 3*3 (Jeu)*/ 
var remplirTableau = function(nb) {
	var cellules = document.getElementsByClassName("cellules");
	for (var i=0;i<cellules.length;i++) {
		cellules[i].innerHTML='<IMG src="'+nb[i]+'.jpg">';
	}
}

/*crée un tableau 3*3 (Reprod)*/
var creationTableau2 = function() {
	var temp="";
	var grille2 = document.getElementById("grille2");
	for (var i=0;i<3;i++) {
		temp=temp+"<tr>";
		for (var j=0;j<3;j++){
			temp+='<td class="cellules2"> </td>';
		}
		temp+="</tr>";
	}
	grille2.innerHTML=temp;
}

/*remplit le tableau 3*3 (Reprod)*/ 
var remplirTableau2 = function(nb) {
	var cellules = document.getElementsByClassName("cellules2");
	for (var i=0;i<cellules.length;i++) {
		cellules[i].innerHTML='<IMG src="'+nb[i]+'.jpg">';
	}
}