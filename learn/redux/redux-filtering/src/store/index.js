import generate from '../helper'
// import actions from './actions'
// reducers and actions


const initialState ={
    appliedFilters: [],
};

// actions const

const LOAD_DATA = 'LOAD_DATA';
const FILTER_BY_VALUE = 'FILTER_BY_VALUE';

export const loadData = payload => ({
    type: LOAD_DATA,
    payload
});
export const filterByValue = payload => ({
    type: FILTER_BY_VALUE,
    payload
})


// -------------------------------------------------------------
// reducer


const filterStore = (state = initialState, action) => {
    switch (action.type) {
        // -------------------------------------------------------------
        case LOAD_DATA:         // load data
            let count = action.payload.count;
            let products = generate(count);
            return { ...state, products, filteredProduct: products, };
        // -------------------------------------------------------------
        case FILTER_BY_VALUE:   // filter by value
            // clone state    
            let newState = Object.assign({}, state);
            // value passed from presentational component
            let value = action.payload.value;
            let filteredValue = state.products.filter(product => {
                console.log(value + " " + product.name)
                return product.name.toLowerCase().includes(value) || product.designer.toLowerCase().includes(value) || product.price.includes(value); 
            });

            // something to do with state
            let appliedFilters = state.appliedFilters;

            // if text value is not empty
            if (value) {
                // check if there is a filter in the tracking array
                let index = appliedFilters.indexOf(FILTER_BY_VALUE);

                // add filter if it doesnt exist
                if(index ===-1 )    
                    appliedFilters.push(FILTER_BY_VALUE);
                // appliedFilters = addFilterIfNotExist(FILTER_BY_VALUE, appliedFilters);
                
                // changed filtered product to reflect change
                newState.filteredProduct = filteredValue;
                // newState.filteredCount = newState.filteredProduct.length;
            } else {
                // if search box is empty
                // appliedFilters = removeFilter(FILTER_BY_VALUE, appliedFilters);
                let index = appliedFilters.indexOf(FILTER_BY_VALUE);
                // remove current filter
                appliedFilters.splice(index, 1);

                if(appliedFilters.length === 0) {
                    newState.filteredProduct = newState.products;
                }
            }
            return newState;
        // ----------------------------------------------------------------------
        default:
            return state;
    }
};
export default filterStore;

// // misc func
// function addFilterIfNotExist(filter, appliedFilters) {
//     let index = appliedFilters.indexOf(filter);
//     if (index === -1) appliedFilters.push(filter);

//     return appliedFilters;
// }

// function removeFilter(filter, appliedFilters) {
//     let index = appliedFilters.indexOf(filter);
//     appliedFilters.splice(index, 1);

//     return appliedFilters;
// }
