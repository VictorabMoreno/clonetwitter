import {Noticespace, Space } from "../styles"
import { Search } from "../../Header/header";
import { Tweet } from "./tweet";
import Fundo from '../../../Bancodeimagens/background.png'
import { Posttrendd, Postnewss } from "../../Rightbar/news";
import { Notificationfollow, Notificationreply } from "./notification";

export const Center = () => {
    return (

      <Space className="border-onix ">
           <div className=" pl-4 " id="corredor">
              <Search />
              <Tweet nome="Victor" username="victormoreno" text="Trabalhar né, valorant não dá dinheiro"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
              <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
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
            <Posttrendd notice="Trending in brazil" trend="Gabi gostosa" trendstatus="33.5K tweets" />
            <Posttrendd notice="Trending in brazil" trend="Gabi gostosa" trendstatus="33.5K tweets" />
            <Posttrendd notice="Trending in brazil" trend="Gabi gostosa" trendstatus="33.5K tweets" />
            <Posttrendd notice="Trending in brazil" trend="Gabi gostosa" trendstatus="33.5K tweets" />
            <Tweet nome="Victor" username="victormoreno" text="Trabalhar né, valorant não dá dinheiro"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
            <Tweet nome="Gabrielle" username="gabimendes" text="Amo o victor"/>
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