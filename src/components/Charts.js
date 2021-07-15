import Chart from "react-google-charts";
import './Charts.css';

const Charts = ({data}) => {

    const graphData = () => {
        const graphData = data.map((day) => {
            return [day.date, day.newCasesByPublishDate]
        });
        graphData.push(['Date', 'Cases'])
        graphData.reverse();
        return graphData;
    };
    
    



    return (
        <div>
            
            <div style={{ display: 'flex', maxWidth: 9000 }}>
              <Chart
                width={400}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={graphData()}
                options={{
                  title: 'Daily Coronavirus cases - Sccotland',
                  chartArea: { width: '200%' },
                  hAxis: {
            title: 'Total Cases by Day',
            minValue: 0,
                  },
                  vAxis: {
            title: 'City',
                  },
                }}
                legendToggle
              />
              
            </div>
            
        </div>
    );
};

export default Charts;