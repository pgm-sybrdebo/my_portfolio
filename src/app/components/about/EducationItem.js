import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  padding: 1rem 0;
  margin-left: -8px;

  &:first-child {
    padding-top: 0.2rem;
  }

  &:last-child {
    padding-bottom: 0.2rem;
  }

  &::before {
    content: '';
    display: inline-block;
    margin-right: 1.375rem;
    margin-top: 0.25rem;
    background: ${props => props.theme.colors.primaryAccentColor};
    min-width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
`;

const Years =  styled.span`
  margin-right: 1.5rem;
`;

const Bold = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Small = styled.span`
  font-size: ${props => props.theme.fontSizes.esmall};
`;

const EducationItem = ({edu}) => {
  return (
    <ListItem>
      <Years>{edu.years}</Years>
      <div>
        <Bold>{edu.diploma}</Bold>
        <Small>{edu.subject} </Small>
        <Bold>{edu.specification}</Bold>
        <Small> {edu.honours}</Small>
        <Small> at </Small>
        <span>{edu.place}</span>
      </div>
      
    </ListItem>
  )
}

export default EducationItem
