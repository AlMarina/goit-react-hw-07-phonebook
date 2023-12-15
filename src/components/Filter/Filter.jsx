import { useDispatch, useSelector } from 'react-redux';
import { Container, InputFilter, Label } from './Filter.styled';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filterState = useSelector(state => state.filterStore.filter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(setFilter(evt.target.value.trim().toLowerCase()));
  };

  return (
    <Container>
      <Label>
        Find contacts by name
        <InputFilter
          type="text"
          name="filter"
          required
          onChange={onChange}
          value={filterState}
        />
      </Label>
    </Container>
  );
};
