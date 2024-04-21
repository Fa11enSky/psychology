import { FC, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";

interface PrivateRouteProps {
  component: FC;
  redirectTo?: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (user === null) {
    return null; // Показуємо нуль, доки не визначиться статус аутентифікації
  }

  if (user) {
    return <Component />;
  } else {
    navigate(redirectTo);
    return null;
  }
};

export default PrivateRoute;
