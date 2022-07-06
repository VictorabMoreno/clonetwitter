import styled from 'styled-components'

export const Space = styled.div`
   width: 100%;
   height: 82vh;
   >#corredor {
      width: 100%;
      height: auto;
   }
   

   @media(max-width:500px) {
      overflow-y: auto;
      height: 100vh;
   }
`;

export const Align = styled.div`
   width: 100%;
   height: 100%;
   flex-wrap: wrap;

   >#teste {
      width: 100%;
      height: 100%;
   }
`;
export const  Img = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   margin: 0 20px 0 20px;
`;
export const  Display = styled.div`
   display: flex;

   >#tweetcontainer {
      width: 80%;
      min-height:100%;
      margin: 0px 0 30px 0;

      >#aligncenter {
      justify-content: space-between;
   }
   }

`;

export const Compact = styled.div`
  width:100% ;
  min-height: 100px;
  height:auto;
  max-width: 800px;
`;

export const Imagecenter = styled.div`
  width:98%;
  height:28vh;
  margin: 20px 10px 20px 0;
  border-radius: 15px;

  >img {
   width: 100%;
   height: 100%;
   border-radius: 15px;
  }
`;

export const Noticespace = styled.div`
   width: 100%;
   height: 340px;
   position: relative;
   padding-left: -20px;

   >img {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      box-shadow:inset 2em black ;
   }

   >label {
      position: absolute;
      font-size: 19px;
      z-index: 1;
      color: white;
      bottom: 15px;
      font-weight: 800;
      letter-spacing: 0.5px;
      left: 15px;
   }

   @media(max-width:500px) {
      height: 280px;
   }
`;

export const Notificationgrid = styled.div`
  width: 100%;
  height: auto;
  border-bottom:solid 1px #333639;
  display: flex;
  padding: 20px 20px;
  color: white;

  >#align {
     width: auto;
     height: auto;
     margin-left: 15px;

     >p {
      padding-top: 10px;
      font-size: 16px;
     }
  }
`;

export const Imgnotification = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  >img {
   width: 100%;
   height: 100%;
   border-radius: 50%;
  }
`;

export const ALignConteiner = styled.div`
   width: 100%;
   height: 82vh;
   font-weight: 600;
   padding: 0px 30px;
   letter-spacing: 1px;
   
   >h1 {
      font-size: 28px;
      opacity: 0.9;
   }

   >p {
      font-size: 14px;
   }
`;

export const Grid = styled.div`
  width: 50%;
  margin:70px auto 0;

  >h1 {
   font-size: 28px;
  }

  >p {
   font-size: 15px;
  }
`;

// Perfil de user //

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  color: white;
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 3.75px solid white;
  background: gray;
  border-radius: 50%;
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;
  }
  > p {
    font-size: 15px;
    margin-top: 11px;
    > a {
      text-decoration: none;
    }
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;
    > li {
      font-size: 15px;
      > svg {
        margin-right: 5px;
      }
    }
  }
`;


export const Followage = styled.div`
  display: flex;
  > span {
    font-size: 15px;

    >strong {
      padding: 0px 5px;
      color: white;
    }
  }
`;

export const EditButton = styled.a`
  position: absolute;
  top: 2vw;
  right: 7px;
  padding: 4px 16px;
  font-size: 13px;
  border-radius: 25px;
  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

// style da área de listas //

export const Discover = styled.div`
 >h1 {
   color: white;
   padding: 20px 0 0 30px;
   font-size: 20px;
   font-weight: 600;
 }
`;

export const Pinned = styled.div`
  height: 200px;

  >h1 {
   color: white;
   font-size: 20px;
   padding: 0 0 30px 30px;
  }

  >#gridtext {
   width: 80%;
   margin: auto;

   >span {
   font-size: 14px;
  }
  }
`;