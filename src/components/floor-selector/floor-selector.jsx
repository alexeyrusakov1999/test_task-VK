function FloorSelector({ floor, onChange }) {
  const floors = Array.from({ length: 25 }, (_, i) => i + 3);

  return (
    <label>
      Выберите этаж:
      <select value={floor} onChange={onChange}>
        {floors.map((floorNumber) => (
          <option key={floorNumber} value={floorNumber}>
            {floorNumber}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FloorSelector;
