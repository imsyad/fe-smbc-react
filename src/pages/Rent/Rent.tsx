import { useEffect, useState } from "react";
import RentBookList from "../../components/organisms/RentList";
import RentTemplate from "./RentTemplate";
import {
  getRentDetailsByMemberId,
  type RentWithBook,
} from "../../services/rent.service";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Rent() {
  useDocumentTitle("List of Books on Rent");
  const [rentDetail, setRentDetail] = useState<RentWithBook[]>([]);
  useEffect(() => {
    const fetchRentData = async () => {
      const data = await getRentDetailsByMemberId();
      setRentDetail(data);
    };

    fetchRentData();
  }, []);
  return (
    <RentTemplate>
      <RentBookList rentBooks={rentDetail} />
    </RentTemplate>
  );
}
