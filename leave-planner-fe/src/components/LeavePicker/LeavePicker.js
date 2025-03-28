import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import './LeavePicker.css';

function LeavePicker() {
    // const [datePicker, setDatePicker] = useState(new Date());
    const [monthPicker, setMonthDatePicker] = useState([]);


    const SubmitPlaner = () => {
        const formteDate = monthPicker.map((date) => {
            console.log(date.format());
            return date.format();
        });
        console.log('event data ::', formteDate);
        let sorted = formteDate.sort((current, previous) =>{
            let currentDate = new Date(current);
            let previousDate = new Date(previous);
           console.log('currentDate - previousDate::', (currentDate - previousDate))
            return currentDate - previousDate;
        });
        console.log('sorted data ::', sorted);

    }
    return <React.Fragment>
        Calender :
        <Calendar
            numberOfMonths={3}
            disableMonthPicker
            disableYearPicker
            multiple
            arrow={false}
            value={monthPicker}
            onChange={setMonthDatePicker}
        ></Calendar>


        {/* <DatePicker value={datePicker} multiple range onChange={setDatePicker} />; */}
        <div className="footer-section d-flex">
            <Button className="btn btn-submit" onClick={SubmitPlaner}>Submit </Button>
        </div>
    </React.Fragment>

}


export default LeavePicker;