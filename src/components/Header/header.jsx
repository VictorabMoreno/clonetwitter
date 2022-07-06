import React from "react";
import {Down, Button, Topo,Topoexplore, Toponotification, Bar, IImg, Img, Searchbarr,Searchbar, Display} from './styles'
import { MdEmail } from 'react-icons/md';
import { BiHome, BiSearch, BiBell } from 'react-icons/bi';
import {BsArrowLeft} from 'react-icons/bs'
import carasdocarro from './caras_do_carro.png'
import { Link } from 'react-router-dom';

export const Searchexplore = () => {
    return (
        <Searchbar >
            <form className="items-center">
                <BiSearch className="text-pratatt"/>
                <input className="bg-onix" type="text" name="Search" placeholder="busque no twitter" />
            </form>
        </Searchbar>
    )
}

// Headers para cada rota da aplicação //

export const Headerhome = ({page, user}) => {
    return(
        <Topo className= "pl-4 flex border-pratatt items-center">
            <Link to='/profile'><Img src={carasdocarro}/></Link>
            <div id="flex" className="flex-col">
                <h1 className="text-platinatt">{page}</h1>
                <p className="text-pratatt">{user}</p>
            </div>
        </Topo>
    )
}

export const Headerexploreforyou = () => {
    return(
        <Topoexplore className= "flex-col space-x-2 border-pratatt items-center">
            <Searchexplore />
            <div id="bars">
                <div id="corredor">
                    <Bar className="text-center border-bluett border-b-4">For you</Bar>
                    <Link to='/explore/covid'><Bar className="text-center">Covid-19</Bar></Link>
                    <Link to='/explore/covid'><Bar className="text-center">Trending</Bar></Link>
                    <Link to='/explore/covid'><Bar className="text-center">News</Bar></Link>
                    <Link to='/explore/covid'><Bar className="text-center">Sports</Bar></Link>
                    <Link to='/explore/covid'><Bar className="text-center">Entreterimento</Bar></Link>
                </div>
            </div>
        </Topoexplore>
    )
}

export const Headerexplorecovid = () => {
    return(
        <Topoexplore className= "flex-col space-x-2 border-pratatt items-center">
            <Searchexplore />
            <div id="bars">
                <div id="corredor">
                <Link to='/explore/foryou'><Bar className="text-center ">For you</Bar></Link>
                    <Bar className="text-center border-bluett border-b-4">Covid-19</Bar>
                    <Link to='/explore/trending'><Bar className="text-center ">Trending</Bar></Link>
                    <Link to='/explore/news'><Bar className="text-center">News</Bar></Link>
                    <Link to='/explore/sports'><Bar className="text-center">Sports</Bar></Link>
                    <Link to='/explore/entreterimento'><Bar className="text-center">Entreterimento</Bar></Link>
                </div>
            </div>
        </Topoexplore>
    )
}

export const Headerexploretrending = () => {
    return(
        <Topoexplore className= "flex-col space-x-2 border-pratatt items-center">
            <Searchexplore />
            <div id="bars">
                <div id="corredor">
                <Link to='/explore/foryou'><Bar className="text-center ">For you</Bar></Link>
                    <Link to='/explore/covid'><Bar className="text-center">Covid-19</Bar></Link>
                    <Bar className="text-center border-bluett border-b-4">Trending</Bar>
                    <Link to='/explore/news'><Bar className="text-center">News</Bar></Link>
                    <Link to='/explore/sports'><Bar className="text-center">Sports</Bar></Link>
                    <Link to='/explore/entreterimento'><Bar className="text-center">Entreterimento</Bar></Link>
                </div>
            </div>
        </Topoexplore>
    )
}

export const Headerexplorenews = () => {
    return(
        <Topoexplore className= "flex-col space-x-2 border-pratatt items-center">
            <Searchexplore />
            <div id="bars">
                <div id="corredor">
                <Link to='/explore/foryou'><Bar className="text-center ">For you</Bar></Link>
                    <Link to='/explore/covid'><Bar className="text-center">Covid-19</Bar></Link>
                    <Link to='/explore/trending'><Bar className="text-center">Trending</Bar></Link>
                    <Bar className="text-center border-bluett border-b-4">News</Bar>
                    <Link to='/explore/sports'><Bar className="text-center">Sports</Bar></Link>
                    <Link to='/explore/entreterimento'><Bar className="text-center">Entreterimento</Bar></Link>
                </div>
            </div>
        </Topoexplore>
    )
}

export const Headerexploresports = () => {
    return(
        <Topoexplore className= "flex-col space-x-2 border-pratatt items-center">
            <Searchexplore />
            <div id="bars">
                <div id="corredor">
                <Link to='/explore/foryou'><Bar className="text-center">For you</Bar></Link>
                    <Link to='/explore/covid'><Bar className="text-center">Covid-19</Bar></Link>
                    <Link to='/explore/trending'><Bar className="text-center">Trending</Bar></Link>
                    <Link to='/explore/news'><Bar className="text-center">News</Bar></Link>
                    <Bar className="text-center border-bluett border-b-4">Sports</Bar>
                    <Link to='/explore/entreterimento'><Bar className="text-center">Entreterimento</Bar></Link>
                </div>
            </div>
        </Topoexplore>
    )
}

export const Headerexploreentreterimento = () => {
    return(
        <Topoexplore className= "flex-col space-x-2 border-pratatt items-center">
            <Searchexplore />
            <div id="bars">
                <div id="corredor">
                    <Link to='/explore/foryou'><Bar className="text-center">For you</Bar></Link>
                    <Link to='/explore/covid'><Bar className="text-center">Covid-19</Bar></Link>
                    <Link to='/explore/trending'><Bar className="text-center">Trending</Bar></Link>
                    <Link to='/explore/news'><Bar className="text-center">News</Bar></Link>
                    <Link to='/explore/sports'><Bar className="text-center">Sports</Bar></Link>
                    <Bar className="text-center border-bluett border-b-4">Entreterimento</Bar>
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
                <span  className="text-platinatt border-bluett border-b-4"> Todos</span>
                <Link to= '/notification/mentions'><span className="text-platinatt border-bluett">Menções</span></Link>
            </div>
        </Toponotification>
    )
}

export const Headernotificationmentions = () => {
    return(
        <Toponotification className= "pl-4 flex-col space-x-2 border-pratatt border-b items-center">
            <h1 className="text-platinatt">Notificações</h1>
            <div id="gridnotification" className="flex">
                <Link to= '/notification'><span  className="text-platinatt border-bluett ">Todos</span></Link>
                <span className="text-platinatt border-bluett border-b-4 sm">Menções</span>
            </div>
        </Toponotification>
    )
}

export const Headerlists = ({page, user}) => {
    return (
        <Topo className= "pl-4 flex border-pratatt items-center">
            <Link id="link" to='/'><BsArrowLeft /></Link>
            <div id="flex" className="flex-col items-center">
                <h1 className="text-platinatt">{page}</h1>
                <p className="text-pratatt">{user}</p>
            </div>
       </Topo>
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
           <Link to='/explore/foryou'><BiSearch className="text-platinatt text-3xl" /></Link>
           <Link to='/notification'><BiBell className="text-platinatt text-3xl"/></Link>
           <Link to='/messages'><MdEmail className="text-platinatt text-3xl" /></Link>
        </Down>
    )
}


