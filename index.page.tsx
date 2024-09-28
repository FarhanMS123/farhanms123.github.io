import { tokens } from '@fluentui/react-components';
import { Providers } from './libs/fui_docs/Providers';

export default function Home() {
  // window.location.replace('https://github.com/FarhanMS123');

  return (
    <Providers>
      {/* <meta http-equiv="refresh" content="6; URL='https://github.com/FarhanMS123'"> */}
      <meta http-equiv="refresh" content="6; URL='/viewer#/README.md'" />
      <div className="pt-32 pl-8">
        <p style={{
          fontSize: tokens.fontSizeHero800,
          fontWeight: tokens.fontWeightSemibold,
        }}>FarhanMS123</p>

        <p>You will be redirected in 6 seconds...</p>
        <p><a href="https://github.com/FarhanMS123">https://github.com/FarhanMS123</a></p>
        <p><a href="/viewer#/README.md">Click here to open Viewer</a></p>
      </div>

    </Providers>
  );
}
