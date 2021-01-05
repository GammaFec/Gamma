import styled from 'styled-components';

const StyledSection = styled.section`
  z-index: ${(props) => (props.active ? '10' : '-10')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: ${(props) => (props.active ? '2s' : '1s')} ease;
  position: absolute;

  width: 100%;
  height: 30rem;
  top: 0;

  & > img {
    width: 70%;
    max-width:300px;
    height: auto;
    padding: 1rem;
  }

  & > p {
    margin: 2rem 2rem;
  }
`;

export default StyledSection;
