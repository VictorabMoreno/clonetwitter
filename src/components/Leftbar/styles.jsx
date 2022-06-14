import styled from "styled-components";

export const Bar = styled.div`
   
  @media(min-width:500px) {
    width: 100%;
    height: 100%;

     
  }
`;

export const Display = styled.div`
        width: 100%;
        height: 54px;
        letter-spacing: 1px;
        padding-left: 20px;
      
     ` 

export const Shadowback = styled.div`

       cursor: pointer;
       width: auto;
       display: flex;
       padding: 10px 10px;
       border-radius: 20px;

       :hover {
            background: #ffffff18;
        }

        >svg {
            font-size: 0;
            margin: 0;
        }

        >p {
            font-size: 0px;
            margin: 0 10px;
        }

     @media(min-width:500px) {

        >svg  {
                font-size: 28px;
            }
            
         }
     @media(min-width:1280px) {
        >p {
             font-size: 20px;
        }

        >svg  {
                font-size: 28px;
            }
        }
     `
export const TweetButton = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 20px;

  >svg {
    margin: auto;
    font-size: 18px;
    color: white;
  }

  >span {
    display: none;
  }

  @media(max-width:500px) {
    position: fixed;
    right: 10px;
    bottom: 110px;
  }

  @media(min-width:1280px) {
    width: 80%;
    border-radius: 25px;
    padding: 15px 15px;
    margin: auto;

    >span {
      width: 100%;
      text-align: center;
      display: inline;
      font-size: 18px;
      font-weight: 600;
    }

    >svg {
      display: none;
    }
  }
`;