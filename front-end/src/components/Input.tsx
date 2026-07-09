export function Input({ 
  placeholder, 
  tipo, 
  onChange 
}: { 
  placeholder: string; 
  tipo: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input 
      className="w-87.5 bg-white text-sm p-2 outline-none rounded-md text-[#32343E]" 
      type={tipo} 
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}