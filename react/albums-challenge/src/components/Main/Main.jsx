import Album from '../Album/Album'
import FlexWrap from '../FlexWrap/FlexWrap'
import s from './Main.module.scss';

const Main = () => {
    return (
    <main>
        <FlexWrap>
            <Album title='Higher Lonely Power' bandName= 'Fireworks' rating= '5' />
            <Album title='Koe' bandName= 'SixTones' rating= '3' />
            <Album title='Every Loser' bandName= 'Iggy Pop' rating= '5' />
            <Album title='Humor' bandName= 'Ladytron' rating= '7' />
            <Album title="Time's Arrow" bandName= 'Fireworks' rating= '4' />
            <Album title='Music World' bandName= 'ALI' rating= '5' />
            <Album title='Furling' bandName= 'Meg Baird' rating= '8' />
            <Album title='Asking for a Ride' bandName= 'White Reaper' rating= '4' />
        </FlexWrap>
    </main>
    )
}

export default Main; 