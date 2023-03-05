import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../redux/contacts';
import { setFilter } from '../../redux/contacts/filterSlice';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <>
      {/* <p className={styles.p}>Find contacts by name</p> */}
      {/* <input
        className={styles.inputText}
        type="text"
        onChange={onChange}
        value={filter}
      /> */}
      <TextField
        id="input-with-icon-textfield"
        label="Search for contacts"
        onChange={onChange}
        value={filter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        fullWidth
        sx={{ marginTop: '50px' }}
      />
    </>
  );
};

export default Filter;
