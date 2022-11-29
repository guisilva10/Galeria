import styled from 'styled-components'

export const Container = styled.div`
background-color: #27282F;
color: #fff;
min-height: 100vh;
`

export const Area = styled.div`
margin:auto;
max-width:  980px;
padding: 30px 0;

@media(max-width:991px){
  width:90%;
}
@media(max-width:768px){
  width:80%;
}
@media(max-width:405px){
  width:80%;
}

`

export const Header = styled.h1`
margin: 0;
padding:0;
text-align: center;
margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
text-align: center;


.emoji{
  font-size: 50px;
  margin-bottom: 30px;
}
`

export const PhotoList = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 10px;

@media(max-width:768px){
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
}
@media(max-width:405px){
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
}
`

export const UploadForm = styled.form`
  background-color: #3D3F43;
  padding: 15px;
  max-width: 950px;
  margin-bottom: 40px;
  border-radius: 10px;

  @media(max-width:405px){
  input[type=file]{
    font-size: 12px;
    margin: 1rem;
  }
}

  input[type=submit] {
    background-color: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;

    &:hover{
      opacity: .9;
    }
  }


`