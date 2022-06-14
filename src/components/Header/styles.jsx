import styled from 'styled-components'

export const Topo = styled.div`
width: 100%;
height: 8vh;
position: sticky;
top: 0;
background: black;

> h1 {
    font-size: 20px;
    font-weight: 600;
}

`;

export const Button = styled.button`
   width: 75px;
   height: 35px;
   text-align: center;
   margin: 0;
   border-radius: 20px;
   float: right;

   >p {
       font-size: 16px;
       font-weight: 600;
   }
`;

export const Img = styled.img`
border-radius: 50%;
height: 30px;
width: 30px;
margin-left: 20px;

 @media (min-width:500px) {
    display: none;
 }
`;

export const Searchbarr = styled.div`
   display: none;

  
  @media(min-width:500px) {
      display: flex;
      width: 100%;
      height: 120px;
  }
`;

export const IImg = styled.img`
border-radius: 50%;
height: 40px;
width: 40px;

`;

export const Display = styled.div`
    display: flex;
    width: 100%;

    > form {
       width: 80%;
       height: 60px;
       margin: 0;
       padding-left: 20px;

       >::placeholder {
       font-size: 20px;
       color: #71767B;
   }

       > textarea {
       min-width:100%;
       height: 100%;
   }}
 `;

 export const Down = styled.div `
    width: 100%;
    height: 7vh;
    position: sticky;
    bottom: 0;
    background: black;
    justify-content: space-around;

     @media(min-width:500px) {
         display: none;
     }
 `;

export const Searchbar = styled.div`
width: 80%;
height: 8vh;
background: black;
padding-top: 10px;
margin: auto;


>form {
 width: 100%;
 margin: auto;
 display: flex;
 height: 40px;
 border-radius: 20px;
 background: transparent;

 >svg {
 font-size: 24px;
 margin: 0px 10px;
 position: absolute;
}

>input {
 padding-left: 15%;
 width: 100%;
 height: 100%;
 border-radius: 20px;

}
}

`;

 export const Topoexplore = styled.div`
    width: 100%;
    height: 110px;
    background: black;

    position: sticky;
    top: 0;
    z-index: 2;

    >#bars {
        width: 100%;
        height: 40px;
        overflow-x: auto;
        ::-webkit-scrollbar {
         display: none;
        }

        >#corredor {
            width: 598px;
            display: flex;
            justify-content: space-around;
            height: 100%;
        }
    }
 `;

 export const Bar = styled.div`
   padding:5px 0px 0 0 ;
   width:auto;
   height: 90%;
   color: white;
   text-align: center;
   font-size: 15px;
   font-weight: 500;
 `;

 export const Toponotification = styled.div`
    width: 100%;
    height: 110px;
    background: black;

    position: sticky;
    top: 0;
    z-index: 2;


    >h1 {
        font-size: 20px;
        font-weight: 600;
        padding: 20px 0 0 20px;
    }

    >#gridnotification {
        width: 60%;
        margin: auto;
        justify-content: space-between;
        padding-top: 20px;

        >span {
            width: auto;
            height: 40px;
            color: white;
            font-weight: 600;
            border-radius: 1px;
        }
    }
 `;


