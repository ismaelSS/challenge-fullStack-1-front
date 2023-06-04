import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { api } from "../services/api";
import { Ilogin } from "../interfaces/forms";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }:{children:ReactNode}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("@ismaelSS-contacts:token");

        if (!token) {
          return;
        }

        const { sub } = jwtDecode<JwtPayload>(token);

        const response = await api.get(`users/${sub}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        if(response.status == 401){
          navigate('/login')
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const signIn = async (data:Ilogin) => {
    const response = await api.post("/login", data);
    const { token } = response.data;

    localStorage.setItem("@ismaelSS-contacts:token", token);

    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ signIn, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
