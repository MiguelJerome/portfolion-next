import styles from "../styles/NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <>
      <main>
        <div className={styles.notFoundWrapper}>
          <p>404 | This page could not be found.</p>
        </div>
      </main>
    </>
  );
}