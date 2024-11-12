'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Drawal from '../../components/drawer';
import Content from '../../components/content';




const Dashboard: React.FC = () => {
 

  


  return (
    <div className="dashboard">
  <div className="navbar">
    <Navbar />
  </div>
  <div className="drawer">
   <Drawal />
  </div>
  <div className="content">
  <Content />
  </div>
</div>
  );
};

export default Dashboard;


/**make this adjustment reverse the order of arrangement  the section where you have the avatar   doc comes first and it is underlined .  secondly the search bar is little bit far from the logo the search icon  inside it should be move to the other end the background color inside within the icon is #39CDCC  and  the background color within the search arear is with an the text inside Search for anything  with color #545F7D  search button has a border color #213F7D */