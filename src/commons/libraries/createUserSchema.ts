import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string().required('이름을 입력해주세요.'),
  email: yup
    .string()
    .email('이메일 형식이 아닙니다.')
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .min(4, '비밀번호는 최소 4자리 이상 입력해 주세요.')
    .max(15, '비밀번호는 15자리를 넘어갈 수 없습니다.')
    .matches(/[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/, '특수문자를 포함해주세요')
    .required('비밀번호를 입력해주세요.'),
  checkpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('필수입력사항입니다'),
  college: yup.string().matches(/(.*)대학교/, '형식이 올바르지 않습니다.')
})
