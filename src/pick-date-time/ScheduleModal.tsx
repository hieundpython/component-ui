import React from "react";
import MonthSchedule from "./MonthSchedule";
import { CloseOutlined } from "@ant-design/icons";

function ScheduleModal({ onClose }: { onClose: any }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <CloseOutlined />
        </button>
        <MonthSchedule />
      </div>
    </div>
  );
}

export default ScheduleModal;
