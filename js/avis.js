const pseudo = document.getElementById('pseudo').value.trim(); // Suppression des espaces avec trim
const commentaire = document.getElementById('commentaire').value.trim();

if (!pseudo || !commentaire) { 
    alert('Veuillez remplir tous les champs.');
    return;
}
