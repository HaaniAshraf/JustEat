import { useEffect, useState } from "react";

// Define a custom hook to track online status
const useOnlineStatus = () => {
  // Initialize state to track online status, defaulting to true
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Effect to add event listener when component mounts
  useEffect(() => {
    window.addEventListener("offline", () => {
      // When offline event occurs, update onlineStatus state to false
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
