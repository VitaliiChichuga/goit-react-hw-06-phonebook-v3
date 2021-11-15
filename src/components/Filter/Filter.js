import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { filterContact } from '../../redux/contacts/actions';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      />
    </label>
  );
};

Filter.propType = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default Filter;
