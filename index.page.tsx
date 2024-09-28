import { tokens } from '@fluentui/react-components';
import { Providers } from './libs/fui_docs/Providers';

export default function Home() {
  // window.location.replace('https://github.com/FarhanMS123');

  return (
    <Providers fluent={{
      className: "pl-8"
    }}>
      {/* <meta http-equiv="refresh" content="6; URL='https://github.com/FarhanMS123'"> */}
      <meta http-equiv="refresh" content="6; URL='/viewer#/README.md'" />
      <p style={{
        fontSize: tokens.fontSizeHero800,
        fontWeight: tokens.fontWeightSemibold,
        }} className="mt-32">FarhanMS123</p>

      <p>You will be redirected in 6 seconds...</p>
      <p><a href="https://github.com/FarhanMS123">https://github.com/FarhanMS123</a></p>
      <p><a href="/viewer#/README.md">Click here to open Viewer</a></p>

    </Providers>
  );
}
