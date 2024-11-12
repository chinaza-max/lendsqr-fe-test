// components/Drawer/Drawer.tsx
import React, { useState } from 'react';
import { ChevronDown, Home, Users, Shield, CreditCard, Filter, 
         Building, Package, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '../app/styles/Drawer.module.scss';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const Drawer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleDrawer = () => {
    setIsExpanded(!isExpanded);
  };

  const navSections: NavSection[] = [
    {
      title: 'CUSTOMER',
      items: [
        { label: 'Users', icon: <Users size={20} />, href: '/users' },
        { label: 'Guarantors', icon: <Shield size={20} />, href: '/guarantors' },
        { label: 'Loans', icon: <CreditCard size={20} />, href: '/loans' },
        { label: 'Decision Models', icon: <Filter size={20} />, href: '/decisions' },
      ],
    },
    {
      title: 'BUSINESSES',
      items: [
        { label: 'Organization', icon: <Building size={20} />, href: '/organization' },
        { label: 'Loan Products', icon: <Package size={20} />, href: '/products' },
      ],
    },
    {
      title: 'SETTINGS',
      items: [
        { label: 'Preferences', icon: <Settings size={20} />, href: '/preferences' },
      ],
    },
  ];

  return (
    <nav className={`${styles.drawer} ${isExpanded ? styles.expanded : styles.collapsed}`}>
      <button 
        className={styles.toggleButton}
        onClick={toggleDrawer}
        aria-label="Toggle drawer"
      >
        {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      <div className={styles.organization}>
        <div className={styles.orgSwitch}>
          <Building size={24} />
          <span className={styles.orgName}>Your Organization</span>
          <ChevronDown size={20} />
        </div>
      </div>

      <div className={styles.mainNav}>
        <a href="/dashboard" className={styles.dashboardLink}>
          <Home size={20} />
          <span>Dashboard</span>
        </a>
      </div>

      <div className={styles.sections}>
        {navSections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            {section.items.map((item, itemIndex) => (
              <a key={itemIndex} href={item.href} className={styles.navItem}>
                {item.icon}
                <span className={styles.label}>{item.label}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Drawer;