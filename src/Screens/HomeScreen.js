import React from 'react'
import CurrReportsCard from '../components/Home/CurrReportsCard';
import ViewOrdersCard from '../components/Home/ViewOrdersCard';
import SideDrawer from '../components/miscellaneous/SideDrawer';

const HomeScreen = () => {
    return (
        <div style={{ width: "100%", marginBottom: "5%" }}>
            <SideDrawer />
            <CurrReportsCard />
            <ViewOrdersCard />
        </div>
    );
}
export default HomeScreen