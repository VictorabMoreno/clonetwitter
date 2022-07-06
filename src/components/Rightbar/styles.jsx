import styled from "styled-components";

export const Barsearch = styled.div`
   width: 100%;
   height: 8vh;
   position: sticky;
   top: 0;
   z-index: 2;
   background: black;
   padding: 10px 0 0 20px;


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

export const Barnewss = styled.div`
   height: 100%;
   margin: 0 0 0 20px;
   padding-bottom: 100px;
   padding-top: 20px;
`;

export const Barnews = styled.div`
   height: 100%;
   margin: 20px 0 0 20px;
   padding-bottom: 100px;
`;

export const Corpo = styled.div`
  width: 105%;
  height: 90px;
  margin: 5px 0;

  :hover {
        background: #f5f5f515;
        cursor: pointer;
       }

  >#one {
    width: 100%;
    height: 100%;
    justify-content: space-around;

  >#two {
    width: 60%;
    height: 100%;

    >span {
        font-size: 13px;
        font-weight: 600;
    }

    >p {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.2px;
        margin: 0;
    }

  }  

  >#right {
        width: 24%;
        height: 80%;
        border-radius: 10px;

     >img {
        width: 80%;
        height: 100%;
        border-radius: 10px;
     }
    }
  }
`;

export const CentralConteiner = styled.div`
   padding: 0 5% 0 0 ;
   width: 99%;
   height: 550px;
   margin: 20px auto 20px;
   border-radius: 15px;
   background: #f5f5f516;
   >h1 {
    font-size: 24px;
    font-weight: 600;
    padding: 10px 10px;
   }
`;

export const Trend = styled.div`
       :hover {
        background: #f5f5f515;
        cursor: pointer;
       }
        width: 105%;
        height: 80px;
        margin: 5px 0;

        >#one {
        width: 100%;
        height: 100%;
        justify-content: space-around;

        >#two {
        width: 60%;
        height: 100%;

        >span {
            font-size: 13px;
            font-weight: 600;
        }

        >p {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.2px;
            margin: 0;
        }
    }
    >#right {
        width: 24%;
        height: 80%;
        border-radius: 10px;
   }}

`;

export const Trendd = styled.div`
  :hover {
        background: #f5f5f515;
        cursor: pointer;
       }
        width: 100%;
        height: 100px;
        padding: 10px 15px;

        >#one {
        width: 100%;
        height: 100%;
        justify-content: space-between;

        >#two {
        width: 60%;
        height: 100%;

        >span {
            font-size: 13px;
            font-weight: 600;
        }

        >p {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.2px;
            margin: 0;
        }
    }
    >#right {
        width: 24%;
        height: 80%;
        border-radius: 10px;
   }}
`;

export const Button = styled.button`
       width: 80px;
       height: 30px;
       background: white;
       border-radius: 15px;
       font-size: 14px;
       font-weight: 600;
`;

export const Recomendconteiner = styled.div`
      padding: 0 5% 0 0 ;
      width: 99%;
      height: 340px;
      margin: 20px auto 20px;
      border-radius: 15px;
      background: #f5f5f516;

      >h1 {
        font-size: 20px;
        padding: 10px 20px 0 15px;
      }

 `;

export const Img = styled.img`
        width: 40px;
        height: 40px;
      border-radius: 50%;
`;

export const Follow = styled.div`
   width: 90%;
   height: 70px;
   justify-content: space-between;
   margin: 15px auto;
`;

export const Recomend = styled.div`
   width: 90%;
   height: 70px;
   justify-content: space-between;
   margin: 15px auto;

   >#nada {

     #col {
      >p {
        font-size: 14px;
        font-weight: 600;
      }

      >#display {
        >#name {
          font-size: 13px;
          font-weight: 600;
        }

        >span {
          font-size: 11px;
        }
      }
     }

    >#div {
     padding: 10px;
      background: red;
      border-radius: 10px;
      margin: auto;

      >svg {
      font-size: 24px;
     }
    }

    #divv {
      border-radius: 10px;
     padding: 10px;
      background: purple;

      >svg {
      font-size: 24px;
      margin: auto;
     }
    }
   }

`;

export const Grid = styled.div`
  width:60% ;
  margin:30% auto 0;

  >h1 {
    font-size: 28px;
  }
`;

export const MessageButton = styled.div`
  text-align: center;
  width: 170px;
  padding-top: 30px;

  >span {
    padding: 15px 35px;
    border-radius: 25px;
    cursor: pointer;
  }
`;

