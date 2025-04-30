import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectHistory } from "../../redux/slices/historySlice";
import "./HistoryPage.css";

export const HistoryPage: React.FC = () => {
  const history = useAppSelector(selectHistory);

  return (
    <div className="container">
      <h1 className="history-page__title">История поиска</h1>
      {history.length > 0 ? (
        <ul className="history-page__list">
          {history.map((item, index) => (
            <li key={index} className="history-page__item">
              {item.query} ({new Date(item.timestamp).toLocaleString()})
            </li>
          ))}
        </ul>
      ) : (
        <p className="history-page__empty">История поиска пуста.</p>
      )}
    </div>
  );
};