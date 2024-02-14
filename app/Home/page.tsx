"use client"
import BackEndLayout from '@/components/layouts/BackEndLayout';
import './home.scss';
import TopBox from '@/components/TopBox/TopBox';
import ChartBox from '@/components/chartBox/ChartBox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '@/lib/data';
import PieChartBox from '@/components/pieCartBox/PieChartBox';
import BigChartBox from '@/components/bigChartBox/BigChartBox';
import BarChartBox from '@/components/barChartBox/BarChartBox';

const Home = () => {
    return(
    <BackEndLayout>
            <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
    </BackEndLayout>
    
    )
}

export default Home;