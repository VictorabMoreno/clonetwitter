import {Edit, Space,Editalternative, Display, Leftbar, Main, Rightbar, Rightbarr} from './Appstyle';
import { Headerhome,Headerexplore, Bardown } from '../components/Header/header';
import {Center, Centerexplore } from '../components/Main/Home/Center';
import { Left } from '../components/Leftbar/leftbar';
import { AlternativeRight,Right } from '../components/Rightbar/rightbar';
import { Centernotification } from '../components/Main/Home/Center';
import { Headernotification } from '../components/Header/header';

export const Home = () => {
    return(
        <Display>
        <Space>
         <div id='corredor'>
            <Leftbar>
              <Left />
            </Leftbar>
                <Edit className='flex'>
                  <Main className='border-onix border-l border-r'>
                    <Headerhome />
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

export const Explore = () => {
    return(
        <Display>
        <Space>
         <div id='corredor'>
            <Leftbar>
              <Left />
            </Leftbar>
            <Editalternative className='flex'>
               <Main className='border-onix border-r border-l'>
                   <Headerexplore />
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
                   <Headernotification />
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