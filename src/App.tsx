import { Card, List } from 'antd';
import './App.css';

const data = [
  {
    title: '笔记doc',
    link: 'https://blog.daiweishuai.top',
    description: 'vitepress',
  },
  {
    title: '移动端点餐',
    link: './take-out-platform/',
    description: 'vue2+vuex',
  },
];

function App() {
  return (
    <div className="App">
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <a href={item.link} target={'_blank'} rel="noreferrer">
              <Card hoverable title={item.title}>
                <Card.Meta title={item.title} description={item.description} />
              </Card>
            </a>
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
