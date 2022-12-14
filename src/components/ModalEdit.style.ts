import styled from 'styled-components'


export const ModalEditStyle = styled.div`

  .hide{
    display: none !important;
  }

  .fadeEdit{
    width: 100%;
    height: 100%;
    position: fixed ;
    left: 0;
    top: 0;
    background-color: rgba(119, 119, 119, 0.8);


  }
  .modalEdit{
    position: fixed;
    padding: 23px 34px 29px 30px;
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 723px;
    max-height: 349px;
    z-index: 1;
    background: #FFFFFF;
    border: 1px solid #999999;


    label{
      margin-bottom: 7px;
    }

    .btn{
      display: flex;
      justify-content: end;
    }

    h2{
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      color: #000000;
      margin-bottom: 34px;
      }
    h2:first-letter{
      text-transform: capitalize;
    }
    .title{
      display: flex;
      flex-direction: column;
      margin-bottom: 7px;
      input{
      border: 1px solid #777777;
      border-radius: 4px;
      padding: 6px 0 6px 10px;

    }
      label:first-letter{
        text-transform: capitalize;
     }
      input:focus {
        outline: none;
      }
      input::placeholder{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #CCCCCC;

      }
    }
    .content{
      display: flex;
      margin-top: 20px;
      padding: 0;
      flex-direction: column;
      margin-bottom: 35px;
      label:first-letter{
        text-transform: capitalize;
      }
      textarea{

        height: 74px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding: 6px 0 6px 10px;
        display: block;
        border: 1px solid #777777;
        border-radius: 4px;
        resize: none;
        :focus {
        outline: none;
        }
        ::placeholder{
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #CCCCCC;
        }
      }

    }
  }
`
