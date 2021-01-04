import styled from 'styled-components';

const StyledDot = styled.button`
margin-right: 1rem;
height: 25px;
width: 25px;
border-radius: 15px;
margin: 0 1rem;
background-color: ${props => props.active ? 'blue' : 'grey'};
transition: ${(props) => (props.active ? '2s' : '1s')} ease;
cursor: pointer;

`;

export default StyledDot;
