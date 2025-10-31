import BorrowSkeleton from "@/components/Skeletons/BorrowSkeleton";
import { Card } from "@/components/ui/card";
import { useGetAllBorrowsQuery } from "@/redux/api/borrowsApi";
import type { BorrowProps } from "@/types";
import { Helmet } from "react-helmet";

export default function BorrowBooks() {
  const {
    data: borrows,
    isLoading,
    isError,
  } = useGetAllBorrowsQuery(undefined);
  console.log(borrows);

  // if (isLoading) return <p>Loading borrows…</p>;
  if (isError) return <p>Error loading borrow records.</p>;

  return (
    <div className="container mx-auto px-6 lg:px-10 z-50 py-20">
      <Helmet>
        <title>Borrow Summary</title>
        <meta name="description" content="Borrow Summary" />
      </Helmet>
      <h2 className="text-3xl font-semibold mb-6">Borrow Summary</h2>
      <div className="">
        {isLoading ? (
          <BorrowSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {borrows?.data?.map((borrow: BorrowProps) => (
              <Card key={borrow.isbn} className="p-10 gap-1">
                <p>
                  <strong>Book Title:</strong> {borrow.book.title}
                </p>
                <p>
                  <strong>Book ISBN:</strong> {borrow.book.isbn}
                </p>
                <p>
                  <strong>Total Quantity:</strong> {borrow.totalQuantity}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
