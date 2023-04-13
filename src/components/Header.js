import styled from 'styled-components';
import largeLogo from "../static/large-logo.png"
import smallLogo from "../static/small-logo.png"
const Header = () => {
    const HeaderWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: whitesmoke;
        color: #fff;
        height: 50px;
        border-top : 3px solid orange;



    `;
    const Logo = styled.img`
        width: 150px;
        padding-right : 40px;
        &.smallLogo{
            display : none;
        }
        @media screen and (max-width: 800px) {
            &.largeLogo {
                display : none;
            }
            &.smallLogo{
                width: 35px;
                display : block;
            }
        }
    `;
    const Menu = styled.a`
        font-size: 15px;
        padding-right: 22px;
        color : black;
        white-space: nowrap;
    
    `;
    const Input = styled.input`
        width : 300px;
        height : 30px;
        margin-right : 5px;
        border-radius : 5px;
        border : 1px solid gray;
    `
    const Button = styled.button`
        height : 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border : 1px solid #008ffc;
        margin-right : 5px;
        border-radius : 5px;
        white-space: nowrap;
        &.login{
            background-color : #bde3fc;
            color : navy;
        }
        &.signup{
            background-color : #008ffc;
            color : white;
        }


    `
    return (
        <HeaderWrapper>
            <Logo className='largeLogo' src={largeLogo} />
            <Logo className='smallLogo' src={smallLogo} />
            <Menu>About</Menu>
            <Menu>Products</Menu>
            <Menu>For Teams</Menu>
            <Input placeholder='🔍 Search...'></Input>
            <Button className='login'>Log in</Button>
            <Button className='signup'>Sign up</Button>
        </HeaderWrapper>
    )
}

export default Header