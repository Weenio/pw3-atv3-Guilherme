import { Outlet,Link } from 'react-router-dom';
import styles from './NavBar.module.css'

export default function NavBar(){
    return(
        <div>
            <div className={styles.navBarStyle}>
                <ul className={styles.list}>
                    <li className={styles.item} >
                        <Link className={styles.navItem} to="/">Home</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.navItem} to="/Get">Getting a resource</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.navItem} to="/List">Listing all resources</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.navItem} to="/Create">Creating a resource</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.navItem} to="/Update">Updating a resource</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.navItem} to="/Delete">Deleting a resource</Link>
                    </li>
                </ul>
            </div>

            <Outlet/>
        </div>
    )
}