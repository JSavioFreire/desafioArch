import { BanneraAll,SubCarousel,Boxes,Box,Icon,P } from "./styleBanner";
import { Eighty } from "../styleGlobal";

import { BsTruck, BsCreditCard2Front } from 'react-icons/bs';
import { MdSecurity } from 'react-icons/md';

import Tilt from 'react-parallax-tilt';

import Carousel from "./carousel/carousel";

export default function Banner(){

    return(
        <BanneraAll>
            <Eighty>
                <SubCarousel>
                    <Carousel/>
                </SubCarousel>
                <Boxes>
                    <Tilt>
                        <Box>
                            <Icon>
                                <BsTruck/>
                            </Icon>
                            <P>We deliver anywhere</P>
                        </Box>
                    </Tilt>
                    <Tilt>
                        <Box>
                            <Icon>
                                <BsCreditCard2Front/>
                            </Icon>
                            <P>We accept credit cards</P>
                        </Box>
                    </Tilt>
                    <Tilt>
                        <Box>
                            <Icon>
                                <MdSecurity/>
                            </Icon>
                            <P>Secure website</P>
                        </Box>
                    </Tilt>
                </Boxes>
            </Eighty>
        </BanneraAll>
    )
}