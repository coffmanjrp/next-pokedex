import styles from 'styles/loading.module.scss';

const Loading = () => {
  return (
    <>
      <div className={styles.loadingContainer}>
        <img
          src="/image/loading.png"
          alt="Loading..."
          className={styles.loading}
        />
      </div>
    </>
  );
};

export default Loading;
