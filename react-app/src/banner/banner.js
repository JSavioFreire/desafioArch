import { BanneraAll,SubCarousel,Boxes,Box,Icon,P } from "./styleBanner"
import { Eighty } from "../styleGlobal"

import { BsTruck, BsCreditCard2Front } from 'react-icons/bs';
import { MdSecurity } from 'react-icons/md';

import Carousel from "./carousel/carousel"

export default function Banner(){

    return(
        <BanneraAll>
            <Eighty>
                <SubCarousel>
                    <Carousel/>
                </SubCarousel>
                <Boxes>
                    <Box>
                        <Icon>
                            <BsTruck/>
                        </Icon>
                        <P>We deliver anywhere</P>
                    </Box>
                    <Box>
                        <Icon>
                            <BsCreditCard2Front/>
                        </Icon>
                        <P>We accept credit cards</P>
                    </Box>
                    <Box>
                        <Icon>
                            <MdSecurity/>
                        </Icon>
                        <P>Secure website</P>
                    </Box>
                </Boxes>
            </Eighty>
        </BanneraAll>
    )
}