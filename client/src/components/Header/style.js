import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.surface};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const ProfilesLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray};
  font-weight: bold;
  margin: 0 10px;
  &:hover {
    color: ${(props) => props.theme.colors.darkGray};
  }
`;

export const Logo = styled.i`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.blue};
  padding: 7px 12px;
  display: block;
`;
