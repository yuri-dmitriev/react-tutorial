import './footer.css';
import PropTypes from 'prop-types';

const FILTER_BTNS = [
  {
    id: 'all',
    title: 'All',
  },
  {
    id: 'active',
    title: 'Active',
  },
  {
    id: 'completed',
    title: 'Completed',
  },
];

const Footer = ({ tasksLeft, activeFilter, changeFilter }) => (
  <footer className="footer">
    <span className="tasks-left">{`${tasksLeft} tasks left`}</span>
    <div className="btn-group">
      {FILTER_BTNS.map(({ id, title }) => (
        <button
          key={id}
          className={activeFilter === id ? 'filter-btn active' : 'filter-btn'}
          onClick={() => changeFilter(id)}
        >{title}</button>
      ))}
    </div>
  </footer>
);

Footer.propTypes = {
  tasksLeft: PropTypes.number,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
};

Footer.defaultProps = {
  tasksLeft: 0,
  activeFilter: 'all',
  changeFilter: () => {},
};

export default Footer;
