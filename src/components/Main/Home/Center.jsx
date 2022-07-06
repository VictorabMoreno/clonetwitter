import {Grid, ALignConteiner, Noticespace, Space, Discover, Pinned,
  Container,
  Banner,
  Avatar,
  ProfileData,
  Followage,
  EditButton, 
} from "../styles"
import { Search } from "../../Header/header";
import { Tweet } from "./tweet";
import Fundo from '../../../Bancodeimagens/background.png'
import { Posttrendd, Postnewss, Recomendfollow, Recomendrecomend } from "../../Rightbar/news";
import { Notificationfollow, Notificationreply } from "./notification";
import { Toponotification } from "../../Header/styles";

export const Center = () => {
    return (

      <Space className=" pt-20">
           <div id="corredor ">
              <Search />
              <Tweet  nome="Victor" username="victormoreno" text="fazendo um clone do twitter"/>
              <Tweet nome="Moreno" username="MorenoVictor" text="Esse é meu clone do twitter"/>
              <Tweet nome="Moreno" username="MorenoVictor" text="Esse é meu clone do twitter"/>
              <Tweet nome="Moreno" username="MorenoVictor" text="Esse é meu clone do twitter"/>
              <Tweet nome="Moreno" username="MorenoVictor" text="Esse é meu clone do twitter"/>
              <Tweet nome="Moreno" username="MorenoVictor" text="Esse é meu clone do twitter"/>
              <Tweet nome="Moreno" username="MorenoVictor" text="Esse é meu clone do twitter"/>
              <Tweet nome="Moreno" username="MorenoVictor" text="Esse é meu clone do twitter"/>
              <Tweet nome="Moreno" username="MorenoVictor" text="Esse é meu clone do twitter"/>
              <Tweet nome="Moreno" username="MorenoVictor" text="Esse é meu clone do twitter"/>
           </div>
      </Space>
    )
}

export const Centerexplore = () => {
  return (

    <Space className="border-onix">
         <div id="corredor">
            <Noticespace className="border-onix border-b" >
              <img src={Fundo} />
              <label>Brazil police questions possible suspect connected to the disappearance of British journalist and an indigenous expert in the Amazon</label>
            </Noticespace>
            <Posttrendd notice="Trending in brazil" trend="Clone do twitter em react" trendstatus="33.5K tweets" />
            <Posttrendd notice="Trending in brazil" trend="Clone do twitter em react" trendstatus="33.5K tweets" />
            <Posttrendd notice="Trending in brazil" trend="Clone do twitter em react" trendstatus="33.5K tweets" />
            <Posttrendd notice="Trending in brazil" trend="Clone do twitter em react" trendstatus="33.5K tweets" />
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Clone do twitter"/>
         </div>
    </Space>
  )
}

export const Centernotification = () => {
  return(
      <Space className="border-onix">
      <div id="corredor">
        <Notificationfollow Name='Victor '/>
        <Notificationfollow Name='Victor '/>
        <Notificationreply Name='Gabrielle' Msg='Te amo' />
      </div>
    </Space>
)
}

export const Centermessage = () => {
  return (
    <>
      <Toponotification className= "pl-4 flex-col border-l border-onix">
            <h1 className="text-platinatt">Messages</h1>
        </Toponotification>
        <ALignConteiner className="border-l border-onix">
           <h1 className="text-white">Welcome to your inbox!</h1>
           <p className="text-pratatt">Drop a line, share Tweets and more with private conversations between you and others on Twitter. </p>
        </ALignConteiner>
    </>
  )
}

export const Centerbooks = () => {
  return (
    <>
      <Grid>
        <img src="./bancodeimagens/ttimage.png" />
        <h1 className="text-white">Save Tweets for later</h1>
        <p className="text-pratatt">Dont let the good ones fly away! Bookmark Tweets to easily find them again in the future.</p>
      </Grid>
    </>
  )
}

export const Centerlists = () => {
  return(
    <>
      <Pinned className="pt-20">
        <h1>Pinned Lists</h1>
        <div id="gridtext"><span className="text-pratatt">Nothing to see here yet — pin your favorite Lists to access them quickly.</span></div>
      </Pinned>
      <Discover className="border border-onix">
        <h1>Discover new list</h1>
        <Recomendrecomend div='divv' nome="Victormoreno" username="victormoreno" theme='CENÁRIO DE APEX LEGENDS' />
        <Recomendrecomend div='divv' nome="Victormoreno" username="victormoreno" theme='CENÁRIO DE APEX LEGENDS' />
        <Recomendrecomend div='divv' nome="Victormoreno" username="victormoreno" theme='CENÁRIO DE APEX LEGENDS' />
      </Discover>
      <Pinned className="pt-8">
        <h1>Your Lists</h1>
        <div id="gridtext"><span className="text-pratatt">Nothing to see here yet — pin your favorite Lists to access them quickly.</span></div>
       </Pinned>
    </>
  )
}

export const Centerprofile = () => {
  return(
    <Container>
      <Banner className="bg-bluett">
        <Avatar />
      </Banner>

      <ProfileData className="border-b border-onix">
        <EditButton className="border border-onix">Editar perfil</EditButton>

        <h1>Victor Moreno</h1>
        <h2 className="text-pratatt">@victorabmoreno</h2>

        <p>
          Developer at <a className="text-bluett" href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li className="text-pratatt">
            Minas Gerais, Brasil
          </li>
          <li className="text-pratatt">
            Nascido(a) em 02 de junho de 2004
          </li>
        </ul>

        <Followage>
          <span className="text-pratatt">
            <strong>94</strong>following
          </span>
          <span className="text-pratatt">
            <strong>672 </strong>followers
          </span>
        </Followage>
      </ProfileData>
      <Posttrendd notice="Trending in brazil" trend="Gabi gostosa" trendstatus="33.5K tweets" />
            <Posttrendd notice="Trending in brazil" trend="Gabi gostosa" trendstatus="33.5K tweets" />
            <Posttrendd notice="Trending in brazil" trend="Gabi gostosa" trendstatus="33.5K tweets" />
            <Posttrendd notice="Trending in brazil" trend="Gabi gostosa" trendstatus="33.5K tweets" />
            <Tweet nome="Victor" username="victormoreno" text="Trabalhar né, valorant não dá dinheiro"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
    </Container>
  
  )
}