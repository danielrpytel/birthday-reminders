
function FilterByDays({filterDaysOptions, onOptionChange, current}) {

    return(
    <div className="flex row m-auto mb-5">
        <p className="text-md text-white pr-4">
            Filter by
        </p>

        <select 
        className="flex"
        value={current}
        onChange={(e) => {onOptionChange(e.target.value)}}
        >
            {filterDaysOptions.map((option) => (
                <option key={option} value={option}>
                    {option} days
                </option>
            ))}
        </select>
    </div>
)}

export default FilterByDays;
/*

        */