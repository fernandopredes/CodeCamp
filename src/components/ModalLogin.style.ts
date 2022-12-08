import styled from 'styled-components'


export const ModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed ;
  z-index: 1;
  background-color: #DDDDDD;
  width: 100%;



  .blank{
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    padding: 28px 25px 23px 32px;

    h1{
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
    }

    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin: 30px 0 13px 0;
      }


    .flex{
      display: flex;
      flex-direction: column;
      align-items: flex-end;


      input{
        width: 444px;
        border: 1px solid #777777;
        border-radius: 4px;
        padding: 7px 0 7px 11px;
      }

      button{
        background-color: #000;
        color: #fff;
        padding: 7px 30px;
        margin-top: 27px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        &:disabled{
          opacity: 0.5;
          cursor: not-allowed;
}

      }
    }

  }
`
