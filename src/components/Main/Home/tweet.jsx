import React from "react";
import {Imagecenter, Compact, Align, Img, Display} from '../styles'
import carasdocarro from '../../Header/caras_do_carro.png'
import img2 from '../../../Bancodeimagens/img4.jpg'
import { RiImage2Line } from "react-icons/ri";


export const Tweet = ({nome, username, text}) => {
    return(
        <>
          <Compact>
            <Align className="bg-blacktt border-onix border-t pt-2">
              <Display>
                <Img src={carasdocarro}/>
                <div id="tweetcontainer" className="flex-col">
                  <Display>
                    <span className="text-sm text-platinatt">{nome}</span>
                    <span className="text-sm pl-1 text-pratatt">@{username}</span>
                  </Display>
                    <p className="text-platinatt">{text}</p>
                    <Imagecenter>
                       <img src={img2} />
                    </Imagecenter>
                </div>
              </Display>
            </Align>
          </Compact>
        </>
    )
}