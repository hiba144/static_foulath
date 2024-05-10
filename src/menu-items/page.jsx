// assets
import { LoginOutlined, ProfileOutlined,VideoCameraAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  VideoCameraAddOutlined 
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Logout',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'addVideo',
      title: 'Add Video',
      type: 'item',
      url: '/addVideo',
      icon:icons.VideoCameraAddOutlined ,
      target: false
    },
    {
      id: 'register1',
      title: 'Add Admin',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    }

  ]
};

export default pages;
