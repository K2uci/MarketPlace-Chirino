import React from 'react'
import './MainView.css'

//
import HeaderMain from '../../components/headerMain/HeaderMain'
import DashMain from '../../components/dashMain/DashMain'

const MainView: React.FC = () => {
    return (
        <>
            <HeaderMain />
            <DashMain />
        </>
    )
}

export default MainView