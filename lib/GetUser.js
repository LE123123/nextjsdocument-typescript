import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function GetUser() {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
