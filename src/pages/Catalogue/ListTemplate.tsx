import Sidebar from "../../components/atoms/Sidebar";

const ListTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default ListTemplate;
