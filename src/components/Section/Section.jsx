import { SectionEl, Title } from './Section.styled';
import { Container } from './Container.styled.js';

export default function Section({ title, children }) {
  return (
    <SectionEl>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionEl>
  );
}
