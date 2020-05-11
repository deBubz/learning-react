import React from 'react';
import { VISIBILITY_FILTERS } from '../../constants'

// display filters

const VisibilityFilters = ({ activeFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`filter-${currFilter}`}
                        onClick={() => {} /** wait for filter handler */}
                        >
                        {currFilter}
                    </span>
                )
            })}
            VisibilityFilters
        </div>
    );
}

export default VisibilityFilters;