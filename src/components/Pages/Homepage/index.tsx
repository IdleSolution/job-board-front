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
  const [companiesFiltered, setCompaniesFiltered] = useState<ICompanyPreview[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [chosenTags, setChosenTags] = useState<string[]>([]);
  const [currentSearch, setCurrentSearch] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:5000/api/Companies');
      setCompanies(res.data);
      setCompaniesFiltered(companies);

      const allTags = new Set<string>();
      companies.forEach(company => {
        company.tags.forEach(tag => allTags.add(tag))
      });
      
      setTags(Array.from(allTags));
      setChosenTags(Array.from(allTags));
    })();
  }, [])


  const onSearchName = (e: any) => {
    const searchValue = e.target.value;
    setCurrentSearch(searchValue);
  }

  const onFilterTag = (e: any) => {
    const tag = e.target.name;
    if(chosenTags.includes(tag)) {
      const newTags = chosenTags.filter(t => t !== tag);
      setChosenTags(newTags);
    } else {
      const newTags = [...chosenTags, tag];
      console.log(newTags)
      setChosenTags(newTags);
    }
  }

  useEffect(() => {
    const newCompanies = companies.filter(company => {
      return company.name.toLowerCase().startsWith(currentSearch.toLowerCase()) &&
      company.tags.some(tag => chosenTags.includes(tag))
    });
    setCompaniesFiltered(newCompanies);
  }, [currentSearch, chosenTags])

  return (
    <Container>
      <Header text='Najlepsze firmy stażowe'/>
      <CardsAndFilterContainer>
        <Filters onSearchName={onSearchName} tags={tags} onFilterTag={onFilterTag}/>
        {companies ? (
          <CompanyCards companies={companiesFiltered}/>
        ): <div style={{textAlign: 'center', marginTop: '5rem', fontSize: '5rem', width: '70%'}}>Loading...</div>}
      </CardsAndFilterContainer>
    </Container>
  )
}