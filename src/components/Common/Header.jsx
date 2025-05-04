import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

export function Header({ profile, onDrawerToggle }) {
  return (
    <AppBar
      position="static"
      sx={{
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

        <Typography
          variant="h6"
          color="primary"
          fontWeight={600}
          noWrap
          sx={{ display: { md: 'none' } }}
        >
          Vải lụa Kim Tho
        </Typography>

        <Box flexGrow={1} />

        <Button
          endIcon={<Avatar sx={{ width: 40, height: 40 }} src={profile?.avatar} alt="logo" />}
        >
          <Box>
            <Typography component="div" fontWeight={600} variant="caption">
              {profile?.role}
            </Typography>
            <Typography
              component="div"
              color="textSecondary"
              variant="caption"
              textTransform="none"
            >
              {profile?.name}
            </Typography>
          </Box>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
