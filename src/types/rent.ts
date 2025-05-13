export interface Rent {
  id: number;
  memberId: number;
  bookId: number;
  startDate: Date;
  endDate: Date;
  amount: number;
}

export interface CreateRent {
  bookId: number;
  startDate: string;
  endDate: string;
  amount: number;
}
