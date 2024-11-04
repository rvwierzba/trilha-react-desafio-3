import { useNavigate } from "react-router-dom";
import bannerImage from '../../assets/banner.png';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Container, Title, TitleHighlight, TextContent } from './styles';

const Home = () => {
    const navigate = useNavigate();

    // Função para navegar até a página de login
    const handleClickSignIn = () => {
        navigate('/login');
    }

    // Função para navegar até a página de cadastro
    const handleClickSignUp = () => {
        navigate('/signup');
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
                    <Button title="Cadastre-se" variant="primary" onClick={handleClickSignUp} style={{ marginLeft: '10px' }} />
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem principal do site." />
                </div>
            </Container>
        </>
    );
}

export { Home };
