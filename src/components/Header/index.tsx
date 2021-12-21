import { Container } from './style';
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from '../../common/colors';

interface IProps {
    text: string
}

export const Header: React.FC<IProps> = ({text}) => (
    <Container>
        <p>{text}</p>
        <div style={{flex: 1}}></div>
        <FontAwesomeIcon icon={faLaptop} style={{fontSize: '5rem', color: theme.dark, marginRight: '3rem'}}/>
    </Container>
)