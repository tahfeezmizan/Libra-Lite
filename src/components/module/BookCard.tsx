import { ListCollapse, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { IBook } from "@/types";
import { Link } from "react-router";

interface BookCardProps {
  book: IBook;
  onEdit: (book: IBook) => void;
  onDelete: (book: IBook) => void;
  onBorrow: (book: IBook) => void;
}

export default function BookCard({
  book,
  onEdit,
  onDelete,
  onBorrow,
}: BookCardProps) {
  return (
    <Card className="rounded-2xl border-none shadow-none group p-0 bg-[#F5F5F5] ">
      <CardContent className="space-y-2 p-0 ">
        <div className="relative bg-[#F5F5F5] rounded-lg p-5 pb-0 ">
          <p
            className={`absolute top-4 right-4 bg-green-700  px-3 py-1 rounded-2xl text-sm font-medium ${
              book.available
                ? "text-white "
                : "text-red-500"
            }`}
          >
            {book.available ? "Available" : "Unavailable"}
          </p>
          <Link to={`/books/${book._id}`} className="">
            <img
              src={book?.image}
              alt={book?.title}
              className="w-auto h-72 mx-auto object-contain rounded-lg "
            />
          </Link>
        </div>
        <div className="p-5 space-y-1">
          <div className="">
            <Link to={`/books/${book._id}`}>
              <h2 className="text-xl font-semibold text-primary">
                {book.title}
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground">by {book.author}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            <b>Genre:</b> {book.genre}
          </p>
          <p className="text-sm text-muted-foreground">
            <b>ISBN:</b> {book.isbn}
          </p>
          <p className="text-sm text-muted-foreground">
            <b>Copies:</b> {book.copies}
          </p>

          <div className="flex items-center justify-between pt-4">
            <Button onClick={() => onBorrow(book)}>Borrow</Button>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button variant="outline" onClick={() => onEdit(book)}>
                <Pencil className="w-4 h-4 mr-1" /> Edit
              </Button>
              <Link to={`/books/${book._id}`}>
                <Button variant="outline">
                  <ListCollapse className="w-4 h-4 mr-1" />
                  Book
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="text-destructive hover:bg-destructive/10"
                onClick={() => onDelete(book)}
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
