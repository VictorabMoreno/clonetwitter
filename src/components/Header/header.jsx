import React from "react";
import {Down, Button, Topo,Topoexplore, Toponotification, Bar, IImg, Img, Searchbarr,Searchbar, Display} from './styles'
import { MdEmail } from 'react-icons/md';
import { BiHome, BiSearch, BiBell } from 'react-icons/bi';
import carasdocarro from './caras_do_carro.png'
import { Link } from 'react-router-dom';

// Headers para cada rota da aplicação //

export const Headerhome = () => {
    return(
        <Topo className= "pl-4 flex space-x-2 border-pratatt items-center">
            <Img src={carasdocarro}/>
            <h1 className="text-platinatt">Home</h1>
        </Topo>
    )
}

export const Headerexplore = () => {
    return(
        <Topoexplore className= "flex-col space-x-2 border-pratatt items-center">
            <Searchbar >
            <form className="items-center">
                <BiSearch className="text-pratatt"/>
                <input className="bg-onix" type="text" name="Search" placeholder="busque no twitter" />
            </form>
            </Searchbar>
            <div id="bars">
                <div id="corredor">
                    <Bar className="text-center border-bluett border-b-4">For you</Bar>
                    <Bar className="text-center">Covid-19</Bar>
                    <Bar className="text-center">Trending</Bar>
                    <Bar className="text-center">News</Bar>
                    <Bar className="text-center">Sports</Bar>
                    <Bar className="text-center">Entreterimento</Bar>
                </div>
            </div>
        </Topoexplore>
    )
}

export const Headernotification = () => {
    return(
        <Toponotification className= "pl-4 flex-col space-x-2 border-pratatt border-b items-center">
            <h1 className="text-platinatt">Notificações</h1>
            <div id="gridnotification" className="flex">
                <span className="border-bluett border-b-4 ">Todos</span>
                <span className="border-bluett">Menções</span>
            </div>
        </Toponotification>
    )
}




export const Search = () => {
    return (
        <Searchbarr className="bg-blacktt space-y-2 text-lg items-start flex-col">
            <Display className="flex">
              <IImg src={carasdocarro}/>
              <form className="text-platinatt pl-10">
                 <textarea name="" className=" outline-none bg-transparent" placeholder="O que está acontecendo?"></textarea>
              </form>
              </Display>
              <Display className=" pr-4 justify-end ">
                 <span>' '</span>
                <Button className="text-platinatt  bg-bluett">
                    <p>Tweet</p>
                </Button>
              </Display>
        </Searchbarr>
    )
}

export const Bardown = () => {
    return (
        <Down className="flex items-center border-t border-onix">
           <Link to='/'><BiHome className=" text-platinatt text-3xl" /></Link>
           <Link to='/explore'><BiSearch className="text-platinatt text-3xl" /></Link>
           <Link to='/notification'><BiBell className="text-platinatt text-3xl"/></Link>
           <MdEmail className="text-platinatt text-3xl" />
        </Down>
    )
}
