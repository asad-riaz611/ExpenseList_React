import categories from "../categories";
interface Props {
  onSelect: (category: string) => void;
}
const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select
      onChange={(event) => onSelect(event.target.value)}
      className="form-select"
    >
      <option value="">-- Select a category -- </option>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
