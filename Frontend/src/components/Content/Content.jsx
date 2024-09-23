import React from 'react';
import styles from './Content.module.css';

const Content = ({ children,shouldWrap }) => {
        return shouldWrap ? <div className={styles.mainContainer}>{children}</div> : <>{children}</>;
}

export default Content;
