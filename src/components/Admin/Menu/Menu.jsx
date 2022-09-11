import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ForestIcon from '@mui/icons-material/Forest';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {}, []);

  return (
    <Tabs value={value} aria-label="icon label tabs example">
      <NavLink to="players">
        <Tab
          icon={<AddAPhotoIcon />}
          label="Usuarios / Fotos"
          onChange={() => handleChange(0)}
        />
      </NavLink>
      <NavLink to="renewed-air">
        <Tab
          icon={<ForestIcon />}
          label="Aire Renovado"
          onChange={() => handleChange(1)}
        />
      </NavLink>
      <NavLink to="users">
        <Tab
          icon={<ManageAccountsIcon />}
          label="Usuarios"
          onChange={() => handleChange(2)}
        />
      </NavLink>
    </Tabs>
  );
};

export default AdminMenu;
