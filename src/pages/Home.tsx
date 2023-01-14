import { tokens } from '@fluentui/react-components';

export default function Home() {
  window.location.replace('https://github.com/FarhanMS123');

  return (
    <>
      <p style={{
        fontSize: tokens.fontSizeHero800, 
        fontWeight: tokens.fontWeightSemibold, 
        textAlign:'center',
        marginTop:'8rem'}}>FarhanMS123</p>
    </>
  );
}
