import { BanneraAll,SubCarousel,Boxes,Box } from "./styleBanner"
import { Eighty } from "../styleGlobal"

import Carousel from "./carousel/carousel"

export default function Banner(){

    return(
        <BanneraAll>
            <Eighty>
                <SubCarousel>
                    <Carousel/>
                </SubCarousel>
                <Boxes>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Boxes>
            </Eighty>
        </BanneraAll>
    )
}