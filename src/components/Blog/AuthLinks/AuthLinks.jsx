import { Link } from 'react-router-dom';
import styles from './AuthLinks.module.css'
import { useState } from 'react';
import { getImageUrl } from '../../../utils';
const AuthLinks = ({className}) => {
  const [open, setOpen] = useState(false);
  const status ="authenticated"
  return (
    <>
      {status === "notauthenticated" ? (
        <Link to={"/login"}>Login</Link>
      ) : (
        <div className={styles.authLinksContainer}>
       
          <a className={`${className} ${styles.writeLink}`}>
            <Link to={"/write"}>
            {/* <img  className={styles.writeImage}src={getImageUrl("nav/write-coloured.png")} alt="Write" width={24} height={24}/> */}
            Write
            </Link>
          </a>
          <a><span>Logout</span></a>
    
        </div>
      )}
    </>
  )
}

export default AuthLinks
