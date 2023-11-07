import styles from "./SkeletonTable.module.scss"

const SkeletonTable = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.table}></div>
    </section>
  )
}

export { SkeletonTable }