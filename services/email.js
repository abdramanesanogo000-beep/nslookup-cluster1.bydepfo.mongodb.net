const { Resend } = require('resend');

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || 'Hygia <onboarding@resend.dev>';
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://abdramanesanogo000-beep.github.io/sitehygia.github.io';

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const emailActif = !!RESEND_API_KEY;

function formaterPrixFCFA(montant) {
    return Number(montant).toLocaleString('fr-FR') + ' FCFA';
}

async function envoyerEmail(options) {
    if (!emailActif) {
        console.log('📧 Email non envoyé (RESEND_API_KEY manquant) :', options.subject);
        return { succes: false, raison: 'Clé Resend non configurée' };
    }

    try {
        const { error } = await resend.emails.send({
            from: EMAIL_FROM,
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html
        });

        if (error) {
            console.error('❌ Erreur envoi email Resend :', error);
            return { succes: false, raison: error.message };
        }

        console.log('✅ Email envoyé à', options.to, '-', options.subject);
        return { succes: true };
    } catch (error) {
        console.error('❌ Erreur envoi email :', error.message);
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
    const { client, numero, articles, total, modePaiement, date, statut } = commande;
    const email = client?.email;

    if (!email) {
        console.log('📧 Email de récap non envoyé : aucun email client.');
        return { succes: false, raison: 'Email client manquant' };
    }

    const sujet = `Reçu de commande Hygia — ${numero}`;

    const dateFormatee = new Date(date).toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const lignes = articles.map(a =>
        `- ${a.nom} x${a.quantite} : ${formaterPrixFCFA(a.sousTotal || a.prix * a.quantite)}`
    ).join('\n');

    const texte = `Bonjour ${client.nom},

Merci pour votre commande sur Hygia. Voici votre reçu.

=== RECU DE COMMANDE ===
Numéro    : ${numero}
Date      : ${dateFormatee}
Paiement  : ${modePaiement}
Statut    : ${statut || 'En attente'}

Articles :
${lignes}

TOTAL : ${formaterPrixFCFA(total)}

Livraison :
${client.adresse}
Tél : ${client.telephone}

Votre commande sera traitée dans les meilleurs délais.
Suivi : ${FRONTEND_URL}/compte.html

L'équipe Hygia`;

    const lignesHtml = articles.map(a => `
        <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #e8eef5;font-size:14px;">${a.nom}</td>
            <td style="padding:10px 12px;border-bottom:1px solid #e8eef5;text-align:center;font-size:14px;">${a.quantite}</td>
            <td style="padding:10px 12px;border-bottom:1px solid #e8eef5;text-align:right;font-size:14px;font-weight:600;color:#185FA5;">${formaterPrixFCFA(a.sousTotal || a.prix * a.quantite)}</td>
        </tr>
    `).join('');

    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Reçu ${numero}</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
<div style="max-width:620px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">

  <!-- En-tête -->
  <div style="background:linear-gradient(135deg,#185FA5,#0e3d6e);padding:32px 28px;text-align:center;">
    <div style="font-size:32px;font-weight:900;color:#fff;letter-spacing:2px;margin-bottom:4px;">HYGIA</div>
    <div style="color:#a8d0f7;font-size:13px;letter-spacing:1px;">MATÉRIEL MÉDICAL PROFESSIONNEL — BAMAKO</div>
    <div style="margin-top:20px;background:rgba(255,255,255,0.15);border-radius:8px;padding:12px 20px;display:inline-block;">
      <div style="color:#fff;font-size:11px;letter-spacing:1px;margin-bottom:4px;">REÇU DE COMMANDE</div>
      <div style="color:#fff;font-size:22px;font-weight:700;letter-spacing:2px;">${numero}</div>
    </div>
  </div>

  <!-- Infos commande -->
  <div style="padding:24px 28px;background:#f8fbff;border-bottom:1px solid #e8eef5;">
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:6px 0;font-size:13px;color:#666;">Date</td>
        <td style="padding:6px 0;font-size:13px;color:#222;text-align:right;font-weight:600;">${dateFormatee}</td>
      </tr>
      <tr>
        <td style="padding:6px 0;font-size:13px;color:#666;">Mode de paiement</td>
        <td style="padding:6px 0;font-size:13px;color:#222;text-align:right;font-weight:600;">${modePaiement}</td>
      </tr>
      <tr>
        <td style="padding:6px 0;font-size:13px;color:#666;">Statut</td>
        <td style="padding:6px 0;text-align:right;">
          <span style="background:#fff3cd;color:#856404;font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px;">${statut || 'En attente'}</span>
        </td>
      </tr>
    </table>
  </div>

  <!-- Corps -->
  <div style="padding:28px;">
    <p style="margin:0 0 8px;font-size:15px;color:#333;">Bonjour <strong>${client.nom}</strong>,</p>
    <p style="margin:0 0 24px;font-size:14px;color:#555;">Merci pour votre commande sur <strong>Hygia</strong>. Voici votre reçu détaillé.</p>

    <!-- Articles -->
    <div style="font-size:12px;font-weight:700;color:#185FA5;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">Articles commandés</div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e8eef5;border-radius:8px;overflow:hidden;">
      <thead>
        <tr style="background:#185FA5;">
          <th style="padding:10px 12px;text-align:left;font-size:12px;color:#fff;font-weight:600;">Produit</th>
          <th style="padding:10px 12px;text-align:center;font-size:12px;color:#fff;font-weight:600;">Qté</th>
          <th style="padding:10px 12px;text-align:right;font-size:12px;color:#fff;font-weight:600;">Montant</th>
        </tr>
      </thead>
      <tbody>
        ${lignesHtml}
      </tbody>
    </table>

    <!-- Total -->
    <div style="margin-top:16px;background:#185FA5;border-radius:8px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">
      <span style="color:#a8d0f7;font-size:14px;font-weight:600;">TOTAL À PAYER</span>
      <span style="color:#fff;font-size:22px;font-weight:800;">${formaterPrixFCFA(total)}</span>
    </div>

    <!-- Livraison -->
    <div style="margin-top:24px;border:1px solid #e8eef5;border-radius:8px;padding:16px;">
      <div style="font-size:12px;font-weight:700;color:#185FA5;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;">Adresse de livraison</div>
      <p style="margin:4px 0;font-size:14px;color:#333;"><strong>${client.nom}</strong></p>
      <p style="margin:4px 0;font-size:14px;color:#555;">${client.adresse}</p>
      <p style="margin:4px 0;font-size:14px;color:#555;">📞 ${client.telephone}</p>
      ${client.email ? `<p style="margin:4px 0;font-size:14px;color:#555;">✉️ ${client.email}</p>` : ''}
    </div>

    <!-- Bouton -->
    <div style="text-align:center;margin-top:28px;">
      <a href="${FRONTEND_URL}/compte.html" style="display:inline-block;background:#185FA5;color:#fff;padding:14px 32px;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;">Suivre ma commande →</a>
    </div>
  </div>

  <!-- Pied de page -->
  <div style="background:#f0f4f8;padding:20px 28px;text-align:center;border-top:1px solid #e8eef5;">
    <p style="margin:0;font-size:12px;color:#888;">Ce reçu est généré automatiquement par <strong>Hygia</strong>.</p>
    <p style="margin:6px 0 0;font-size:12px;color:#aaa;">© ${new Date().getFullYear()} Hygia — Matériel médical professionnel à Bamako, Mali</p>
  </div>

</div>
</body>
</html>`;

    return envoyerEmail({ to: email, subject: sujet, text: texte, html });
}

async function envoyerEmailReinitialisationMotDePasse(email, nom, token) {
    const lien = `${FRONTEND_URL}/reinitialiser-mot-de-passe.html?token=${token}`;

    const sujet = 'Réinitialisation de votre mot de passe — Hygia';

    const texte = `Bonjour ${nom},

Vous avez demandé à réinitialiser votre mot de passe Hygia.

Cliquez sur ce lien pour choisir un nouveau mot de passe :
${lien}

Ce lien est valable 1 heure. Passé ce délai, vous devrez refaire une demande.

Si vous n'avez pas fait cette demande, ignorez cet email.

L'équipe Hygia`;

    const html = `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Réinitialisation mot de passe</title></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
<div style="max-width:560px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">

  <div style="background:linear-gradient(135deg,#185FA5,#0e3d6e);padding:30px 28px;text-align:center;">
    <div style="font-size:30px;font-weight:900;color:#fff;letter-spacing:2px;">HYGIA</div>
    <div style="color:#a8d0f7;font-size:12px;margin-top:4px;">MATÉRIEL MÉDICAL PROFESSIONNEL — BAMAKO</div>
  </div>

  <div style="padding:32px 28px;">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:44px;">🔐</div>
      <h2 style="color:#185FA5;margin:10px 0 4px;font-size:20px;">Réinitialisation du mot de passe</h2>
    </div>

    <p style="font-size:14px;color:#333;margin:0 0 16px;">Bonjour <strong>${nom}</strong>,</p>
    <p style="font-size:14px;color:#555;margin:0 0 28px;">Vous avez demandé à réinitialiser votre mot de passe. Cliquez sur le bouton ci-dessous pour en choisir un nouveau.</p>

    <div style="text-align:center;margin-bottom:28px;">
      <a href="${lien}" style="display:inline-block;background:#185FA5;color:#fff;padding:14px 36px;text-decoration:none;border-radius:8px;font-size:15px;font-weight:700;">Réinitialiser mon mot de passe →</a>
    </div>

    <div style="background:#fff8e1;border:1px solid #ffe082;border-radius:8px;padding:14px 16px;margin-bottom:20px;">
      <p style="margin:0;font-size:12px;color:#856404;">⏱ Ce lien est valable <strong>1 heure</strong> seulement. Passé ce délai, vous devrez refaire une demande.</p>
    </div>

    <p style="font-size:12px;color:#aaa;margin:0;text-align:center;">Si vous n'avez pas demandé cette réinitialisation, ignorez simplement cet email.</p>
  </div>

  <div style="background:#f0f4f8;padding:18px 28px;text-align:center;border-top:1px solid #e8eef5;">
    <p style="margin:0;font-size:11px;color:#888;">© ${new Date().getFullYear()} Hygia — Matériel médical professionnel à Bamako, Mali</p>
  </div>

</div>
</body>
</html>`;

    return envoyerEmail({ to: email, subject: sujet, text: texte, html });
}

async function envoyerEmailNotificationStatutCommande(commande, ancienStatut) {
    const { nom, email } = commande.client || {};
    if (!email) return { succes: false, raison: 'Email client manquant' };

    const sujet = `Votre commande ${commande.numero} est ${commande.statut} — Hygia`;

    const texte = `Bonjour ${nom || 'client'},

Votre commande ${commande.numero} a évolué.

Ancien statut : ${ancienStatut || 'Nouvelle'}
Nouveau statut : ${commande.statut}
Total : ${formaterPrixFCFA(commande.total)}

Vous pouvez consulter vos commandes ici :
${FRONTEND_URL}/compte.html

L'équipe Hygia`;

    const html = `<!DOCTYPE html>
<html lang='fr'>
<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Statut commande</title></head>
<body style='margin:0;padding:0;background:#f0f4f8;font-family: Segoe UI, Arial, sans-serif;'>
<div style='max-width:560px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);'>
  <div style='background:linear-gradient(135deg,#185FA5,#0e3d6e);padding:30px 28px;text-align:center;'>
    <div style='font-size:30px;font-weight:900;color:#fff;letter-spacing:2px;'>HYGIA</div>
    <div style='color:#a8d0f7;font-size:12px;margin-top:4px;'>MATÉRIEL MÉDICAL PROFESSIONNEL — BAMAKO</div>
  </div>
  <div style='padding:32px 28px;'>
    <h2 style='color:#185FA5;margin:0 0 20px;font-size:20px;'>Mise à jour de votre commande</h2>
    <p style='font-size:14px;color:#333;'>Bonjour <strong>${nom || 'client'}</strong>,</p>
    <p style='font-size:14px;color:#555;'>Votre commande <strong>${commande.numero}</strong> a changé de statut.</p>
    <div style='background:#f0f4f8;border-radius:8px;padding:16px;margin:20px 0;'>
      <p style='margin:0 0 8px;font-size:14px;'><strong>Ancien statut :</strong> ${ancienStatut || 'Nouvelle'}</p>
      <p style='margin:0;font-size:14px;'><strong>Nouveau statut :</strong> ${commande.statut}</p>
      <p style='margin:8px 0 0;font-size:14px;'><strong>Total :</strong> ${formaterPrixFCFA(commande.total)}</p>
    </div>
    <div style='text-align:center;margin:28px 0;'>
      <a href='${FRONTEND_URL}/compte.html' style='display:inline-block;background:#185FA5;color:#fff;padding:12px 24px;text-decoration:none;border-radius:8px;font-weight:700;'>Voir mes commandes →</a>
    </div>
  </div>
  <div style='background:#f0f4f8;padding:18px 28px;text-align:center;border-top:1px solid #e8eef5;'>
    <p style='margin:0;font-size:11px;color:#888;'>© ${new Date().getFullYear()} Hygia — Matériel médical professionnel à Bamako, Mali</p>
  </div>
</div>
</body>
</html>`;

    return envoyerEmail({ to: email, subject: sujet, text: texte, html });
}

module.exports = {
    envoyerEmailBienvenue,
    envoyerEmailRecapCommande,
    envoyerEmailReinitialisationMotDePasse,
    envoyerEmailNotificationStatutCommande,
    emailActif
};
