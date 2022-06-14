import { Searchbar } from "./search"
import {AlternativeNews, News } from "./news"
import StickyBox from "react-sticky-box"


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