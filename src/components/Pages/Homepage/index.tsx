import { CardsAndFilterContainer } from '../../CompanyCards/style';
import { Filters } from '../../Filters';
import { CompanyCards } from '../../CompanyCards';
import { Header } from '../../Header';
import { Container } from './style';

export const Homepage = () => (
    <Container>
      <Header text='Najlepsze firmy stażowe'/>
      <CardsAndFilterContainer>
        <Filters />
        <CompanyCards />
      </CardsAndFilterContainer>
    </Container>

)