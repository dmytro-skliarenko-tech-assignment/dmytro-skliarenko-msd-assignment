import { Avatar, Button, Card } from 'antd';
import { UserOutlined, CommentOutlined } from '@ant-design/icons';

type ChartCardProps = {
    children: JSX.Element,
    title: string,
}

const ChartCard = ({ children, title }: ChartCardProps) => {
    return (
        <Card style={{ border: '1px solid #EBEAEB' }} headStyle={{ fontSize: '20px', fontStyle: 'bold', color: '#1C3F3B' }} title={title} actions={[
            <div key='actions' style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px' }}>
                <Button shape="circle" icon={<Avatar icon={<UserOutlined />} />} key='avatar' size='large' style={{ padding: 0 }} />
                <Button key='comments' size='large' type='text' style={{ padding: 0, flexDirection: 'row-reverse' }}>3 <CommentOutlined /></Button>
            </div>
          ]}>
            {children}
        </Card>
    );
}
 
export default ChartCard;