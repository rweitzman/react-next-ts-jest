//Layout.tsx src/components/Layout.tsx
import React from "react";
import styles from "../../styles/UniversalHeader.module.css"

function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div className={styles.universalHeader}>
            <nav>
                <h1>Universal Header</h1>
                {children}
            </nav>
        </div>
    )
}

export default Layout

