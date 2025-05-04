import { authApi } from '@/api/authApi'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const api = authApi

const name = 'auth'
const initialState = {
  status: 'idle',
  error: null,

  token: localStorage.getItem('token') || '',
  profile: JSON.parse(localStorage.getItem('profile')),
}

export const login = createAsyncThunk(`${name}/login`, async (body, { rejectWithValue }) => {
  try {
    return await api.login(body)
  } catch (error) {
    return rejectWithValue(error)
  }
})
export const signUp = createAsyncThunk(`${name}/signUp`, async (body, { rejectWithValue }) => {
  try {
    return await api.signUp(body)
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const authSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = 'created'

        state.token = payload.token
        localStorage.setItem('token', payload.token)

        state.profile = payload.user
        localStorage.setItem('profile', JSON.stringify(payload.user))
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.status = 'failed'
        state.error = payload.message
      })

    builder
      .addCase(signUp.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.status = 'created'

        state.token = payload.token
        localStorage.setItem('token', payload.token)

        state.profile = payload.user
        localStorage.setItem('profile', JSON.stringify(payload.user))
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.status = 'failed'
        state.error = payload.message
      })
  },
})

export const { actions: authActions, reducer: authReducer } = authSlice
