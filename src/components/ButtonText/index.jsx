import { Container } from './styles';

export function ButtonText({title, isActive = false, ...rest}) {
    return(
        <Container type="button" {...rest} isActive={isActive}>
            {title}
        </Container>

    );
}