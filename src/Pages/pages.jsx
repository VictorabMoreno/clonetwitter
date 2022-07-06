import {Edit, Space,Editalternative, Display, Leftbar, Main, Rightbar, Rightbarr, Mainalternative, Rightalternative} from './Appstyle';
import { Headerhome,Headerexploreforyou,Headerexplorecovid,Headerexploretrending,Headerexplorenews,Headerexploresports,Headerexploreentreterimento, Headernotification,Headernotificationmentions, Bardown, Headerlists } from '../components/Header/header';
import {Center, Centerbooks, Centerexplore, Centerlists, Centermessage, Centerprofile } from '../components/Main/Home/Center';
import { Left } from '../components/Leftbar/leftbar';
import { AlternativeRight,MessageRight,Right } from '../components/Rightbar/rightbar';
import { Centernotification } from '../components/Main/Home/Center';

export const Home = () => {
    return(
        <Display>
        <Space>
         <div id='corredor'>
            <Leftbar>
              <Left />
            </Leftbar>
                <Edit className='flex'>
                  <Main>
                    <Headerhome page='Home'/>
                    <Center />
                    <Bardown />
                  </Main>
                  <Rightbar>
                    <Right />
                  </Rightbar>
                </Edit>    
           </div>
         </Space>
     </Display>
    )
}

export const Exploreforyou = () => {
    return(
        <Display>
        <Space>
         <div id='corredor'>
            <Leftbar>
              <Left />
            </Leftbar>
            <Editalternative className='flex'>
               <Main className='border-onix border-r border-l'>
                   <Headerexploreforyou />
                   <Centerexplore />
                   <Bardown />
               </Main>
                   <Rightbarr>
                     <AlternativeRight />
                   </Rightbarr>
            </Editalternative>       
           </div>
         </Space>
     </Display>
    )
}
export const Explorecovid = () => {
  return(
      <Display>
      <Space>
       <div id='corredor'>
          <Leftbar>
            <Left />
          </Leftbar>
          <Editalternative className='flex'>
             <Main className='border-onix border-r border-l'>
                 <Headerexplorecovid />
                 <Centerexplore />
                 <Bardown />
             </Main>
                 <Rightbarr>
                   <AlternativeRight />
                 </Rightbarr>
          </Editalternative>       
         </div>
       </Space>
   </Display>
  )
}
export const Exploretrending = () => {
  return(
      <Display>
      <Space>
       <div id='corredor'>
          <Leftbar>
            <Left />
          </Leftbar>
          <Editalternative className='flex'>
             <Main className='border-onix border-r border-l'>
                 <Headerexploretrending />
                 <Centerexplore />
                 <Bardown />
             </Main>
                 <Rightbarr>
                   <AlternativeRight />
                 </Rightbarr>
          </Editalternative>       
         </div>
       </Space>
   </Display>
  )
}
export const Explorenews = () => {
  return(
      <Display>
      <Space>
       <div id='corredor'>
          <Leftbar>
            <Left />
          </Leftbar>
          <Editalternative className='flex'>
             <Main className='border-onix border-r border-l'>
                 <Headerexplorenews />
                 <Centerexplore />
                 <Bardown />
             </Main>
                 <Rightbarr>
                   <AlternativeRight />
                 </Rightbarr>
          </Editalternative>       
         </div>
       </Space>
   </Display>
  )
}
export const Exploresports = () => {
  return(
      <Display>
      <Space>
       <div id='corredor'>
          <Leftbar>
            <Left />
          </Leftbar>
          <Editalternative className='flex'>
             <Main className='border-onix border-r border-l'>
                 <Headerexploresports />
                 <Centerexplore />
                 <Bardown />
             </Main>
                 <Rightbarr>
                   <AlternativeRight />
                 </Rightbarr>
          </Editalternative>       
         </div>
       </Space>
   </Display>
  )
}
export const Exploreentreterimento = () => {
  return(
      <Display>
      <Space>
       <div id='corredor'>
          <Leftbar>
            <Left />
          </Leftbar>
          <Editalternative className='flex'>
             <Main className='border-onix border-r border-l'>
                 <Headerexploreentreterimento />
                 <Centerexplore />
                 <Bardown />
             </Main>
                 <Rightbarr>
                   <AlternativeRight />
                 </Rightbarr>
          </Editalternative>       
         </div>
       </Space>
   </Display>
  )
}




export const Notification = () => {
    return(
        <Display>
        <Space>
         <div id='corredor'>
            <Leftbar>
              <Left />
            </Leftbar>
            <Edit className='flex'>
               <Main className='border-onix border-r border-l'>
                   <Headernotification/>
                   <Centernotification />
                   <Bardown />
               </Main>
                   <Rightbar>
                     <Right />
                   </Rightbar>
            </Edit>       
           </div>
         </Space>
     </Display>
    )
}
export const Mentions = () => {
  return (
    <Display>
        <Space>
         <div id='corredor'>
            <Leftbar>
              <Left />
            </Leftbar>
            <Edit className='flex'>
               <Main className='border-onix border-r border-l'>
                   <Headernotificationmentions/>
                   <Centernotification />
                   <Bardown />
               </Main>
                   <Rightbar>
                     <Right />
                   </Rightbar>
            </Edit>       
           </div>
         </Space>
     </Display>
  )
}

export const Messages = () => {
  return(
      <Display>
      <Space className='flex'>
          <Leftbar>
            <Left />
          </Leftbar>
          <Edit className='flex'>
                 <Mainalternative>
                    <Centermessage />
                    <Bardown />
                 </Mainalternative>
                 <Rightalternative className='border-onix border-r border-l'>
                   <MessageRight />
                </Rightalternative>
          </Edit>       
       </Space>
   </Display>
  )
}

export const Books = () => {
  return (
      <Display>
      <Space>
      <div id='corredor'>
          <Leftbar>
            <Left />
          </Leftbar>
          <Edit className='flex'>
            <Main className=' h[100vh] border-onix border-r border-l'>
                <Headerhome page='Booksmarks' user='@victorMoreno'/>
                <Centerbooks />
                <Bardown />
            </Main>
                <Rightbar>
                  <Right />
                </Rightbar>
          </Edit>       
        </div>
      </Space>
  </Display>
  )
}

export const Lists = () => {
  return (
    <Display>
      <Space>
      <div id='corredor'>
          <Leftbar>
            <Left />
          </Leftbar>
          <Edit className='flex'>
            <Main className=' h[100vh] border-onix border-r border-l'>
                <Headerlists page='Lists' user='@victormoreno' />
                <Centerlists />
                <Bardown />
            </Main>
                <Rightbar>
                  <Right />
                </Rightbar>
          </Edit>       
        </div>
      </Space>
  </Display>
  )
}

export const Profile = () => {
  return(
      <Display>
      <Space>
      <div id='corredor'>
          <Leftbar>
            <Left />
          </Leftbar>
          <Edit className='flex'>
            <Main className=' h[100vh] border-onix border-r border-l'>
                <Centerprofile />
                <Bardown />
            </Main>
                <Rightbar>
                  <Right />
                </Rightbar>
          </Edit>       
        </div>
      </Space>
  </Display>
  )
}

