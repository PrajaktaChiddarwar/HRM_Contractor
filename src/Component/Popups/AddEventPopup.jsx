import { useState } from 'react';
import './New.css';
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { asyncThunkAddContractor, asyncThunkCreateTask, asyncThunkGetContractor } from '../../redux/createAsyncThunk';
import { Button } from '@mui/material';


// eslint-disable-next-line react/prop-types
function AddEventPopup({ setShowPopup, dateState }) {

  const [timesheetDetails, setTimesheetDetails] = useState({});
  const dispatch = useDispatch();

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => { setTimesheetDetails((prev) => { prev[e.target.name] = e.target.value; return { ...prev } }) };

  const handleAddEvents = () => {
    const payload = {
      "date": dateState, ...timesheetDetails

      // "task": timesheetDetails.task,
      // "workingHour": timesheetDetails.workingHour
    }
    dispatch(asyncThunkCreateTask(payload))
    // dispatch(asyncThunkGetContractor(1));
    closePopup();
  };

  return (
    <div className="popup">
      <div className="popup" onClick={closePopup}></div>
      <div className="popup-inner">
        <h2>Add Timesheet</h2>
        <form>
          <label htmlFor="date">Date:</label>
          <input type="text" id="date" name="date" disabled value={dateState} />

          <label htmlFor="task">Task:</label>
          <input type="text" id="task" name="task" value={timesheetDetails.task} onChange={handleInputChange} />

          <label htmlFor="time">Working Hours:</label>
          <input type="number" id="time" name="workingHour" value={timesheetDetails.workingHour} onChange={handleInputChange} />

          <button disabled={timesheetDetails?.task && timesheetDetails?.workingHour ? false : true} style={{ cursor: !timesheetDetails?.task && !timesheetDetails?.workingHour && 'no-drop' }} type="button" className='add-button' onClick={handleAddEvents}>ADD</button>
          <Button variant="outlined" color="error" sx={{ mt: "15px" }} onClick={closePopup}>Close</Button>
        </form>
      </div>
    </div>
  );
}

export default AddEventPopup;