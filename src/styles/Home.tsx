import { Global } from "@emotion/react";

export default function Style() {
  return (
    <Global
      styles={{
        '#root': {
          background: '#222'
        }
      }}
    />
  );
}
