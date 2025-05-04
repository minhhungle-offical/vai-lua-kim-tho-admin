import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="#f9fafb"
      px={2}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: '#9ca3af', mb: 2 }} />

      <Typography variant="h3" fontWeight={700} color="text.primary" gutterBottom>
        404
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom>
        Trang không tồn tại
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={3}>
        Có thể bạn đã nhập sai đường dẫn hoặc trang đã bị xóa.
      </Typography>

      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Quay về trang chủ
      </Button>
    </Box>
  )
}
