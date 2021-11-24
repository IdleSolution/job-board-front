import { Container, Header, Input, Tags } from "./style"

export const Filters = () => (
    <Container>
        <Header>
            <h2>Filtruj firmy</h2>
        </Header>

        <Input>
            <p>Nazwa</p>
            <input />
        </Input>

        <Tags>
            <p>Tagi</p>
            <div>
                <input type="checkbox" id="nodejs" name="Node.js"/>
                <label>Node.js</label>
            </div>
            <div>
                <input type="checkbox" id="js" name="Javascript"/>
                <label>Javascript</label>
            </div>
            <div>
                <input type="checkbox" id="react" name="React"/>
                <label>React</label>
            </div>
            <div>
                <input type="checkbox" id="cs" name="C#"/>
                <label>C#</label>
            </div>
        </Tags>
    </Container>
)