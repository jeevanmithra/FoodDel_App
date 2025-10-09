import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [food_list, setFoodList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fooddel-app.onrender.com/foods_list");
        const data = await response.json();
        setFoodList(data);
      } catch (error) {
        console.error("Error fetching food list:", error);
      }
    };

    fetchData();
  }, []);

  const getInitialCart = () => {
    const storedCart = localStorage.getItem("cartItems"); //to get initial cart value from local storage
    return storedCart ? JSON.parse(storedCart) : {};
  };

  const [cartItems, setCartItems] = useState(getInitialCart());
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); //updates cart value in local storage when ever cartitems changes and stores it

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prevItems) => ({ ...prevItems, [itemId]: 1 }));
    } else {
      setCartItems((prevItems) => ({
        ...prevItems,
        [itemId]: prevItems[itemId] + 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] = newCart[itemId] - 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find(
          (product) => product.id === item || product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getCartItemCount = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  // Authentication functions
  const registerUser = async (userData) => {
    try {
      const response = await fetch("https://fooddel-app.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const newUser = await response.json();
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        return { success: true, user: newUser };
      } else {
        return { success: false, error: "Registration failed" };
      }
    } catch {
      return { success: false, error: "Network error" };
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch("https://fooddel-app.onrender.com/users");
      const users = await response.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        return { success: true, user };
      } else {
        return { success: false, error: "Invalid email or password" };
      }
    } catch {
      return { success: false, error: "Network error" };
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check for existing user on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getCartItemCount,
    user,
    registerUser,
    loginUser,
    logoutUser,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
