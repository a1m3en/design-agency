
import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: var(--background);
  color: var(--white);
  min-height: 80px;
  position: relative;
  z-index: 10;
`;

const Logo = styled.img`
  height: 48px;
  width: auto;
  object-fit: contain;
  margin-right: 2rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: var(--white);
`;

const ListItem = styled.li`
  cursor: pointer;
  font-weight: 600;
  font-size: 1.08rem;
  letter-spacing: 0.5px;
  color: var(--white);
  transition: opacity 0.2s, color 0.2s;
  opacity: 0.85;
  &:hover {
    opacity: 1;
    color: var(--primary);
    text-decoration: underline;
  }
`;

const Auth = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const LoginButton = styled.button`
  background: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 12px;
  padding: 0.6rem 1.6rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: var(--gray);
    color: var(--primary);
  }
`;
export default function Navbar() {
  return (
    <Nav>
      <Logo src="/logo192.png" alt="Logo" />
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Features</ListItem>
        <ListItem>Price</ListItem>
        <ListItem>Insights</ListItem>
        <ListItem>Contact</ListItem>
      </List>
      <Auth>
        <FaUserCircle size={30} color="#C6ABAB" />
        <LoginButton>Login</LoginButton>
      </Auth>
    </Nav>
  );
}