import { InputField } from '@/components/FormFields/InputField'
import { PasswordField } from '@/components/FormFields/PasswordField'
import { Box, Button, Divider, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Họ và tên là bắt buộc'),
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Mật khẩu là bắt buộc'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không khớp')
    .required('Vui lòng nhập lại mật khẩu'),
})

export const SignUpForm = ({ loading, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatar: '',
      role: 'admin',
      deleted: false,
      status: 'active',
    },
    resolver: yupResolver(schema),
  })

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit?.(data)
  })
  return (
    <Stack component="form" spacing={1} noValidate onSubmit={handleFormSubmit}>
      <Box>
        <InputField name="name" label="Họ và tên" control={control} />
      </Box>

      <Box>
        <InputField name="email" label="Email" control={control} />
      </Box>

      <Box>
        <PasswordField name="password" label="Mật khẩu" control={control} />
      </Box>

      <Box>
        <PasswordField name="confirmPassword" label="Nhập lại mật khẩu" control={control} />
      </Box>

      <Divider />

      <Box width="100%" pt={1}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          loading={loading}
          disabled={loading}
        >
          Đăng ký
        </Button>
      </Box>
    </Stack>
  )
}
