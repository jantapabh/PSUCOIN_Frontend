import FormLogin from "./subsection/FormLogin"
import styled from 'styled-components'

const StyledWrapper = styled.div`
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family:'BalooPaaji2-Bold';
    .container{
        max-width:960px;
        width : 100%;
        margin: 0 auto;
    }

    header{
        width:100%;
        height:120px;
        background:#30b671;
        border-top:5px solid #3075b6;
    }

    .nav-grid{
        display:grid;
        grid-template-columns:225px 1fr;
    }
    .logo{
        margin-top:20px;
        color:#fff;
    }

    .logo h1{
        margin:0px;
        text-transform:uppercase;
    }
    .logo span{
        font-size:12px;
    }
    div.input-id-pass{
        display:grid;
        grid-template-columns:repeat(3,1fr);
    }

    .input-id-pass{
        margin:0px;
        text-transform:uppercase;
    }
   
`

const Login = () => {
    return (
        <StyledWrapper>
            <header>
                <nav>
                    <div className="container">
                        <div className="nav-grid">
                            <div className="logo">
                                <h1>Psucoin</h1>
                                <span>Cryptocurrency </span>
                            </div>
                            <div className="input-id-pass">
                                <div>
                                    <h5>Username</h5>
                                    <input />
                                </div>
                                <div>
                                    <h5>Password</h5>
                                    <input/>
                                </div>
                                <div>
                                    <button>เข้าสู่ระบบ</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </nav>
            </header>

            <div className="position-login">
                <FormLogin />
            </div>
        </StyledWrapper>
    )
}

export default Login;