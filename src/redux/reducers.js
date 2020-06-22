const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_BMI_RECORDS':
           return { ...state, loading: true, bmiRecords: [] };
      case 'BMI_RECORDS_RECEIVED':
           return { ...state, bmiRecords: action.json, loading: false }
      default: 
           return state;
    }
   };
   export default reducer;