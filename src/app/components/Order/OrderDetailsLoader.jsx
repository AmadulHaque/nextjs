import styles from './OrderDetailsLoader.module.css';

const OrderDetailsLoader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.orderInfo}>
                <div className={styles.orderId}></div>
                <div className={styles.orderDate}></div>
            </div>
            <div className={styles.statusBar}>
                <div className={styles.status}></div>
            </div>
            <div className={styles.items}>
                {[1, 2].map((_, idx) => (
                    <div className={styles.item} key={idx}>
                        <div className={styles.itemImage}></div>
                        <div className={styles.itemDetails}>
                            <div className={styles.itemTitle}></div>
                            <div className={styles.itemText}></div>
                            <div className={styles.itemText}></div>
                        </div>
                        <div className={styles.itemPrice}></div>
                        <div className={styles.itemQuantity}></div>
                        <div className={styles.itemSubtotal}></div>
                    </div>
                ))}
            </div>
            <div className={styles.summary}>
                <div className={styles.summaryRow}></div>
                <div className={styles.summaryRow}></div>
                <div className={styles.summaryRow}></div>
                <div className={styles.summaryTotal}></div>
            </div>
        </div>
    );
};

export default OrderDetailsLoader;
