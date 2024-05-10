// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import UniqueVisitorCard from './UniqueVisitorCard';
import { useEffect, useState } from 'react';


// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};


// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const [data, setData] = useState({
    total_user: 0,
    total_admin: 0,
    total_video: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:4000/dashbord/total',
      {method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
      );
      const data = await res.json();
      setData({
        total_user: data.totalUsers,
        total_admin: data.totalAdmins,
        total_video: data.totalVideos,
      
      });
    } catch (error) {
      setData({
        total_user: 0,
        total_admin: 0,
        total_video: 0,
      });
      
    }
    };
    fetchData();
   
  },[]);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticEcommerce title="Total Admin number" count={data.total_admin} percentage={59.3} extra="35,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticEcommerce title="Total Users number " count={data.total_user} percentage={70.5} extra="8,900" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticEcommerce title="Total videos number " count={data.total_video} percentage={27.4} isLoss color="warning" extra="1,943" />
      </Grid>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={12}>
        <UniqueVisitorCard />
      </Grid>
     

      {/* row 3 */}
    </Grid>
  );
}
