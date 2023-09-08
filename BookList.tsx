import { IBook } from "./Book.type";
import "./BookList.style.css";

type Props = {
  list: IBook[];
};
const BookList = (props: Props) => {
  const { list } = props;
  return (
    <div>
      <article>
        <h3 className="list-header">Book LIst</h3>
      </article>
      <table>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {list.map((book) => {
          return (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.genre}</td>
              <td>{book.status}</td>
              <td>
                <div>
                  <input type="button" value="View" />
                  <input type="button" value="Edit" />
                  <input type="button" value="Delete" />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default BookList;
