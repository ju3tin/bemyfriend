import React from 'react';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>User Dashboard</h1>
      {/* You can add a sidebar or other components here */}
      <div>{children}</div>
    </div>
  );
};

export default UserLayout;