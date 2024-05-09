import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom/cjs/react-router-dom"


const Register = () => {
    return (
        <>
            <Typography variant="h4">Đăng ký tham gia với chúng tôi</Typography>
            <Typography variant="h5">Đã có tài khoản?</Typography>
            <Typography variant="h5">Đăng nhập <Link to='/login'>Tại đây</Link></Typography>

            <Button variant="contained"><Link to='/student/register'>Với tư cách học viên</Link></Button>
            <Button variant="contained"><Link to='/chef/register'>Với tư cách người bán khóa học</Link></Button>
            {/* <Link to='/chef/register'><Button variant="contained">Với tư cách người bán khóa học</Button></Link> */}
        </>
    )
}

export default Register