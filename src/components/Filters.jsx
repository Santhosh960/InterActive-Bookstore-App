export default function Filters({ category, categories, onCategoryChange, sortBy, onSortChange }) {
  return (
    <div className="filters">
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="title">Title</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}