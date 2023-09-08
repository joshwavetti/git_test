import "./Home.style.css";
import { useState } from "react";
import { IBook, PageEnum, dummyBookList } from "./Book.type";
import BookList from "./BookList";
import AddBook from "./AddBook";

const Home = () => {
  const [bookList, setBookList] = useState(dummyBookList as IBook[]);

  const [shownPage, setShownPage] = useState(PageEnum.list);
  const onAddBookClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addBook = (data: IBook) => {
    setBookList([...bookList, data]);
  };
  return (
    <>
      <article className="article-header">
        <header>
          <h1> Book Catalogue</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Book"
              onClick={onAddBookClickHnd}
              className="add-book-btn"
            />
            <BookList list={bookList} />{" "}
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddBook
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addBook}
          />
        )}
      </section>
    </>
  );
};

export default Home;
