interface FormFieldProps {
  label: string;
  required?: boolean;
  type?: string;
  className?: string;
}

export function FormField({ label, required, type = "text", className = "" }: FormFieldProps) {
  return (
    <div className={`flex items-center space-x-2 mb-1 ${className}`}>
      <label className={`text-xs ${required ? "text-red-500" : ""} w-1/3`}>
        {label}
      </label>
      {type === "select" ? (
        <select className="border p-1 text-xs w-2/3">
          <option>Select...</option>
        </select>
      ) : type === "checkbox" ? (
        <input type="checkbox" className="ml-2" />
      ) : (
        <input type={type} className="border p-1 text-xs w-2/3" />
      )}
    </div>
  );
}