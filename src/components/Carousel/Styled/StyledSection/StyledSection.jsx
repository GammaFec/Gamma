import styled from 'styled-components';

const StyledSection = styled.section`
  z-index: ${(props) => (props.active ? '10' : '-10')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: ${(props) => (props.active ? '2s' : '1s')} ease;
  position: absolute;

  width: 100%;
  height: 25rem;
  top: 0;
`;

export default StyledSection;
