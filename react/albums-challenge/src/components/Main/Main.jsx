import Album from '../Album/Album'
import FlexWrap from '../FlexWrap/FlexWrap'

const Main = () => {
    return (
    <main>
        <FlexWrap>
            <Album title='Lover' band= 'Taylor Swift' rating= '5' coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Taylor_Swift_-_Lover.png/220px-Taylor_Swift_-_Lover.png' />
            <Album title='Once Upon Another Time' band= 'Sara Bareilles' rating= '4' coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/a/af/OnceUponAnotherTime_cover.jpg/220px-OnceUponAnotherTime_cover.jpg'/>
            <Album title='Crazy Love' band= 'Michael Bublé' rating= '5' coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Crazy_Love_cover.png/220px-Crazy_Love_cover.png' />
            <Album title='Love Is a Four Letter Word' band= 'Jason Mraz' rating= '5' coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Loveisafourletterword-mraz.jpg/220px-Loveisafourletterword-mraz.jpg' />
            <Album title="Breakthrough" band= 'Colbie Caillat' rating= '4' coverUrl='https://i.discogs.com/2yR3MLxMu6d_WSJpSrTqWTSuPTgxlqU3DXIwLWgmUKI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMDA5/NjgtMTI2NDA0OTg3/MS5qcGVn.jpeg'/>
            <Album title='Blessed' band= 'Hillsong' rating= '5' coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Hillsong_-_Blessed.jpg/220px-Hillsong_-_Blessed.jpg' />
            <Album title='We Will Not Be Shaken' band= 'Bethel Music' rating= '5' coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/We_Will_Not_Be_Shaken_by_Bethel_Music.jpg/220px-We_Will_Not_Be_Shaken_by_Bethel_Music.jpg'/>
            <Album title='This 15 Me' band= 'Sarah Geronimo' rating= '4' coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/1/10/This15mealbum.jpg/220px-This15mealbum.jpg'/>
            <Album title='Limasawa Street' band= 'Ben&Ben' rating= '4' coverUrl='https://upload.wikimedia.org/wikipedia/en/7/7e/Ben%26Ben_-_Limasawa_Street.png'/>
        </FlexWrap>
    </main>
    )
}

export default Main; 