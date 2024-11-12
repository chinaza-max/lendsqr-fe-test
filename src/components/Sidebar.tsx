import { FC } from 'react';
import { 
  FiUsers, 
  FiDatabase, 
  FiSettings,
  FiBriefcase,
  FiRefreshCcw,
  FiChevronDown
} from 'react-icons/fi';

export const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__organization">
        <FiBriefcase />
        <span>Switch Organization</span>
        <FiChevronDown />
      </div>
      
      <div className="sidebar__dashboard">
        <FiDatabase />
        <span>Dashboard</span>
      </div>

      <div className="sidebar__section">
        <h3>CUSTOMERS</h3>
        <ul>
          <li className="active">
            <FiUsers />
            <span>Users</span>
          </li>
          <li>
            <FiUsers />
            <span>Guarantors</span>
          </li>
          <li>
            <FiDatabase />
            <span>Loans</span>
          </li>
          <li>
            <FiSettings />
            <span>Decision Models</span>
          </li>
        </ul>
      </div>

      <div className="sidebar__section">
        <h3>BUSINESSES</h3>
        <ul>
          <li>
            <FiBriefcase />
            <span>Organization</span>
          </li>
          <li>
            <FiDatabase />
            <span>Loan Products</span>
          </li>
        </ul>
      </div>

      <div className="sidebar__section">
        <h3>SETTINGS</h3>
        <ul>
          <li>
            <FiSettings />
            <span>Preferences</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};