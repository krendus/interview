import React, { useState } from 'react'
import BottomNav from '../components/dashboard/BottomNav'
import ItemList from '../components/dashboard/ItemList'
import Navbar from '../components/dashboard/Navbar'

const Dashboard = () => {
  const [search, setSearch] = useState('')
    return (
        <div style={{background: '#EFF3F8'}}>
          <Navbar setSearched={setSearch} searched={search}/>
          <BottomNav search={search}/>
          <ItemList />
        </div>
    )
}

export default Dashboard
