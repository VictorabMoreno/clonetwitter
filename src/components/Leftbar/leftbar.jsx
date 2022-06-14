import {BiHome, BiSearch, BiBell } from 'react-icons/bi';
import { BsTwitter, BsFillBookmarkFill, BsPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiPagesFill } from 'react-icons/ri';
import {CgSearchLoading} from 'react-icons/cg'
import {TweetButton, Shadowback, Bar, Display } from './styles';
import { Link } from 'react-router-dom';

export const Left = () => {
    return(
        <>
          <Bar className='flex-col'>
              <Link to='/'><Display className = "items-center flex "><Shadowback><BsTwitter /></Shadowback></Display></Link>
              <Link to='/'><Display className = "items-center flex "><Shadowback><BiHome /><p>Home</p></Shadowback></Display></Link>
              <Link to='/explore'><Display className = "items-center flex"><Shadowback><BiSearch /><p>Explore</p></Shadowback></Display></Link>
              <Link to='/notification'><Display className = "items-center flex"><Shadowback><BiBell /><p>Notificações</p></Shadowback></Display></Link>
              <Display className = "items-center flex"><Shadowback><MdEmail /><p>Mensagens</p></Shadowback></Display>
              <Display className = "items-center flex"><Shadowback><BsFillBookmarkFill /><p>Bookmarks</p></Shadowback></Display>
              <Display className = "items-center flex"><Shadowback><RiPagesFill /><p>Listas</p></Shadowback></Display>
              <Display className = "items-center flex"><Shadowback><BsPersonFill /><p>Perfil</p></Shadowback></Display>
              <Display className = "items-center flex"><Shadowback><CgSearchLoading /><p>Mais</p></Shadowback></Display>
              <TweetButton className='flex items-center bg-bluett'><BsTwitter /><span>Tweet</span></TweetButton>
          </Bar>
        </>
    )
}