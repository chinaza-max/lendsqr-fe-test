import { FC, useState } from 'react';
import { FiMoreVertical, FiFilter } from 'react-icons/fi';

interface User {
  organization: string;
  username: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
}

export const UsersTable: FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  
  return (
    <div className="users-table">
      <div className="table-header">
        <div className="column">
          ORGANIZATION
          <FiFilter onClick={() => setShowFilter(!showFilter)} />
        </div>
        <div className="column">
          USERNAME
          <FiFilter onClick={() => setShowFilter(!showFilter)} />
        </div>
        {/* Add other columns similarly */}
      </div>
      
      {showFilter && (
        <div className="filter-modal">
          {/* Filter form */}
          <div className="filter-buttons">
            <button className="reset">Reset</button>
            <button className="filter">Filter</button>
          </div>
        </div>
      )}
      
      {/* Table rows */}
      <div className="table-pagination">
        <select>
          <option>10 rows</option>
          <option>25 rows</option>
          <option>50 rows</option>
        </select>
        <div className="pagination-controls">
          {/* Pagination controls */}
        </div>
      </div>
    </div>
  );
};