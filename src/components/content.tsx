import React, { useState } from 'react';
import { 
  Users, 
  Filter, 
  MoreVertical, 
  Eye, 
  UserX, 
  UserCheck,
  ChevronLeft,
  ChevronRight,
  Users as UsersIcon,
  UserPlus,
  Users as ActiveUsers,
  UserMinus
} from 'lucide-react';
import styles from '../app/styles/content.module.scss';

interface User {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
}

const AdminDashboard: React.FC = () => {
 
  return (
    <div >
        chinaza
    </div>
  );
};

export default AdminDashboard;