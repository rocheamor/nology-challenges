import garden from '../assets/garden.jpg'
import Card from '../components/Card/Card';
import FlexWrap from './Flex-wrap/FlexWrap';

const Main = (props) => {
    return (
        <main>
            <FlexWrap>
                <Card image={garden} heading= "This is a Title" subheading= "This is a Subtitle" content= "This is a short description" button= "Click me" />
                <Card image={garden} heading= "This is a Title" subheading= "This is a Subtitle" content= "This is a short description" button= "Click me" />
                <Card image={garden} heading= "This is a Title" subheading= "This is a Subtitle" content= "This is a short description" button= "Click me" />
            </FlexWrap>
        </main>
    )
}

export default Main;