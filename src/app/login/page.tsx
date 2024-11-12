'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/LoginScreen.module.scss';
import { useRouter } from 'next/navigation';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageSection}>
        <div className={styles.imageLogo}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className={styles.logoImage}
          />
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/sampleimage.png"
            alt="Hero"
            width={600}
            height={337.57}
            priority
            className={styles.responsiveImage}
          />
        </div>
      </div>
      <div className={styles.formSection}>

        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className={styles.logoImage}
          />
        </div>

        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.welcomeText}>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <a href="#">FORGOT PASSWORD? <span>?</span></a>
          </div>
          <button 

            onClick={()=> router.push('/profile')}
          type="submit" className={styles.submitButton}>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;

/**i need a nice design for a dashboard  fix nav bar, at the left of the nav logo   next search bar with search icon in it carry a color(#39CDCC) , towards the other end of the nav bar we  name and a drop down arrow  next is an avatar   next notification  then a link called doc  color of nav bar white with a drop shadow box-shadow: 3px 0px 20px 0px #0000000A;  hight 100px  on desktop.  by the right side we have a draw white background . content of drawal is   first part a name with icon say switch organization with a drop down array     below is dashoard with icon   below is divided into   CUSTOMER    BUSINESSES    SETTINGS.   under CUSTOMER      we have this links with icon by the side Users Guarantors  Loans  Decision Models  Savings  Loan Requests  Whitelist  Karma     under BUSINESSES Organization LoanProducts    Under SETTINGS  we have Preferences .  in the body of the User we have a  Label Users   next is the Card  having this icon at the top next is Label Next is a number  i have 4 of this card .   after this card we have a table 6 column ORGANIZATION USERNAME EMAIL  STATUS (Inactive Pending Active)  Blacklisted )  with different color like a chip ETC  with a filter by the side when you click on the filter you can see all the column name and apply the filter  witha reset button and filter button.  below is pagination and number of pages to show  by side of each row we have a 3 dot  when you click on it you have this action  view details ,black list User , activate User.  in Next js using typescript and   scss only mobile responsive too

 */