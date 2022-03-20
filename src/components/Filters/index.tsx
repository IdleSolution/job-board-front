import { Container, Input, Tags, TagsContainer } from "./style"
import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

interface IProps {
    onSearchName: (e: any) => void;
    onFilterTag: (e: any) => void;
    tags: string[];
}

export const Filters: React.FC<IProps> = ({onSearchName, onFilterTag, tags}) => {
    const [showTags, setShowTags] = useState(true);

    return (
        <Container>
            <Input>
                <input placeholder='Nazwa firmy...' onChange={onSearchName}/>
            </Input>

            <Tags>
                <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => setShowTags(!showTags)}>
                    <h3 style={{marginRight: '.3rem'}}>Filtruj po tagach </h3>
                    {showTags ? (
                        <FontAwesomeIcon icon={faAngleDown} />
                    ) : <FontAwesomeIcon icon={faAngleRight} />}

                </div>
                <TagsContainer style={{display: showTags ? 'flex' : 'none'}}>
                    {tags.map(tag => (
                        <div>
                            <input type="checkbox" id={tag} name={tag} onChange={onFilterTag} defaultChecked={true}/>
                            <label htmlFor={tag}>{tag}</label>
                        </div>
                    ))}
                </TagsContainer>
            </Tags>
        </Container>
    )

}