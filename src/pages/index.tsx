import styles from '@/styles/Home.module.css'
import { Button, Card, Col, Layout, Row, Space } from 'antd'
import LineChart from '@/components/LineChart';
import DoughnutChart from '@/components/DoughnutChart';
import ChartCard from '@/components/ChartCard';
import { DownloadOutlined, AlignLeftOutlined, FilterOutlined } from '@ant-design/icons';
import FilterButton from '@/components/FilterButton';
import { fetchFemaleCases, fetchMaleCases, fetchVariants } from '@/dataFetching';
import { HomeProps } from '@/types';
import { transformMaleFemaleCaseDataForLineChart, transformVariantsDataForDoughnutChart } from '@/dataTransformer';

const { Header, Content } = Layout;

export async function getServerSideProps() {
  const femaleData = await fetchFemaleCases()
  const maleData = await fetchMaleCases()

  const variantsData = await fetchVariants()

  return {
    props: {
      lineChartNewCases: transformMaleFemaleCaseDataForLineChart(maleData, femaleData),
      doughnutChartVariants: transformVariantsDataForDoughnutChart(variantsData)
    }
  }
}

export default function Home(props: HomeProps) {

  return (
    <Layout style={{ padding: '0 50px' }}>
      <Header style={{ background: 'transparent', color: '1E3F3B', fontSize: '20px', padding: 0, display: 'flex' }}>
        <span>Page title</span>
        <Space size={20} style={{ marginLeft: 'auto' }} wrap>
          <FilterButton>
            <span style={{ fontSize: '16px' }}>Export to PDF</span>
            <DownloadOutlined style={{ color: '#39847B', fontSize: 20 }}/>
          </FilterButton>
          <FilterButton>
            <span style={{ fontSize: '16px' }}>Notes</span>
            <span style={{ color: '#8F8F93' }}>(3)</span><AlignLeftOutlined  style={{ color: '#39847B', fontSize: 20 }}/>
          </FilterButton>
          <FilterButton>
            <span style={{ fontSize: '16px' }}>Filter</span>
            <span style={{ background: '#39847B', borderRadius: '100%', fontSize: 12, height: 20, width: 20, color: '#FFF', textAlign: 'center'}}>9+</span>
            <FilterOutlined  style={{ color: '#39847B', fontSize: 20 }}/>
          </FilterButton>
        </Space>
      </Header>
      <Content>
        <Row gutter={16}>
          <Col span={12}>
          <ChartCard title='Last data about males and females'>
            <LineChart data={props.lineChartNewCases}/>
          </ChartCard>
          </Col>
          <Col span={12}>
          <ChartCard title='Weekly % for each variant'>
            <DoughnutChart data={props.doughnutChartVariants} />
          </ChartCard>
          </Col>
          </Row>
      </Content>
    </Layout>
  )
}
