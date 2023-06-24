import { useSelector, useDispatch } from 'react-redux';
import { filterSelect } from 'redux/selectors';
import { updateFilter } from '../../redux/slice';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(filterSelect);

  const dispatch = useDispatch();

  const filterChangeHandler = evt => {
    const filterValue = evt.currentTarget.value;

    dispatch(updateFilter(filterValue));
  };

  return (
    <div className={css.filter}>
      <label className={css.filter__label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={filterChangeHandler}
      />
    </div>
  );
};
