import css from './Filter.module.css'
const Filter = ({ value, onChangeFilter }) => {
    return (
      <div>
        <label className={css.label}>
          Find contacts by name
                <input className={css.input} type="text" value={value} onChange={onChangeFilter} />
        </label>
      </div>
    );
};
export default Filter;