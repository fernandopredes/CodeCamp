import styled from 'styled-components'


export const PostStyle = styled.div`
max-width: 725px;
border: 1px solid #999999;
margin: 0 auto 44px auto;

h2{
  margin-bottom: 34px;
}

label{
  display: block;
  margin-bottom: 19px;
  p{
    margin: 0 0 7px 0;
  }
  input{
    width: 98%;
    max-height: 28px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: block;
    border: 1px solid #777777;
    border-radius: 4px;
    padding: 6px 0 6px 10px;
    :focus {
    outline: none;
    }
  }

  textarea{
    width: 98%;
    max-height: 74px;
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
  }
}
.btn{
  display: flex;
  justify-content: end;
}

button{
  margin-top: 16px;

}

.container{
  padding: 23px 34px 29px 30px;
}
`
