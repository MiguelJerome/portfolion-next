import React from 'react';
import styles from '/styles/Contact.module.css';
import ContactForm from '/components/Contact/ContactForm';
import ImageContact from '/components/Contact/ImageContact';

export default function ContactPage() {
  return (
    <>
          <main>
        <div className={styles.contactWrapper}>
        <ImageContact />
                  <p className={styles.contactTitle}>Entrer en contact</p>
        <div className={styles.contactWrapper}>
          <p className={styles.p}>
            J'aimerais avoir de vos nouvelles ! Si vous avez des questions, des commentaires ou si vous
            voulez simplement dire bonjour, n'hésitez pas à m'écrire en utilisant le formulaire de contact
            ci-dessous. Je ferai de mon mieux pour vous répondre dans les plus brefs délais.
        </p>
        </div>
        </div>
        <div className={styles.contactWrapper}>
            <h1 className={styles.title}>Contactez-moi</h1>
            <ContactForm />
          <p>Merci d'être passé! J'ai hâte d'avoir de vos nouvelles.</p>
        </div>
      </main>
    </>
  );
}
