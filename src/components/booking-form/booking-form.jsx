import "./booking-form.css";
import { useState, useCallback } from "react";
import TowerSelector from "../tower-selector/tower-selector";
import CommentInput from "../comment-input/comment-input";
import DateTimeInput from "../date-time-input/date-time-input";
import FloorSelector from "../floor-selector/floor-selector";
import ResetButton from "../reset-button/reset-button";
import RoomSelector from "../room-selector/room-selector";
import SubmitButton from "../submit-button/submit-button";

function BookingForm() {
  const [tower, setTower] = useState("A");
  const [floor, setFloor] = useState("3");
  const [room, setRoom] = useState("1");
  const [datetime, setDatetime] = useState("");
  const [comment, setComment] = useState("");

  const handleTowerChange = useCallback((event) => {
    setTower(event.target.value);
  }, []);

  const handleFloorChange = useCallback((event) => {
    setFloor(event.target.value);
  }, []);

  const handleRoomChange = useCallback((event) => {
    setRoom(event.target.value);
  }, []);

  const handleDatetimeChange = useCallback((event) => {
    setDatetime(event.target.value);
  }, []);

  const handleCommentChange = useCallback((event) => {
    setComment(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(
        `Башня: ${tower}, Этаж: ${floor}, Переговорка: ${room}, Дата и время: ${datetime}, Комментарий: ${comment}`
      );
    },
    [tower, floor, room, datetime, comment]
  );

  const handleReset = useCallback(() => {
    setTower("A");
    setFloor("3");
    setRoom("1");
    setDatetime("");
    setComment("");
  }, []);

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <TowerSelector tower={tower} onChange={handleTowerChange} />
      <FloorSelector floor={floor} onChange={handleFloorChange} />
      <RoomSelector room={room} onChange={handleRoomChange} />
      <DateTimeInput datetime={datetime} onChange={handleDatetimeChange} />
      <CommentInput comment={comment} onChange={handleCommentChange} />
      <SubmitButton onSubmit={handleSubmit} />
      <ResetButton onReset={handleReset} />
    </form>
  );
}

export default BookingForm;
