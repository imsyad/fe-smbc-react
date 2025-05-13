export const ModalAtom = ({
  onClick,
  children,
}: {
  onClick?: (data?: unknown) => void;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 dark:bg-white/30 flex items-center justify-center z-51"
      onClick={onClick}
    >
      <div
        className="bg-white dark:bg-[#1D1D1D] p-6 rounded-lg shadow-md max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClick}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
