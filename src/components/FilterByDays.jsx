
function FilterByDays({filterDaysOptions, onOptionChange, current}) {

    return(
    <div className="flex row mx-auto mt-8">
        <p className="text-md text-white pr-4">
            Filter by
        </p>

        <select 
        aria-label="select by days"
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