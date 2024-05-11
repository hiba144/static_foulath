// assets
import { LoginOutlined, ProfileOutlined,VideoCameraAddOutlined ,VideoCameraOutlined} from '@ant-design/icons';
import { on } from 'process';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  VideoCameraAddOutlined ,
  VideoCameraOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Extra Pages',
  type: 'group',
  children: [
   
    {
      id: 'addVideo',
      title: 'Add Video',
      type: 'item',
      url: '/addVideo',
      icon:icons.VideoCameraAddOutlined ,
      target: false
    },
    {
      id: 'allVideo',
      title: 'All Video',
      type: 'item',
      url: '/allVideo',
      icon:icons.VideoCameraOutlined  ,
      target: false
    },
    {
      id: 'register1',
      title: 'Add Admin',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target:false
    },
    {
      id: 'login1',
      title: 'Logout',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: false
    }

  ]
};

export default pages;
