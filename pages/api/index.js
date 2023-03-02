import { useState, useEffect } from "react";
import dbConnect from "../../db/connect";
// here import the model
//! template needs to be adjusted ---->
function modelData() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/profile-data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No model data</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.id}</p>
    </div>
  );
}

await dbConnect();
