import { Searchbar } from "./search"
import {AlternativeNews, News } from "./news"
import StickyBox from "react-sticky-box"
import {Grid, MessageButton} from './styles'


export const Right = () => {
    return(
        <>
            <Searchbar />
            <StickyBox>
              <News/>
            </StickyBox>
        </>
    )
}

export const AlternativeRight = () => {
    return(
        <>
          <StickyBox>
            <AlternativeNews/>
          </StickyBox>
        </>
    )
}

export const MessageRight = () => {
  return (
    <>
      <Grid>
        <h1 className="text-white">Select Message</h1>
        <p className="text-pratatt">Choose from your existing conversations, start a new one, or just keep swimming.</p>
        <MessageButton><span className="bg-bluett">New Message</span></MessageButton>
      </Grid>
    </>
  )
}