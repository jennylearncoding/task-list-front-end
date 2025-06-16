import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, onToggle, onDelete }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => onToggle(id)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={()=> onDelete(id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
