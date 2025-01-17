import { useState } from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calender.css"
import AddEventPopup from "../../Component/Popups/AddEventPopup";
import { asyncThunkGetTask } from "../../redux/createAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
moment.locale("en-GB");

export default function ReactBigCalendar() {

  const [showPopup, setShowPopup] = useState(false);
  const [dateState, setdateState] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { GetContractorTaskInCalenderData } = useSelector(store => store.admin)

  const togglePopup = () => { setShowPopup(!showPopup); };

  const handleDateClick = (e) => {
    let [day, month, year] = e.date.toLocaleDateString('pt-PT').split('/');
    day = day.padStart(2, '0');
    month = month.padStart(2, '0');
    let formattedDate = `${day}/${month}/${year}`;
    setdateState(formattedDate)
    togglePopup()
  };

  const handleDateSet = (e) => {
    let [, month, year] = e.end.toLocaleDateString('pt-PT').split('/');
    let formattedDate = `${month - 1 == 0 ? 12 : month - 1 <= 9 ? `0${month - 1}` : month - 1}/${year}`;
    dispatch(asyncThunkGetTask(formattedDate))
  };

  return (
    <>
      <div className="calender-div">
        {showPopup && (<AddEventPopup dateState={dateState} setShowPopup={setShowPopup} showPopup={showPopup} />)}
        <div className="Full-Calender">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={(e) => handleDateClick(e)}
            events={GetContractorTaskInCalenderData}
            datesSet={(e) => handleDateSet(e)}
            eventContent={renderEventContent}
          />
        </div>
      </div>
    </>
  );
}

function renderEventContent(eventInfo) {
  return (
    <div
      style={
        eventInfo.event.time ? { background: "red" } : { background: "green" }
      }
    >
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
