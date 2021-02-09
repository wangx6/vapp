import React from 'react'
import FormModel from '../models/FormModel/FormModel';


export default function Form() {
    //model/state
    const formModel = FormModel();
    const plans = formModel.getPlans();
    const counties = formModel.getCounties();
    const facilityTypes = formModel.getFacilityTypes();

    // controller space
    function onClickSearchFacilityBtn() {
        const rs = formModel.validate({});

        if(rs) {
            console.log('go to search result page');
            // route to search page
        } else {
            return
        }
    }

    const onChangePlanNameDropdown = (value) => {
        console.log(value);
    }

    return (
        <div>
            <div>
                <select placeholder="" onChange={(evt) => {onChangePlanNameDropdown(evt.target.value)}}>
                    {plans.map(p => <option key={p.name}>{p.name}</option>)}
                </select>
            </div>

            <div>
                <select placeholder="">
                    {counties.map(c => <option key={c.name}>{c.name}</option>)}
                </select>
            </div>

            <div>
                <select placeholder="">
                    {facilityTypes.map(ft => <option key={ft.name}>{ft.name}</option>)}
                </select>

            </div>
            <button onClick={onClickSearchFacilityBtn}>Search Facilities Now</button>
        </div>
    )
}
