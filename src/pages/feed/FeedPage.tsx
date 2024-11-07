import Header from '@/layout/header/Header';
import pfp from '@/assets/nav/pfp.png'
import Main from './main/Main';


const Feed = () => {
  return ( 
    <>
      <div className="app">
        <Header name='Arthur Wood' pfp={pfp}/>
        <Main />
      </div>
    </>
  );
};

export default Feed
