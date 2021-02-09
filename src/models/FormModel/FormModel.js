function FormModel() {

    let plans = [
        {name: 'plan 1'},
        {name: 'plan 2'},
        {name: 'plan 3'},
        {name: 'plan 4'},
        {name: 'plan 5'},
    ];
    let facilityTypes = [
        {name: 'facility type 1'},
        {name: 'facility type 2'},
        {name: 'facility type 3'},
        {name: 'facility type 4'},
        {name: 'facility type 5'},
    ];
    let counties = [
        {name: 'county 1'},
        {name: 'county 2'},
        {name: 'county 3'},
        {name: 'county 4'},
        {name: 'county 5'},
    ];
    
    let data = {
        planName: '',
        county: '',
        facilityType: '',
        effectiveDate: ''
    }

    // power
    function fetchPlan() {};

    function fetchFacilityTypes() {};

    function fetchCounties() {};

    function validate(inputs) {
        return !!inputs;
    }
    


    const getData = () => data;
    const getPlans = () => plans;
    const getFacilityTypes = () => facilityTypes;
    const getCounties = () => counties;

    // api
    return {
        fetchPlan, 
        fetchFacilityTypes, 
        fetchCounties, 
        getData,
        getPlans,
        getCounties, 
        getFacilityTypes,
        validate,
    }
}


export default FormModel;