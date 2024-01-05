
function moreTimes(){
// Récupérez la date actuelle pour Bruxelles
const brusselsTimeZone = 'Europe/Brussels';
const brusselsDate = new Date().toLocaleString('en-US', { timeZone: brusselsTimeZone, year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false  });

// Récupérez la date actuelle pour Anchorage
const anchorageTimeZone = 'America/Anchorage';
const anchorageDate = new Date().toLocaleString('en-US', { timeZone: anchorageTimeZone, year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

// Récupérez la date actuelle pour Reykjavik
const reykjavikTimeZone = 'Atlantic/Reykjavik';
const reykjavikDate = new Date().toLocaleString('en-US', { timeZone: reykjavikTimeZone, year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

// Récupérez la date actuelle pour Saint-Pétersbourg
const saintPetersburgTimeZone = 'Europe/Moscow';
const saintPetersburgDate = new Date().toLocaleString('en-US', { timeZone: saintPetersburgTimeZone, year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

// Affichez les heures dans le format souhaité
document.getElementById('p1').innerHTML = "In Brussels is " + brusselsDate;
document.getElementById('p2').innerHTML = "In Anchorage is " + anchorageDate;
document.getElementById('p3').innerHTML = "In Reykjavik is " + reykjavikDate;
document.getElementById('p4').innerHTML = "In Saint Petersburg is " + saintPetersburgDate;
}

setInterval(moreTimes, 1000);
/*
function afficherHeureVille(ville) {
    const inittemps = { timeZone: ville, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const dateLocale = new Date().toLocaleDateString("fr-FR", inittemps);
    console.log(Date et heure à ${ville}: ${dateLocale});
}


afficherHeureVille("Europe/Brussels");
afficherHeureVille("America/Anchorage");
afficherHeureVille("Atlantic/Reykjavik");
afficherHeureVille("Europe/Moscow");
*/