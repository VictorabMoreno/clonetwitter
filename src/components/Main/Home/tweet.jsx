import React from "react";
import {Imagecenter, Compact, Align, Img, Display} from '../styles'
import carasdocarro from '../../Header/caras_do_carro.png'
import img2 from '../../../Bancodeimagens/img4.jpg'
import { BsChat, BsHeart, } from "react-icons/bs";
import {FaRetweet} from "react-icons/fa"
import {FiShare} from "react-icons/fi"


export const Tweet = ({nome, username, text}) => {
    return(
        <>
          <Compact>
            <Align className="bg-blacktt border-onix border pt-2">
              <Display id="teste">
                <Img src={carasdocarro}/>
                <div id="tweetcontainer" className="flex-col">
                  <Display>
                    <span className="text-sm text-platinatt">{nome}</span>
                    <span className="text-sm pl-1 text-pratatt">@{username}</span>
                  </Display>
                    <p className="text-platinatt">{text}</p>
                    <Imagecenter className="bg-pratatt">
                     
                    </Imagecenter>
                    <Display id="aligncenter" className=" text-white items-center justify-center">
                       <div className="flex items-center">
                         <BsChat />
                         <span className="pl-2">2</span>
                       </div>
                       <div className=" flex items-center">
                         <BsHeart />
                         <span className="pl-2">2</span>
                       </div>
                       <div className=" flex items-center">
                         <FaRetweet />
                         <span className="pl-2">2</span>
                       </div>

                       <div className=" flex items-center">
                         <FiShare />
                         <span className="pl-2">2</span>
                       </div>
                    </Display>
                </div>
              </Display>
            </Align>
          </Compact>
        </>
    )
}