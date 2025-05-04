import ArticleIcon from '@mui/icons-material/Article'
import BarChartIcon from '@mui/icons-material/BarChart'
import CategoryIcon from '@mui/icons-material/Category'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import InventoryIcon from '@mui/icons-material/Inventory'
import SettingsIcon from '@mui/icons-material/Settings'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Box from '@mui/material/Box'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { Header } from '../Common/Header'
import SideBar from '../Common/SideBar'

const drawerWidth = 240

const navList = [
  { label: 'Tổng quan', href: '/admin', icon: <DashboardIcon /> },
  { label: 'Sản phẩm', href: '/admin/products', icon: <InventoryIcon /> },
  { label: 'Danh mục', href: '/admin/categories', icon: <CategoryIcon /> },
  { label: 'Đơn hàng', href: '/admin/orders', icon: <ShoppingCartIcon /> },
  { label: 'Người dùng', href: '/admin/users', icon: <GroupIcon /> },
  { label: 'Thống kê', href: '/admin/stats', icon: <BarChartIcon /> },
  { label: 'Tin tức', href: '/admin/posts', icon: <ArticleIcon /> },
  { label: 'Cài đặt', href: '/admin/settings', icon: <SettingsIcon /> },
]

export function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { token, profile } = useSelector((state) => state.auth)

  const { pathname } = useLocation()
  console.log('pathname: ', pathname)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  if (!token) {
    return <Navigate to="/xac-thuc/dang-nhap" />
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
        navList={navList}
        onDrawerToggle={handleDrawerToggle}
      />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Header onDrawerToggle={handleDrawerToggle} profile={profile} />

        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  )
}
