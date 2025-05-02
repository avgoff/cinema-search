import { useNavigate, useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const getParam = (key: string) => searchParams.get(key) || "";

  const setParams = (params: Record<string, string | undefined>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    navigate(`/search?${newParams.toString()}`);
  };

  return { getParam, setParams };
};
