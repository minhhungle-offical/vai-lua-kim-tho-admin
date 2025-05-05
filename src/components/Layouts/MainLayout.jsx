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
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../Common/Header'
import SideBar from '../Common/SideBar'

const drawerWidth = 240

const navList = [
  { label: 'Tổng quan', href: '/bang-dieu-khien', icon: <DashboardIcon /> },
  { label: 'Danh mục', href: '/bang-dieu-khien/danh-muc', icon: <CategoryIcon /> },
  { label: 'Sản phẩm', href: '/bang-dieu-khien/san-pham', icon: <InventoryIcon /> },
  { label: 'Đơn hàng', href: '/bang-dieu-khien/don-hang', icon: <ShoppingCartIcon /> },
  { label: 'Người dùng', href: '/bang-dieu-khien/nguoi-dung', icon: <GroupIcon /> },
  { label: 'Thống kê', href: '/bang-dieu-khien/thong-ke', icon: <BarChartIcon /> },
  { label: 'Tin tức', href: '/bang-dieu-khien/tin-tu', icon: <ArticleIcon /> },
  { label: 'Cài đặt', href: '/bang-dieu-khien/cai-dat', icon: <SettingsIcon /> },
]

export function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { token, profile } = useSelector((state) => state.auth)

  const location = useLocation()
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
    navigate('/xac-thuc/dang-nhap')
  }

  if (!token) {
    return <Navigate to="/xac-thuc/dang-nhap" replace />
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar
        profile={profile}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
        navList={navList}
        onDrawerToggle={handleDrawerToggle}
        pathname={location.pathname}
        onLogout={handleLogout}
      />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Header profile={profile} onDrawerToggle={handleDrawerToggle} onLogout={handleLogout} />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  )
}
