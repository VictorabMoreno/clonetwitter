import {Recomend, Follow, Img, Recomendconteiner, Button, Trend,Trendd, Corpo,Corpoo, Barnews, Barnewss, CentralConteiner } from "./styles"
import carasdocarro from "../Header/caras_do_carro.png"
import { Display } from "../Main/styles"
import {BsNewspaper} from 'react-icons/bs'

export const Postnews = ({notice, moment, text}) => {
    return(
        <>
          <Corpo>
            <div id="one" className="flex items-center">
              <div id="two" className="flex-col">
                 <span className="text-pratatt">{notice} . {moment}</span>
                 <p className="text-platinatt">{text}</p>
              </div>
              <div id="right">
                <img src={carasdocarro} />
              </div>
            </div>
          </Corpo>
        </>
    )
}

export const Posttrend = ({notice,trend,trendstatus}) => {
    return(
        <>
          <Trend>
           <div id="one" className="flex items-center">
              <div id="two" className="flex-col">
                 <span className="text-pratatt">{notice}</span>
                 <p className="text-platinatt">{trend}</p>
                 <span className="text-pratatt">{trendstatus}</span>
              </div>
              <div id="right"></div>
            </div>
          </Trend>
        </>
    )
}

export const Posttrendd = ({notice,trend,trendstatus}) => {
  return(
      <>
        <Trendd>
         <div id="one" className="flex items-center">
            <div id="two" className="flex-col">
               <span className="text-pratatt">{notice}</span>
               <p className="text-platinatt">{trend}</p>
               <span className="text-pratatt">{trendstatus}</span>
            </div>
            <div id="right"></div>
          </div>
        </Trendd>
      </>
  )
}

export const Recomendfollow = ({nome, username}) => {
  return(
    <>
      <Follow className="flex items-center">
        <div className="flex items-center">
          <Img src={carasdocarro}/>
          <div className="flex-col pl-3">
            <p className="text-white">{nome}</p>
            <span className="text-pratatt">@{username}</span>
          </div>
          </div>
        <Button>Seguir</Button>
      </Follow>
    </>
  )
}

export const Recomendrecomend = ({theme, nome, username, div}) => {
  return(
    <>
      <Recomend className="flex items-center">
        <div id="nada" className="flex items-center">
          <div id={div}><BsNewspaper /></div>
          <div id="col" className="flex-col pl-3">
            <p className="text-white">{theme}</p>
            <Display id="display">
              <span id="name" className="text-white">{nome}</span>
              <span className="text-pratatt">@{username}</span>
            </Display>
          </div>
          </div>
        <Button>Seguir</Button>
      </Recomend>
    </>
  )
}


export const News = () => {
    return (
        <>
                <Barnews className="">
                    <CentralConteiner>
                          <h1 className="text-platinatt">O que está acontecento</h1>
                          <Postnews moment="LIVE" notice="War in Ukrania" text="Ultimas noticias sobre a guerra da ukrania"/>
                          <Posttrend notice="Trending in brazil" trend="Clone do twitter" trendstatus="33.5K tweets" />
                          <Posttrend notice="Trending in brazil" trend="Clone do twitter" trendstatus="33.5K tweets" />
                          <Posttrend notice="Trending in brazil" trend="Clone do twitter" trendstatus="33.5K tweets" />
                          <Postnews moment="LIVE" notice="War in Ukrania" text="Ultimas noticias sobre a guerra da ukrania"/>
                      </CentralConteiner>
                      <Recomendconteiner>
                        <h1 className="text-platinatt">Quem seguir?</h1>
                        <Recomendfollow nome="Victormoreno" username="victormoreno" />
                        <Recomendfollow nome="Gabriellesilva" username="gabsilva" />
                        <Recomendfollow nome="luisfernando" username="luisfernando" />
                      </Recomendconteiner>

                </Barnews>
          
        </>
    )
}

export const AlternativeNews = () => {
  return (
    <>
      <Barnewss>
             <Recomendconteiner>
                <h1 className="text-platinatt">Quem seguir?</h1>
                <Recomendfollow nome="Victormoreno" username="victormoreno" />
                <Recomendfollow nome="Gabriellemendes" username="gabbemendes" />
                <Recomendfollow nome="Gabilinda" username="gabilinda" />
             </Recomendconteiner>
     </Barnewss>
    </>
  )
}