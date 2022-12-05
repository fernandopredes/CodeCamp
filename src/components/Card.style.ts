import styled from 'styled-components'


export const CardBox = styled.div`
max-width: 725px;
border: 1px solid #999999;
margin: 0 auto;


h3{
  margin: 0;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #FFFFFF;
  background-color: #000000;
}

.content{
  padding: 25px 30px 30px 30px;
}

.menu{
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 25px 30px;
}

.data{
  display: flex;
  justify-content: space-between;
  p{
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #777777;
  }
}

.text{
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  p{
    margin: 0;
  }
}
`
