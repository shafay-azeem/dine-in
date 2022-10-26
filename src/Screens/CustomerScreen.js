import React from 'react'
import Customer from '../components/Customer/Customer'
import SideDrawer from '../components/miscellaneous/SideDrawer'

const CustomerScreen = () => {
    return (
        <div style={{ width: "100%", marginBottom: "10%" }}>
            <SideDrawer />
            <Customer />
        </div>
    )
}

export default CustomerScreen
