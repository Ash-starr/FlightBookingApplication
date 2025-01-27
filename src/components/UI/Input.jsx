export default function Input({ id, label, ...props }) {
  return (
    <p className="control flex flex-col">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        {...props}
        required
        className="border border-primary-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
      />
    </p>
  );
}
