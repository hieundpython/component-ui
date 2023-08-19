import React, { useState, useEffect } from "react";
import "./style.css";
import dayjs from "dayjs";
import { Button, TimePicker } from "antd";
import { usePickDateTimeContext } from "./context";

const daysInMonth = 30;

const DayShift = ({ day }: { day: any }) => {
  const { onChangeModalOpen, onChange } = usePickDateTimeContext();

  const [showTime, setShowTime] = useState(false);

  const currentHour = dayjs().hour();

  const disabledTime = (date: dayjs.Dayjs) => {
    const disabledHours: any[] = [];
    const disabledMinutes: any[] = [];

    if (currentHour < 12 && date.hour() >= 12) {
      disabledHours.push(...Array.from({ length: 24 - 12 }, (_, i) => i + 12));
    } else if (currentHour >= 12 && date.hour() < 12) {
      disabledHours.push(...Array.from({ length: 12 }, (_, i) => i));
    }

    if (currentHour < 12 && date.hour() === 12) {
      disabledMinutes.push(...Array.from({ length: 60 }, (_, i) => i));
    }

    return {
      disabledHours: () => [12, 13, 14, 15, 16, 17],
      disabledMinutes: () => disabledMinutes,
    };
  };

  return (
    <>
      <div onClick={() => setShowTime(!showTime)}>Day {day}</div>
      {showTime && (
        <TimePicker
          disabledTime={disabledTime}
          onChange={(value) => {
            onChange(value);
            onChangeModalOpen(false);
          }}
        />
      )}
    </>
  );
};

function MonthSchedule() {
  const [scheduleData, setScheduleData] = useState<any[]>([]);
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs());

  useEffect(() => {
    const timeSlots = 2;
    const generatedData = [];

    for (let day = 0; day < daysInMonth; day++) {
      const dayData = [];

      for (let slot = 0; slot < timeSlots; slot++) {
        const randomValue = Math.floor(Math.random() * 100);
        dayData.push(randomValue);
      }

      generatedData.push(dayData);
    }

    setScheduleData(generatedData);
  }, []);

  const timeSlots = ["Sáng", "Chiều"];

  return (
    <div className="month-schedule">
      <div className="action-button">
        <Button
          onClick={() => {
            setCurrentDate(currentDate.subtract(30, "day"));
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            setCurrentDate(currentDate.add(30, "day"));
          }}
        >
          Next
        </Button>
      </div>

      <table>
        <thead>
          <tr>
            <th className="time-column">Buổi</th>
            {Array.from({ length: daysInMonth }).map((_, dayIndex) => (
              <th key={dayIndex}>
                {" "}
                {currentDate.add(dayIndex, "day").format("DD-MM")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((timeSlot, slotIndex) => (
            <tr key={slotIndex}>
              <td className="time-column">{timeSlot}</td>
              {scheduleData.map((dayData, dayIndex) => (
                <td key={dayIndex}>
                  <DayShift day={dayData[slotIndex]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MonthSchedule;
