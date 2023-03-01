import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;

  & span {
    font-weight: 500;
    margin-bottom: 15px;
  }
`;
const Input = styled.input`
  height: 35px;
  width: 400px;
  padding-left: 15px;

  font-size: 16px;
  border: none;
  border-radius: 5px;
  outline: yellow;

  &:focus,
  &:hover {
    border: 2px solid #212121;
  }
`;

export { Label, Input };
