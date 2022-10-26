import React from 'react'
import InitialMenu from '../components/MenuManagement/InitialMenu'
import SideDrawer from '../components/miscellaneous/SideDrawer'

const MenuManagementScreen = () => {
    return (
        <div style={{ width: "100%", marginBottom: "10%" }}>
            <SideDrawer />
            <InitialMenu />
        </div>

    )
}

export default MenuManagementScreen
