import * as yup from 'yup'

export const userSchema = yup.object().shape({
    FirstName : yup.string().required(),
    LastName : yup.string().required(),
    Email : yup.string().email().required(),
    Password : yup.string().required().min(6).max(10).required(),
    ConfirmPassword : yup.string().required().oneOf([yup.ref("Password"),null])
})