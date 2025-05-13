import * as yup from "yup";

export const rentBookSchema = yup.object({
  bookId: yup.number().required(),
  amount: yup.number().required(),
  startDate: yup
    .string()
    .required("Start date is required")
    .test(
      "is-valid",
      "Invalid date",
      (value) => !isNaN(Date.parse(value || ""))
    ),
  endDate: yup
    .string()
    .required("End date is required")
    .test(
      "is-valid",
      "Invalid date",
      (value) => !isNaN(Date.parse(value || ""))
    )
    .test("is-after", "End date must be after start date", function (value) {
      const { startDate } = this.parent;
      return new Date(value) > new Date(startDate);
    }),
});

export type RentBookFormInputs = yup.InferType<typeof rentBookSchema>;
