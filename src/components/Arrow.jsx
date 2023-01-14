import { VscFoldDown } from 'react-icons/vsc';
import { Div, LinkStyled } from './ArrowStyles';

export function Arrow({ linkPath, home }){
    return(
        <Div
            initial={{ y: -20, scale: 1.02 }}
            animate={{
                y: -10,
                scale: 1,
                transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeIn"
                }
            }}
            home={home}
        >
            <LinkStyled to={`/${linkPath}`}>
                <VscFoldDown  size={40}/>
            </LinkStyled>
        </Div>
    )
};