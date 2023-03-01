import styled from '@emotion/styled';

const ContactItem = styled.li`
  display: flex;
  align-items: baseline;

  justify-content: space-around;
  gap: 20px;
  width: 100%;
  padding: 10px;

  color: #ffff;
  border-radius: 15px;
  background-color: #212121;
`;
const Button = styled.button`
  width: 100px;
  height: 28px;
  font-size: 18px;

  color: #212121;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-image: linear-gradient(
      to right,
      #e52d27 0%,
      #b31217 51%,
      #e52d27 100%
    );
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
const ContactName = styled.p`
  display: flex;
  width: 380px;
  justify-content: space-around;

  text-align: center;
  font-size: 18px;
`;

export { ContactItem, ContactName, Button };
