import { useEffect, useState } from "react";

const UseEffect = ({ userId }) => {
  const [data, setData] = useState();
  const [loading, isloading] = useState(true);


  useEffect(() => {
    async function fetchUser() {
      isloading(true);
      try {
        const response = await fetch(`/api/user/${userId}`);
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        console.log(error.message);
      } finally {
        isloading(false);
      }
    }
    fetchUser();
  }, [userId]);

  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);


  if (loading) {
    return <div className="">Loading...</div>;
  }

  return (
    <div>
      <span>{data.id}</span>
      <span>{data.name}</span>
      <span>{data.email}</span>
      <span>{data.phone}</span>
    </div>
  );
};

export default UseEffect;
