import styled from "styled-components";


export const FooterContainer = styled.div`
background-color: #f6f5f7;
bottom: 0;
width: 100%;
padding: 20px 0 20px 0;
display: flex;
justify-content: space-around;

@media screen and (max-width: 480px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
}

ul {
  color: #3f3d56;
}

h3 {
  font-weight: bold;
  font-size: 20px;
  color: #450059;
}

img {
  width: 20px;
}

div {
  align-self: center;
}
`;

export const RedesSociais = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: #450059;
width: 100%;
gap: 10px;
font-size: 25px;
@media screen and (max-width: 480px) {
  
}


`;
