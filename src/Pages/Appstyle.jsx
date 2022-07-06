import styled from 'styled-components'

export const Leftbar = styled.div`
   position: sticky;
   top: 0;
   left: 0;
   width: 0;
   height: 0;
  
  @media(min-width:500px) {
    min-width: calc(8 * 1.8%);
    height: 100vh;
    color: white;
  }

  @media(min-width:1001px) and (max-width:1280){
    width:15%;
    min-width: 70px;
  }

  @media(min-width:1280px) {
    min-width: 20%;
  }
`;

export const Main = styled.div`
    width: 100%;
    max-width: 600px;
    height: auto;

    @media(max-width:500px) {
      width: 100%;
      max-height: 98vh;
    }

    @media(min-width:500px) and (max-width:1000px) {
     width: 90%;
    }

    
`;

export const Mainalternative = styled.div`
   margin-right: 10px;
   height: 100%;

  @media(min-width:1100px)and (max-width:1900px) {
    width: 350px;
   }
   
   @media(max-width:1092px) {
    width: 290px;
   }

   @media(max-width:500px) {
      width: 100%;
      max-height: 98vh;
    }
`;

export const Rightalternative = styled.div`
    width: 100%;
    max-height: 100vh;
    max-width: 600px;


    @media(min-width:500px) and (max-width:1000px) {
     width: 90%;
    }

    @media (max-width:500px) {
      display: none;
    }

    
`;


export const Rightbar = styled.div`
   margin-right: 10px;
   height: 100%;

  @media(min-width:1100px)and (max-width:1900px) {
    width: 350px;
   }
   
   @media(max-width:1092px) {
    width: 290px;
   }

   @media(max-width:1000px) {
    display: none;
   }
`;

export const Rightbarr = styled.div`
   margin-right: 10px;
   height: 100%;

  @media(min-width:1100px)and (max-width:1900px) {
    width: 380px;
   }
   
   @media(max-width:1092px) {
    width: 320px;
   }

   @media(max-width:1000px) {
    display: none;
   }
`;

export const Display = styled.div`
    display: flex;
`;

export const Edit = styled.div`
    justify-content: space-between;

    @media(min-width:1000px) and (max-width:2400px) {
      width: 90%;
    }


   @media(min-width:500px) and (max-width:1000px) {
     width: 100%;
   }

   @media(max-width:500px) {
    min-width: 100%;
   }
`;

export const Editalternative = styled.div`
    justify-content: space-between;

    @media(min-width:1000px) and (max-width:2400px) {
      width: 90%;
    }


   @media(min-width:500px) and (max-width:1000px) {
     width: 100%;
   }

   @media(max-width:500px) {
    min-width: 100%;
   }
`;

export const Space = styled.div`
   height: 100vh;
   width: 96%;
   margin: auto;
   overflow-y: auto;
   ::-webkit-scrollbar {
    display: none;
   }


   @media(min-width:1100px)and (max-width:2400px) {
    min-width: 990px;
    max-width: 1300px;
    margin: auto;

    
   }
   
   @media(max-width:1100px) {
    min-width: 920px;
   }

   @media(min-width:700px) and (max-width:1000px) {
     width: 600px;
   }

   @media(max-width:700px) {
    min-width: 100%;
   }

   @media(min-width:500px) and (max-width:2400px){
      >#corredor {
      min-width: 100%;
      height: 4000px;
      display: flex;
   }
   }

`;



