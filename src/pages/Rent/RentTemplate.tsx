import Sidebar from "../../components/atoms/Sidebar";

const RentTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
};

export default RentTemplate;
