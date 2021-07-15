import Chart from "react-google-charts";
import './Charts.css';

const Charts = ({data}) => {

    const graphDataCases = () => {
        const graphData = data.map((day) => {
            return [day.date, day.newCasesByPublishDate]
        });
        graphData.push(['Date', 'Cases'])
        graphData.reverse();
        return graphData;
    };

    const graphDataDeaths = () => {
        const graphData = data.map((day) => {
            return [day.date, day.newDeaths28DaysByPublishDate]
        });
        graphData.push(['Date', 'Cases'])
        graphData.reverse();
        return graphData;
    };

    
    



    return (
        <div id="graphs">
            
            <div className="graph" style={{ display: 'flex', maxWidth: 900 }}>
              <Chart
                width={400}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={graphDataCases()}
                options={{
                  title: 'Daily Coronavirus cases - Sccotland',
                  chartArea: { width: '100%' },
                  hAxis: {
            title: 'Date',
            minValue: 0,
                  },
                  vAxis: {
            title: 'Total cases',
            minVlaue: 0
                  },
                }}
               
              />
              
            </div>

            <div className="graph" style={{ display: 'flex', maxWidth: 900 }}>
              <Chart
                width={400}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={graphDataDeaths()}
                options={{
                  title: 'Daily Coronavirus deaths - Sccotland',
                  chartArea: { width: '100%' },
                  hAxis: {
            title: 'Date',
            minValue: 0,
                  },
                  vAxis: {
            title: 'Total deaths',
            minVlaue: 0
                  },
                }}
               
              />
              
            </div>
            
        </div>
    );
};

export default Charts;