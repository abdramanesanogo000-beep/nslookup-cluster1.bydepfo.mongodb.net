// Utilitaire pour générer le hash bcrypt du mot de passe admin.
// Usage : node scripts/generate-admin-hash.js "VotreMotDePasseAdmin"
// Copiez la valeur hashée dans la variable d'environnement ADMIN_PASSWORD_HASH.

const bcrypt = require('bcryptjs');

const password = process.argv[2];
if (!password) {
    console.error('Usage : node scripts/generate-admin-hash.js "VotreMotDePasseAdmin"');
    process.exit(1);
}

const saltRounds = 12;
bcrypt.hash(password, saltRounds)
    .then(hash => {
        console.log('\nADMIN_PASSWORD_HASH=' + hash + '\n');
        console.log('Copiez cette valeur dans votre fichier .env et/ou dans Render.');
    })
    .catch(err => {
        console.error('Erreur lors du hashage :', err);
        process.exit(1);
    });
