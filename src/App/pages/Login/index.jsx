export const Login = () => {
    const [form, setForm] = React.useState({})
    const handleLogin = ()=> {
        loginUser(form.username, form.password)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res))
                window.location.href = '?status=home'
            })
            .catch(()=>{
                alert('invalid user credentials')
            })
        }
    
    console.log(form)
}