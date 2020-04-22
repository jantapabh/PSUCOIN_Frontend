import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #92e7d0;
    align-items: center;
    justify-content: center;
    .innerContainer{
        display: flex;
        flex-direction: column;
        width: 1000px;
        background-color: #fcf696;
        height: 100vh;
        align-items: center;
        margin-top: 20px;
       
    }
`

const TransferForm = () => {
    return (
        <StyledWrapper>
            <div className="innerContainer">

            </div>
        </StyledWrapper>
    )
}

export default TransferForm;