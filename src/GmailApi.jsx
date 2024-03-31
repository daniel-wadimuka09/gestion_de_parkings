import React, { useState, useEffect } from 'react';

function GmailInbox() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les e-mails depuis Gmail
    async function fetchEmails() {
      try {
        const response = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages');
        const data = await response.json();
        setEmails(data.messages);
      } catch (error) {
        console.error('Erreur lors de la récupération des e-mails : ', error);
      }
    }

    // Appel de la fonction de récupération des e-mails
    fetchEmails();
  }, []);

  return (
    <div>
      <h2>Boîte de réception Gmail</h2>
      <ul>
        {emails.map(email => (
          <li key={email.id}>
            <strong>De : </strong>{email.from}<br />
            <strong>Objet : </strong>{email.subject}<br />
            <strong>Date : </strong>{email.date}<br />
            {/* Autres détails de l'e-mail */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GmailInbox;
