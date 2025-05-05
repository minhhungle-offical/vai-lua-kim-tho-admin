import CloseIcon from '@mui/icons-material/Close'
import LogoutIcon from '@mui/icons-material/Logout'
import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/images/logo.png'

export default function SideBar({
  profile,
  navList,
  pathname,
  drawerWidth = 240,
  mobileOpen,
  onDrawerToggle,
  onLogout,
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const drawerContent = (
    <Stack sx={{ height: '100%', bgcolor: '#1e293b', color: '#fff' }}>
      {/* Logo */}
      <Toolbar disableGutters sx={{ justifyContent: 'space-between', p: 2 }}>
        <Box width={60}>
          <Box
            component="img"
            src={logo}
            alt="Vải lụa Kim Tho"
            sx={{ width: '100%', borderRadius: '50%' }}
          />
        </Box>
        {isMobile && (
          <IconButton onClick={onDrawerToggle} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Navigation */}
      <List>
        {navList.map((item) => {
          const isActive = pathname === item.href
          return (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.href}
                sx={{
                  color: 'inherit',
                  bgcolor: isActive ? 'rgba(51,65,85,1)' : 'transparent',
                  fontWeight: isActive ? 600 : 'normal',
                  '&:hover': {
                    bgcolor: 'rgba(51,65,85,0.6)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 13,
                    fontWeight: isActive ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      {/* Spacer */}
      <Box flexGrow={1} />

      {/* Avatar + Logout */}
      <Box
        px={2}
        py={2}
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          backgroundColor: 'rgba(255,255,255,0.02)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 1.5,
            p: 1,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.05)',
            },
          }}
        >
          <Avatar
            src={profile?.avatar || '/default-avatar.png'}
            alt={profile?.name || 'User'}
            sx={{ width: 40, height: 40, mr: 1.5 }}
          >
            {profile?.name?.[0]?.toUpperCase() || '?'}
          </Avatar>

          <Box>
            <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>
              {profile?.role || 'Vai trò'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300' }}>
              {profile?.name || 'Tên người dùng'}
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          size="small"
          fullWidth
          onClick={onLogout}
          sx={{
            textTransform: 'none',
            borderColor: 'rgba(255,255,255,0.2)',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderColor: 'rgba(255,255,255,0.4)',
            },
          }}
        >
          Đăng xuất
        </Button>
      </Box>
    </Stack>
  )

  return (
    <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={onDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#1e293b',
            color: '#fff',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  )
}
