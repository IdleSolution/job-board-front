import { Container, Header, Input, Tags } from "./style"

interface IProps {
    onSearchName: (e: any) => void;
    onFilterTag: (e: any) => void;
    tags: string[];
}

export const Filters: React.FC<IProps> = ({onSearchName, onFilterTag, tags}) => {
    return (
        <Container>
            <Header>
                <h2>Filtruj firmy</h2>
            </Header>

            <Input>
                <p>Nazwa</p>
                <input onChange={onSearchName}/>
            </Input>

            <Tags>
                <p>Tagi</p>
                {tags.map(tag => (
                    <div>
                        <input type="checkbox" id={tag} name={tag} onChange={onFilterTag} defaultChecked={true}/>
                        <label htmlFor={tag}>{tag}</label>
                    </div>
                ))}
            </Tags>
        </Container>
    )

}