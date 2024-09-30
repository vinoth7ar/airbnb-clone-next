"use client";

import React from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

// To determine if the component is mounted on the client, we can use the following code snippet:
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <div>{children}</div>;
};

export default ClientOnly;
