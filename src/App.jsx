import { LinearProgress } from '@mui/material'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Auth = React.lazy(() => import('./features/Auth/Auth'))
const Main = React.lazy(() => import('./features/Main/Main'))
const NotFound = React.lazy(() => import('./features/NotFound/NotFound'))

function App() {
  return (
    <React.Suspense fallback={<LinearProgress />}>
      <Routes>
        <Route path="/" element={<Navigate to="xac-thuc" />} />
        <Route path="xac-thuc/*" element={<Auth />} />
        <Route path="bang-dieu-khien/*" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
