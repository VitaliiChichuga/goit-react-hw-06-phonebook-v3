import PropTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

Container.defaultProps = {
  children: [],
};
Container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Container;
