function DateTimeInput({ datetime, onChange }) {
  return (
    <label>
      Выберите дату и время:
      <input type="datetime-local" value={datetime} onChange={onChange} />
    </label>
  );
}

export default DateTimeInput;
