import React from "react";
import "../App.css";

const Appointment = () => {
  return (
    <div className="appoint-section">
      <div className="appoint-section__drop-down">
        <label>Purpose</label>
        <select>
          <option>Select an option</option>
          <option>Consultation</option>
        </select>
      </div>
      <div className="appoint-section__date-picker" />
      <div className="appoint-section__schedule">
        <div className="appoint-section__schedule--column1">
          <div className="schedule--morning">
            <div className="schedule--weather">
              <ion-icon name="sunny" />
              <br />
              MORNING
            </div>
          </div>

          <div className="schedule--evening">
            <div className="schedule--weather">
              <ion-icon name="partly-sunny" />
              <br />
              EVENING
            </div>
          </div>

          <div className="schedule--night">
            <div className="schedule--weather">
              <ion-icon name="moon" />
              <br />
              NIGHT
            </div>
          </div>
        </div>

        <div className="appoint-section__schedule--column2">
          <div className="schedule--time-slots">
            <div>10:00 AM</div>
            <div>10:30 AM</div>
            <div>11:00 AM</div>
            <div>11:30 AM</div>
            <div>12:00 PM</div>
            <div>-</div>
            <div>01:00 PM</div>
            <div>01:30 PM</div>
            <div>02:00 PM</div>
          </div>
          <div className="schedule--time-slots">
            <div>02:30 PM</div>
            <div>-</div>
            <div>-</div>
            <div>04:00 PM</div>
            <div>04:30 PM</div>
            <div>05:00 PM</div>
            <div>05:30 PM</div>
            <div>06:00 PM</div>
            <div>06:30 PM</div>
          </div>
          <div className="schedule--time-slots">
            <div>07:00 PM</div>
            <div>07:30 PM</div>
            <div>-</div>
            <div>08:30 PM</div>
            <div>09:00 PM</div>
            <div>09:30 PM</div>
            <div>10:00 PM</div>
            <div>-</div>
            <div>-</div>
          </div>
        </div>
      </div>
      <div className="appoint-section__button">
        <a href="#">CONTINUE</a>
      </div>
    </div>
  );
};

export default Appointment;
