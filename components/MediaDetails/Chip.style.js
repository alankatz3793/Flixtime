import styled from 'styled-components';

const Chip = styled.div`
    border-radius: 10rem;
    font-size: 15rem;
    display: inline-block;
    line-height: 1;
    vertical-align: baseline;
    background-color: rgb(26, 26, 26);
    padding: 0.4em 0.6em;
    color: gray;
    font-weight: 400;
    &:not(:last-child){
    margin-right: 12rem;
    }
`;

export default Chip;
