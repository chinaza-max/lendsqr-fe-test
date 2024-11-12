import React, { useState,  useEffect, useRef} from 'react';
import { FaSearch, FaBell, FaUserCircle, FaChevronDown, FaSearchPlus } from 'react-icons/fa';
import styles from '../app/styles/Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  //const searchInputRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const toggleSearchVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const removerSearchVisibility = () => {
    setIsVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        removerSearchVisibility();
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }

    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);


  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>

        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Logo" />
          </div>

          <div className={styles.searchBar}>
            <input type="text" placeholder="Search for anything" />
            <div className={styles.searchIcon}>
              <FaSearch />
            </div>   
          </div>
        </div>

        <div className={styles.rightSection}>
          <a href="/docs" className={styles.docsLink}>
            Docs
          </a>
          <div   onClick={toggleSearchVisibility} className={styles.searchIcon2}>
            <FaSearch/>
          </div>
          <div className={styles.notification}>
            <FaBell />
          </div>
          <div className={styles.avatar}>
            <img src="/avatar.png" alt="Logo" />
            {
              isMenuOpen && (
            <div ref={menuRef}  className={styles.Menu}>
              <ul>
                <li >
                  <a href="#notification">Notification</a>
                </li>
                <li >
                  <a href="#doc" >Doc</a>
                </li>
              </ul>
            </div>
              )
            }
          </div>

          <FaChevronDown onClick={toggleMenu} className={styles.dropdownIcon} />


          <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <FaChevronDown className={styles.dropdownIcon} />
          </div>
        </div>

      </div>


     

      {isVisible ? <div className={styles.searchBar2}>
       <input           
          ref={searchInputRef}
          type="text" 
          placeholder="Search for anything"
        />

       <div className={styles.searchIcon2}>
         <FaSearch />
       </div>   
      </div>  : 
      ''}


       

      
    </nav>
  );
};

export default Navbar;