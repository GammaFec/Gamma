import styled from "styled-components";

const Paragraph = styled.p`
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
`;

const ItemList = styled.li`
    margin: 0 1rem;
    font-size: 1.5rem;
`;

const Facebook = styled.li`
    color: #3b5998;
`;
const Google = styled.li`
    color: #db4a39;
`;
const Twitter = styled.li`
    color: #00acee;
`;

export { Paragraph, List, ItemList, Facebook, Google, Twitter };
