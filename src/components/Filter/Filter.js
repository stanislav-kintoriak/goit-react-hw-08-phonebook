import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/phonebook/phonebookSelectors';
import { updateFilter } from 'redux/phonebook/phonebookSlice';
import Input from 'components/Input/Input';
import css from './Filter.module.scss';

const Filter = () => {
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  const filterChangeHandler = evt => {
    const filterValue = evt.currentTarget.value;

    dispatch(updateFilter(filterValue));
  };

  return (
    <div className={css.filter}>
      <Input
        label="Find contacts by name"
        type="text"
        name="filter"
        value={filter}
        handler={e => filterChangeHandler(e)}
        required={false}
      />
    </div>
  );
};

export default Filter;
