import React from "react";

const Tags = ({
  title,
  id,
  count,
  subcategories,
}: {
  title: string;
  id: number;
  count: number;
  subcategories?: string;
}) => {
  return (
    <a href={`https://www.bakkah.net/en/category/${title}`} title={title}>
      {title} ({count})
    </a>
  );
};

export default Tags;
