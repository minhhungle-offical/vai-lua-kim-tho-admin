import { signUp } from '@/stores/slices/auth.slice'
import { Box, Paper, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SignUpForm } from '../components/SignUpForm'
import { useEffect } from 'react'

export const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { token, profile, status } = useSelector((state) => state.auth)

  useEffect(() => {
    if (status === 'created' && profile && profile.role === 'admin' && token) {
      navigate('/bang-dieu-khien')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, profile, token])

  const handleSubmit = (formValues) => {
    dispatch(signUp(formValues))
  }

  return (
    <Paper sx={{ p: 3, width: '100%' }}>
      <Typography gutterBottom variant="h4" textAlign="center" fontWeight={600}>
        Đăng ký
      </Typography>

      <Box>
        <SignUpForm onSubmit={handleSubmit} loading={status === 'loading'} />
      </Box>

      <Box sx={{ textAlign: 'right', mt: 1 }}>
        <Typography
          component={Link}
          to="/xac-thuc/dang-nhap"
          sx={{ color: 'primary.main', cursor: 'pointer' }}
        >
          Đã có tài khoản. <strong>Đăng nhập</strong>
        </Typography>
      </Box>
    </Paper>
  )
}
