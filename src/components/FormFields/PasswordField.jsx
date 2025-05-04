import React, { useState } from 'react'
import { TextField, Typography, Box, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useController } from 'react-hook-form'

export const PasswordField = ({ control, name, label, ...textFieldProps }) => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    field: { onChange, onBlur, ref, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <Box mb={2}>
      {label && (
        <Typography variant="body2" fontWeight={600} mb={0.5} color="text.primary">
          {label}
        </Typography>
      )}

      <TextField
        fullWidth
        name={name}
        inputRef={ref}
        value={value ?? ''}
        onChange={onChange}
        onBlur={onBlur}
        type={showPassword ? 'text' : 'password'}
        error={invalid}
        helperText={error ? error.message : ''}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...textFieldProps}
      />
    </Box>
  )
}
