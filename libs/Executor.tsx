export type ExecutorProps = {
  func: Function
};

export default function Executor({func}: ExecutorProps){
  if(typeof func == 'function') func();

  console.log('put');

  return <></>;
}
