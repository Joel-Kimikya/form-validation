const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button onClick={onClick} className='hover:text-fuchsia-900'>
      {text}
    </button>
  );
};

export default Button;
