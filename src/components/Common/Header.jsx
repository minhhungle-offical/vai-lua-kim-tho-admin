import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export function Header({ profile, onLogout, onDrawerToggle }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    onLogout?.()
    handleMenuClose()
  }

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        display: { md: 'none' },
        bgcolor: '#fff',
        color: '#1e293b',
      }}
    >
      <Toolbar disableGutters sx={{ px: 2 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => onDrawerToggle?.()}
          sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" color="primary" fontWeight={600} noWrap>
          Vải lụa Kim Tho
        </Typography>

        <Box flexGrow={1} />

        <Tooltip title="Tài khoản">
          <IconButton onClick={handleMenuOpen} size="small" sx={{ ml: 2 }}>
            <Avatar
              src={profile?.avatar || '/default-avatar.png'}
              alt={profile?.name || 'User'}
              sx={{ width: 40, height: 40 }}
            >
              {profile?.name?.[0] || '?'}
            </Avatar>
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Box px={2} py={1} sx={{ minWidth: 150 }}>
            <Typography
              component="div"
              fontWeight={600}
              variant="caption"
              sx={{ textTransform: 'uppercase' }}
            >
              {profile?.role || 'Vai trò'}
            </Typography>
            <Typography component="div" color="text.secondary" variant="caption">
              {profile?.name || 'Tên người dùng'}
            </Typography>
          </Box>
          <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
