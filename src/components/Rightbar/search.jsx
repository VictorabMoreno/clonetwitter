import { BiSearch } from "react-icons/bi"
import {Barsearch} from "./styles"

export const Searchbar = () => {
    return(
        <>
         <Barsearch >
            <form className="items-center">
                <BiSearch className="text-pratatt"/>
                <input className="bg-onix" type="text" name="Search" placeholder="busque no twitter" />
            </form>
        </Barsearch>
        </>

    )
}