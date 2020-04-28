import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";
import Profile from '../../../pages/Profile';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 94.8vh;
    background-color: white;
    align-items: center;
    justify-content: center;
    .innerContainer{
        display: flex;
        flex-direction: column;
        width: 1200px;
        background-color: #fcf696;
        height: 80vh;
        align-items: center;
        justify-content: center;
    }
    .LayoutBox{
        display: flex;
        flex-direction: row;
        background-color:white;
        justify-content: space-between;
        width: 1100px;
        height: 70vh;
        padding:20px;
        box-shadow:0 0 6px 0 rgba(0,0,0,0.2);
    }
    .LayoutProfile{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items:center;
        width:400px;
    }
    .QRcode{
        width:200px;
    }
    .DetailBox{
        display: flex;
        flex-direction: column;
        height:500px;
        justify-content: space-evenly;

    }
    .LayoutHistory{
        display: flex;
        flex-direction: column;
        align-items:center;
        width:640px;
        border-radius:20px;
        padding:12px;
        box-shadow:0 0 6px 0 rgba(0,0,0,0.2);
    }
    .DetailText{
        display: flex;
        flex-direction: row;
        padding:12px 20px;
    }
    .Boxtext1{
        display: flex;
        justify-content: flex-start;
        width:170px;
        font-weight: 700;
    }
`

const ProfileForm = (props) => {

    const [username, setUsername] = useState('');
    const [profileuser, setProfile] = useState({});
    const [key, setKey] = useState({});

    const getUser = async () => {
        const user = await Axios.get(`http://localhost:3001/users/${sessionStorage.getItem('username')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        setProfile(user.data[0])
        setKey(user.data[0].profile)
        
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <StyledWrapper>
            <div className="innerContainer">
                <div className="LayoutBox">
                    <div className="LayoutProfile">
                        <img className="QRcode" src="https://th.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img>
                        <div>{key.coin} PSUCOIN</div>
                        <div className="DetailBox">
                            <div class="alert alert-primary DetailText" role="alert"><div className="Boxtext1">รหัสนักศึกษา</div><div>{profileuser.sid}</div></div>
                            <div class="alert alert-secondary DetailText" role="alert"><div className="Boxtext1">ชื่อ</div><div>{profileuser.firstname}</div></div>
                            <div class="alert alert-success DetailText" role="alert"><div className="Boxtext1">นามสกุล</div><div>{profileuser.lastname}</div></div>
                            <div class="alert alert-danger DetailText" role="alert"><div className="Boxtext1">เลขบัตรประชาชน</div><div>{profileuser.cid}</div></div>
                            <div class="alert alert-warning" role="alert"><div className="Boxtext1">Public Key</div><div>{key.publickey}</div></div>
                            <div><button type="button" class="btn btn-info">Private Key</button></div>
                        </div>

                    </div>
                    <div className="LayoutHistory">
                        <div class="alert alert-warning" role="alert">HISTORY</div>
                        <table class="table">
                            <thead class="table-success">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Amout</th>
                                    <th scope="col">Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>6035512080</td>
                                    <td>6035512021</td>
                                    <td>10 </td>
                                    <td><button type="button" class="btn btn-light">Click</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>6035512080</td>
                                    <td>6035512100</td>
                                    <td>20 </td>
                                    <td><button type="button" class="btn btn-light">Click</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </StyledWrapper>
    )
}

export default ProfileForm;