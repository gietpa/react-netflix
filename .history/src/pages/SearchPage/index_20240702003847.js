import React from "react";

export default function SearchPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");

  return <div></div>;
}
