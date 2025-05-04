import { Box, Paper, Typography } from '@mui/material'
import { LoginForm } from '../components/LoginForm'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/stores/slices/auth.slice'
import { useEffect } from 'react'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { status, profile, token } = useSelector((state) => state.auth)

  // Redirect if login is successful and user is admin
  useEffect(() => {
    if (status === 'created' && profile?.role === 'admin' && token) {
      navigate('/bang-dieu-khien')
    }
  }, [status, profile, token, navigate])

  const handleSubmit = (formValues) => {
    dispatch(login(formValues))
  }

  return (
    <Paper sx={{ p: 3, width: '100%' }}>
      <Typography gutterBottom variant="h4" textAlign="center" fontWeight={600}>
        Đăng nhập
      </Typography>

      <Box>
        <LoginForm onSubmit={handleSubmit} loading={status === 'loading'} />
      </Box>

      <Box sx={{ textAlign: 'right', mt: 1 }}>
        <Typography
          component={Link}
          to="/xac-thuc/dang-ky"
          sx={{ color: 'primary.main', cursor: 'pointer' }}
        >
          Chưa có tài khoản? <strong>Đăng ký</strong>
        </Typography>
      </Box>
    </Paper>
  )
}
