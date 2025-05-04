import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function SideBar({ navList, drawerWidth = 240, mobileOpen, onDrawerToggle }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const drawerContent = (
    <Box sx={{ height: '100%', bgcolor: '#1e293b', color: '#fff' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <Typography variant="h6" fontWeight={600} noWrap>
          Vải lụa Kim Tho
        </Typography>
        {isMobile && (
          <IconButton onClick={() => onDrawerToggle?.()} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        )}
      </Toolbar>

      <List>
        {navList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              sx={{
                color: 'inherit',
                '&:hover': {
                  bgcolor: '#334155', // màu hover
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      {/* Drawer */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={() => onDrawerToggle?.()}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
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
    </>
  )
}
