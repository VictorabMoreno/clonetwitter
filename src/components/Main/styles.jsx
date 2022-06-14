import styled from 'styled-components'

export const Space = styled.div`
   width: 100%;
   height: 82vh;
   >#corredor {
      width: 100%;
      height: 4000px;
   }
   

   @media(max-width:500px) {
      overflow-y: auto;
   }
`;

export const Align = styled.div`
   width: 100%;
   height: 100%;
   flex-wrap: wrap;
`;
export const  Img = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   margin: 0 20px 0 0;
`;
export const  Display = styled.div`
   display: flex;

   >#tweetcontainer {
      width: 80%;
      height:min(285px, max(175px, 41vh));
      margin: 0px 0 30px 0;
   }
`;

export const Compact = styled.div`
  min-height: 100px;
  max-height: 400px;
  max-width: 800px;
`;

export const Imagecenter = styled.div`
  width: 100%;
  height:80%;
  background: white;
  margin: 20px 0 20px;
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
