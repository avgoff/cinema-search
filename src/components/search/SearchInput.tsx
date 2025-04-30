import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addToHistory } from "../../redux/slices/historySlice";
import "./SearchInput.css";

type SearchInputProps = {
  initialValue?: string;
  onFocus?: () => void;
  children?: React.ReactNode;
};

export const SearchInput = ({ initialValue = "", onFocus, children }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === "/") {
      setInputValue("");
    }
  }, [location.pathname]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      dispatch(addToHistory(trimmed));
      navigate(`/search?query=${encodeURIComponent(trimmed)}`);
    }
  };
 
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar__input"
        type="text"
        value={inputValue}
        onFocus={onFocus}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите название фильма..."
      />
      <button className="search-bar__button" type="submit">Поиск</button>
    </form>
  );
};