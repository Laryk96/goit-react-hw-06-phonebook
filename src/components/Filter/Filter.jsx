import { useDispatch, useSelector } from 'react-redux';
import { toFilter } from 'redux/FilterSlice';
import { getFilter } from 'redux/selectors';
import { Input, Label } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handelFilterChange = e => {
    dispatch(toFilter(e.target.value.toLowerCase()));
  };

  return (
    <Label>
      <span>Find contacts by name</span>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handelFilterChange}
      />
    </Label>
  );
};

export default Filter;
