import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    function getUser() {
      const userId = searchParams.get("userId");
      console.log("userId", userId);
      if (!userId) return navigate("/login");
      fetch(`http://localhost:3000/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
        });
    }
    getUser();
  }, []);

  return <>{children}</>;
}
