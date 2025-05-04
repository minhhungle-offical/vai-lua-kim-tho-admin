import React from 'react'
import { TextField, Typography, Box } from '@mui/material'
import { useController } from 'react-hook-form'

export const InputField = ({ control, name, label, ...props }) => {
  const {
    field: { onChange, onBlur, ref, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })

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
        error={invalid}
        helperText={error ? error.message : ''}
        {...props}
      />
    </Box>
  )
}
