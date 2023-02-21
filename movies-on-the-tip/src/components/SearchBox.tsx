import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBox = (props: any) => {
	return (
		<div className='col col-sm-4'>
			<Autocomplete
				value={props.searchValue}
				onChange={(event: any, newValue: string | null) => {
					props.setSearchValue(newValue);
				}}
				inputValue={props.inputValue}
				onInputChange={(event, newInputValue) => {
					props.setInputValue(newInputValue);
				}}
				id="choose-movies-category"
				options={props.options}
				sx={{ width: 300, margin: 1 }}
				renderInput={(params) => <TextField {...params} label="Choose Category" />}
			/>
		</div>
	);
};

export default SearchBox;