   /* À l'aide de l'horodatage, déterminez le nombre de jours écoulés depuis votre date de naissance. Vous vous sentez déjà vieux ?
    Écrivez une fonction pour trouver le nombre de jours écoulés depuis n'importe quelle date (après 1970).*/
    
let Birthday = new Date('2001-08-06')
let Today = new Date('2023-01-05')

// Calculer les minutes et les jours passés
let secondPassed = (Today.getTime() - Birthday.getTime() / 1000 );
let minutesPassed = (Today.getTime() - Birthday.getTime()) / (1000 * 60);
let daysPassed = (Today.getTime() - Birthday.getTime()) / (1000 * 60 * 60 * 24);


// Obtenir une référence aux éléments span
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

// Mettre à jour le contenu des span avec les résultats
p1.innerHTML = ' environ ' + secondPassed + ' secondes sont passés depuis que je suis arrivé sur terre';
p2.innerHTML = minutesPassed + ' minutes sont passés depuis que je suis arrivé sur terre';
p3.innerHTML = daysPassed + ' jours sont passés depuis que je suis arrivé sur terre';



/* Calculateur */

document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputDate = document.getElementById('inputDate').value;
    const selectedDate = new Date(inputDate);

    if (!isNaN(selectedDate.getTime())) {
        const currentDate = new Date();
        const daysPassed = Math.floor((currentDate - selectedDate) / (1000 * 60 * 60 * 24));
        document.getElementById('result').textContent = `Nombre de jours depuis le ${inputDate}: ${daysPassed} jours`;
    } else {
        document.getElementById('result').textContent = 'Mauvais format de date. Veuillez respecter YYYY-MM-DD.';
    }
});