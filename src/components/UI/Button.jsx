export function RoundedButton({ children }) {
  return (
    <button className="w-full p-2 rounded-full bg-primary-700 text-white font-semibold  hover:bg-primary-700/50 hover:cursor-pointer transition-colors">
      {children}
    </button>
  );
}

export function TextButton({ children, ...props }) {
  return (
    <button
      className="text-primary-700 hover:text-primary-900 hover:underline font-medium transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}
