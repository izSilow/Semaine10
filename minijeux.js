var $bouton = document.getElementById("myBouton");

var $score = document.getElementById("score");

var $multiplicateurCont = document.getElementById("multiplicateurCont");
var $achatMultiplicateur = document.getElementById("achatMultiplicateur");
var $affPrixMultiplicateur = document.getElementById("prixDuMultiplicateur");

var $superMultiplicateurCont = document.getElementById("superMultiplicateurCont");
var $achatSuperMultiplicateur = document.getElementById("achatSuperMultiplicateur");
var $affPrixSuperMultiplicateur = document.getElementById("prixDuSuperMultiplicateur");

var $achatAutoclicker = document.getElementById("achatAutoclicker");
var $affPrixAutoclicker = document.getElementById("prixAutoclicker");
var $autoclickerCont = document.getElementById("autoclickerCont");

var scoreTotal = 0;
var nbMultiplicateur = 1;
var nbSuperMultiplicateur = 0;
var nbAutoclicker = 0;

var valPrixAutoclicker = 1000;
var valPrixMultiplicateur = 10;
var valPrixSuperMultiplicateur = 15000;

// Action du bouton Principal
function point() {
	scoreTotal = scoreTotal + nbMultiplicateur + nbSuperMultiplicateur*100;
	afficherLeScore();
}

// Barre supèrieure
	//Affichages
function afficherLeScore() {
	$score.innerHTML = "Score : " + scoreTotal;
}

function afficherNbMultiplicateur() {
	$multiplicateurCont.innerHTML = "Multiplicateur x " + nbMultiplicateur;
}

function afficherNbSuperMultiplicateur() {
	$superMultiplicateurCont.innerHTML = "Super Multiplicateur x " + nbSuperMultiplicateur;
}

function afficherNbAutoclicker() {
	$autoclickerCont.innerHTML = "Autoclicker x " + nbAutoclicker;
} 

//Magasin
	//Affichage des prix
function afficherPrixDuMultiplicateur() {
	$affPrixMultiplicateur.innerHTML = "Prix Multiplicateur : " + valPrixMultiplicateur;
}

function afficherPrixDuSuperMultiplicateur() {
	$affPrixSuperMultiplicateur.innerHTML = "Prix Multiplicateur : " + valPrixSuperMultiplicateur;
}

function afficherPrixAutoclicker() {
	$affPrixAutoclicker.innerHTML = "Prix Autoclicker : " + valPrixAutoclicker;
}

	//Achats - Action des boutons
function achatMultiplicateur() {
	if ( scoreTotal >= valPrixMultiplicateur ) {
		scoreTotal = scoreTotal - valPrixMultiplicateur ;
		nbMultiplicateur = nbMultiplicateur + 1 ;
		valPrixMultiplicateur = valPrixMultiplicateur * 2;
	}

	else {
		alert("Pas Assez de points !! Il en faut " + valPrixMultiplicateur + " !")
	}
	afficherLeScore();
	afficherNbMultiplicateur();
	afficherPrixDuMultiplicateur();
}

function achatSuperMultiplicateur() {
	if ( scoreTotal >= valPrixSuperMultiplicateur ) {
		scoreTotal = scoreTotal - valPrixSuperMultiplicateur ;
		nbSuperMultiplicateur = nbSuperMultiplicateur + 1 ;
		valPrixSuperMultiplicateur = valPrixSuperMultiplicateur * 2;
	}

	else {
		alert("Pas Assez de points !! Il en faut " + valPrixSuperMultiplicateur + " !")
	}
	afficherLeScore();
	afficherNbSuperMultiplicateur();
	afficherPrixDuSuperMultiplicateur();
}

function achatAutoclicker() {
	if ( scoreTotal >= valPrixAutoclicker ) {
		scoreTotal = scoreTotal - valPrixAutoclicker ;
		nbAutoclicker = nbAutoclicker + 1 ;
		valPrixAutoclicker = valPrixAutoclicker * 5;
	}

	else {
		alert("Pas Assez de points !! Il en faut " + valPrixAutoclicker + " !")
	}
	afficherLeScore();
	afficherNbAutoclicker();
	afficherPrixAutoclicker();
}
//Actions en tache de fond

function autoclicker() {
	for (i=0; i<nbAutoclicker; i++) {
		point()
	}
}

//Actions
$bouton.onclick = point;
$achatMultiplicateur.onclick = achatMultiplicateur;
$achatSuperMultiplicateur.onclick = achatSuperMultiplicateur;
$achatAutoclicker.onclick = achatAutoclicker;

afficherLeScore();
afficherNbMultiplicateur();
afficherNbSuperMultiplicateur();
afficherNbAutoclicker();
afficherPrixDuMultiplicateur();
afficherPrixDuSuperMultiplicateur();
afficherPrixAutoclicker();

setInterval(autoclicker, 1000);