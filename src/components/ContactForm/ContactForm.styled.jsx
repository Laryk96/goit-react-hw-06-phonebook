import { Form as Forma, Field } from 'formik';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 500;
`;

const Form = styled(Forma)`
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  background-color: #212121;
  border-radius: 15px;
  gap: 30px;
  margin-bottom: 30px;

  & span {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Input = styled(Field)`
  height: 35px;
  width: 235px;
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  outline: yellow;

  &:focus,
  &:hover {
    border: 2px solid orange;
  }
`;

const Button = styled.button`
  display: block;
  margin: 10px;
  padding: 15px 45px;

  background-image: linear-gradient(
    to right,
    #f09819 0%,
    #edde5d 51%,
    #f09819 100%
  );

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #212121;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;
export { Label, Form, Input, Button };
