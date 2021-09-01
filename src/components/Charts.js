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
            
            <div className="graph" style={{ display: 'flex' }}>
              <Chart
                height={300}
                width={600}
                chartType="ColumnChart"
                data={graphDataCases()}
                options={{
                  title: 'Daily coronavirus cases',
                  titleTextStyle: {
                    fontSize: 22
                  },
                  hAxis: {
                    title: 'Date',
                  },
                  vAxis: {
                    title: 'Total cases',
                  },
                  legend: {
                    position: 'none'
                  }

                }}
               
              />
              
            </div>

            <div className="graph" style={{ display: 'flex' }}>
              <Chart
                height={300}
                width={600}
                chartType="ColumnChart"
                data={graphDataDeaths()}
                options={{
                  title: 'Daily coronavirus deaths',
                  titleTextStyle: {
                    fontSize: 22
                  },
                  vAxis: {
                    title: 'Total deaths'
                },
                  hAxis: {
                      title: 'Date',
                  },
                  legend: {
                    position: 'none'
                  }
                }}
               
              ></Chart>
              
            </div>
            
        </div>
    );
};

export default Charts;