import ScheduleModal from "./ScheduleModal";
import { Input } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { PickDateTimeProvider, usePickDateTimeContext } from "./context";

type Props = {
  value: any;
  onChange: (value: any) => void;
};

export const PickDateTime = (props: Props) => {
  return (
    <>
      <PickDateTimeProvider {...props}>
        <PickDateTimeInput />
      </PickDateTimeProvider>
    </>
  );
};

const PickDateTimeInput = () => {
  const { modalOpen, onChangeModalOpen, value } = usePickDateTimeContext();
  
  const openModal = () => {
    onChangeModalOpen(true);
  };

  const closeModal = () => {
    onChangeModalOpen(false);
  };

  return (
    <>
      <Input
        addonAfter={<CalendarOutlined onClick={openModal} />}
        value={value}
      />
      {modalOpen && <ScheduleModal onClose={closeModal} />}
    </>
  );
};
