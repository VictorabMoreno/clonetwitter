import { Imgnotification, Notificationgrid} from '../styles'
import { BsPersonFill, BsHeartFill } from 'react-icons/bs'
import Foto from '../../../Bancodeimagens/util.webp'


export const Notificationfollow = ({Name}) => {
    return (
        <>
          <Notificationgrid >
                <BsPersonFill className='text-bluett w-8 h-8' />
                <div id='align' className='flex-col'>
                    <Imgnotification>
                    <img src={Foto} />
                    </Imgnotification>
                    <p><strong>{Name} {' '}</strong>followed you</p>
                </div>
          </Notificationgrid>
        </>
    )
}

export const Notificationreply = ({Name, Msg}) => {
    return (
        <>
          <Notificationgrid>
                <BsHeartFill className='text-red w-8 h-8' />
                <div id='align' className='flex-col'>
                    <Imgnotification>
                    <img src={Foto} />
                    </Imgnotification>
                    <p className='text-platinatt'><strong>{Name} {' '}</strong>liked you reply</p>
                    <p className='text-pratatt'>{Msg}</p>
                </div>
          </Notificationgrid>
        </>
    )
}