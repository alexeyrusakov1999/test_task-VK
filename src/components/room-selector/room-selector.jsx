function RoomSelector({ room, onChange }) {
  const rooms = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <label>
      Выберите переговорку:
      <select value={room} onChange={onChange}>
        {rooms.map((roomNumber) => (
          <option key={roomNumber} value={roomNumber}>
            {roomNumber}
          </option>
        ))}
      </select>
    </label>
  );
}

export default RoomSelector;
