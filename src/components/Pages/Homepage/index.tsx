import { CardsAndFilterContainer } from '../../CompanyCards/style';
import { Filters } from '../../Filters';
import { CompanyCards } from '../../CompanyCards';
import { Header } from '../../Header';
import { Container } from './style';
import { useEffect, useState } from 'react';
import { ICompanyPreview } from '../../../common/interfaces/CompanyPreview.interface';
import axios from 'axios';
import Spinner from "../../Spinner";

export const Homepage = () => {

  const [companies, setCompanies] = useState<ICompanyPreview[]>([]);
  const [companiesFiltered, setCompaniesFiltered] = useState<ICompanyPreview[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [chosenTags, setChosenTags] = useState<string[]>([]);
  const [currentSearch, setCurrentSearch] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/Companies');
        const companiesData: ICompanyPreview[] = res.data;
        setCompanies(companiesData);
        setCompaniesFiltered(companiesData);

        const allTags = new Set<string>();
        companiesData.forEach(company => {
          company.tags.forEach(tag => allTags.add(tag))
        });

        setTags(Array.from(allTags));
        setChosenTags(Array.from(allTags));
      } catch(e: any) {
        console.log(e);
      }
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
        <Filters onSearchName={onSearchName} tags={tags} onFilterTag={onFilterTag}/>
        <CompanyCards companies={companiesFiltered}/>
    </Container>
  )
}