function TowerSelector({ tower, onChange }) {
  return (
    <label>
      Выберите башню:
      <select value={tower} onChange={onChange}>
        <option value="A">Башня А</option>
        <option value="B">Башня Б</option>
      </select>
    </label>
  );
}

export default TowerSelector;
