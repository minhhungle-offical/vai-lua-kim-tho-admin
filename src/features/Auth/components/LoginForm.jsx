import { InputField } from '@/components/FormFields/InputField'
import { PasswordField } from '@/components/FormFields/PasswordField'
import { Box, Button, Divider, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'

export const LoginForm = ({ loading, onSubmit }) => {
  const { control, handleSubmit } = useForm()

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit?.(data)
  })
  return (
    <Stack component="form" spacing={1} noValidate onSubmit={handleFormSubmit}>
      <Box>
        <InputField name="email" label="Email" control={control} />
      </Box>

      <Box>
        <PasswordField name="password" label="Mật khẩu" control={control} />
      </Box>

      <Divider />

      <Box width="100%" py={1}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          loading={loading}
          disabled={loading}
        >
          Đăng nhập
        </Button>
      </Box>
    </Stack>
  )
}
