import styled from "styled-components"


export default function Menu() {

   const Container = styled.div`
      flex:1;
      background-color:black;
      height:100vh;
      position: sticky;
      top: 0px;
      color: white;
   `;
   const Wrapper = styled.div`
      padding: 10px 18px;
   `
   const Logo = styled.div`
      display: flex;
      gap: 5px;
   `
   const Img = styled.img`
      
   `
   return (
      <Container>
         <Wrapper>
          <Logo>
            <Img  src=""/>
            Chicken Youtube
            </Logo>
            
         </Wrapper>
      </Container>
   )
}