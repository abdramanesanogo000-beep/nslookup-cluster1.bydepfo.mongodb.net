const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || 'contact@hygia-mali.com';
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://abdramanesanogo000-beep.github.io/sitehygia.github.io';

if (SENDGRID_API_KEY) {
    sgMail.setApiKey(SENDGRID_API_KEY);
}

const emailActif = !!SENDGRID_API_KEY;

function formaterPrixFCFA(montant) {
    return Number(montant).toLocaleString('fr-FR') + ' FCFA';
}

async function envoyerEmail(options) {
    if (!emailActif) {
        console.log('📧 Email non envoyé (SENDGRID_API_KEY manquant) :', options.subject);
        return { succes: false, raison: 'Clé SendGrid non configurée' };
    }

    try {
        await sgMail.send({
            from: EMAIL_FROM,
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html
        });
        console.log('✅ Email envoyé à', options.to, '-', options.subject);
        return { succes: true };
    } catch (error) {
        console.error('❌ Erreur envoi email :', error.response?.body || error.message);
        return { succes: false, raison: error.message };
    }
}

async function envoyerEmailBienvenue(utilisateur) {
    const { nom, email } = utilisateur;

    const sujet = 'Bienvenue sur Hygia — Votre compte est créé';

    const texte = `Bonjour ${nom},

Bienvenue sur Hygia, votre plateforme de matériel médical en ligne.

Votre compte a été créé avec succès. Vous pouvez dès maintenant :
- Parcourir notre catalogue de matériel médical
- Passer vos commandes en ligne
- Suivre vos commandes depuis votre espace client

Identifiant : ${email}

À très bientôt sur Hygia !
${FRONTEND_URL}`;

    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <div style="background: #185FA5; padding: 24px; text-align: center;">
                <h1 style="color: #fff; margin: 0; font-size: 24px;">Bienvenue sur Hygia</h1>
            </div>
            <div style="padding: 24px; border: 1px solid #eee; border-top: none;">
                <p>Bonjour <strong>${nom}</strong>,</p>
                <p>Votre compte Hygia a été créé avec succès.</p>
                <p>Vous pouvez dès maintenant :</p>
                <ul>
                    <li>Parcourir notre catalogue de matériel médical</li>
                    <li>Passer vos commandes en ligne</li>
                    <li>Suivre vos commandes depuis votre espace client</li>
                </ul>
                <p><strong>Identifiant :</strong> ${email}</p>
                <a href="${FRONTEND_URL}/connexion.html" style="display: inline-block; background: #185FA5; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 16px;">Se connecter</a>
            </div>
            <div style="padding: 16px; text-align: center; color: #888; font-size: 12px;">
                © 2026 Hygia — Matériel médical à Bamako
            </div>
        </div>
    `;

    return envoyerEmail({ to: email, subject: sujet, text: texte, html });
}

async function envoyerEmailRecapCommande(commande) {
    const { client, numero, articles, total, modePaiement, date } = commande;
    const email = client?.email;

    if (!email) {
        console.log('📧 Email de récap non envoyé : aucun email client.');
        return { succes: false, raison: 'Email client manquant' };
    }

    const sujet = `Votre commande Hygia ${numero} est confirmée`;

    const lignes = articles.map(a =>
        `- ${a.nom} x${a.quantite} : ${formaterPrixFCFA(a.sousTotal || a.prix * a.quantite)}`
    ).join('\n');

    const dateFormatee = new Date(date).toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const texte = `Bonjour ${client.nom},

Merci pour votre commande sur Hygia.

Commande : ${numero}
Date : ${dateFormatee}
Mode de paiement : ${modePaiement}
Total : ${formaterPrixFCFA(total)}

Détail :
${lignes}

Adresse de livraison :
${client.adresse}
Téléphone : ${client.telephone}

Votre commande est confirmée et sera traitée dans les meilleurs délais.

Suivez votre commande sur : ${FRONTEND_URL}/compte.html

À très bientôt,
L'équipe Hygia`;

    const lignesHtml = articles.map(a => `
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${a.nom}</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${a.quantite}</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${formaterPrixFCFA(a.sousTotal || a.prix * a.quantite)}</td>
        </tr>
    `).join('');

    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <div style="background: #185FA5; padding: 24px; text-align: center;">
                <h1 style="color: #fff; margin: 0; font-size: 24px;">Commande confirmée</h1>
            </div>
            <div style="padding: 24px; border: 1px solid #eee; border-top: none;">
                <p>Bonjour <strong>${client.nom}</strong>,</p>
                <p>Merci pour votre commande sur Hygia.</p>

                <div style="background: #f5f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
                    <p style="margin: 4px 0;"><strong>Commande :</strong> ${numero}</p>
                    <p style="margin: 4px 0;"><strong>Date :</strong> ${dateFormatee}</p>
                    <p style="margin: 4px 0;"><strong>Paiement :</strong> ${modePaiement}</p>
                    <p style="margin: 4px 0; font-size: 18px; color: #185FA5;"><strong>Total : ${formaterPrixFCFA(total)}</strong></p>
                </div>

                <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                    <thead>
                        <tr style="background: #f5f5f5;">
                            <th style="padding: 10px; text-align: left;">Produit</th>
                            <th style="padding: 10px; text-align: center;">Qté</th>
                            <th style="padding: 10px; text-align: right;">Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${lignesHtml}
                    </tbody>
                </table>

                <div style="margin-top: 16px;">
                    <p style="margin: 4px 0;"><strong>Adresse de livraison</strong></p>
                    <p style="margin: 4px 0;">${client.adresse}</p>
                    <p style="margin: 4px 0;"><strong>Téléphone :</strong> ${client.telephone}</p>
                </div>

                <a href="${FRONTEND_URL}/compte.html" style="display: inline-block; background: #185FA5; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 16px;">Suivre ma commande</a>
            </div>
            <div style="padding: 16px; text-align: center; color: #888; font-size: 12px;">
                © 2026 Hygia — Matériel médical à Bamako
            </div>
        </div>
    `;

    return envoyerEmail({ to: email, subject: sujet, text: texte, html });
}

module.exports = {
    envoyerEmailBienvenue,
    envoyerEmailRecapCommande,
    emailActif
};
