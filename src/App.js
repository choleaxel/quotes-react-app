import { Layout } from 'antd';
import QuoteCard from './components/QuoteCards';
import QuoteList from './components/QuoteList';

import './App.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
    <Layout>
      <Header>Movie Quotes</Header>
      <Content>
        <QuoteList/> 
         <QuoteCard/> 
        
      </Content>
      <Footer>Coding with Chole</Footer>
    </Layout>
    </>
  );
}

export default App;
