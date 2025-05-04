import { Container, Stack } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'

export function Auth() {
  const token = localStorage.getItem('token')

  if (token) {
    return <Navigate to="/bang-dieu-khien" />
  }

  return (
    <Container maxWidth="sm">
      <Stack justifyContent="center" alignItems="center" minHeight="100vh">
        <Routes>
          <Route index element={<Navigate to="dang-nhap" />} />
          <Route path="dang-nhap" element={<Login />} />
          <Route path="dang-ky" element={<SignUp />} />
        </Routes>
      </Stack>
    </Container>
  )
}

export default Auth
