import { CardsAndFilterContainer } from '../../CompanyCards/style';
import { Filters } from '../../Filters';
import { CompanyCards } from '../../CompanyCards';
import { Header } from '../../Header';
import { Container } from './style';
import { useEffect, useState } from 'react';
import { ICompanyPreview } from '../../../common/interfaces/CompanyPreview.interface';
import axios from 'axios';

export const Homepage = () => {

  const [companies, setCompanies] = useState<ICompanyPreview[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:5000/api/Companies');
      setCompanies(res.data);
    })();
  }, [])

  return (
    <Container>
      <Header text='Najlepsze firmy stażowe'/>
      <CardsAndFilterContainer>
        <Filters />
        {companies ? (
          <CompanyCards companies={companies}/>
        ): <div style={{textAlign: 'center', marginTop: '5rem', fontSize: '5rem', width: '70%'}}>Loading...</div>}
      </CardsAndFilterContainer>
    </Container>
  )
}