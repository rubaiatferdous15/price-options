import { LineChart as LC, Line, XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
        { "id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 92 },
        { "id": 2, "name": "Bob", "math": 78, "physics": 72, "chemistry": 88 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 90, "chemistry": 85 },
        { "id": 4, "name": "David", "math": 60, "physics": 65, "chemistry": 70 },
        { "id": 5, "name": "Eva", "math": 88, "physics": 82, "chemistry": 87 },
        { "id": 6, "name": "Frank", "math": 74, "physics": 78, "chemistry": 80 },
        { "id": 7, "name": "Grace", "math": 95, "physics": 89, "chemistry": 92 },
        { "id": 8, "name": "Hannah", "math": 68, "physics": 71, "chemistry": 75 },
        { "id": 9, "name": "Ian", "math": 80, "physics": 76, "chemistry": 78 },
        { "id": 10, "name": "Jack", "math": 90, "physics": 85, "chemistry": 88 }
      ]
      
    return (
        <div>
            <LC width={500} height={800} data ={subjectMarksData}>
                    <XAxis dataKey="name" />
                    <YAxis></YAxis>
                    <Line dataKey="math" stroke='red'></Line>
                    <Line dataKey="chemistry" stroke='yellow'></Line>
                    <Line dataKey="physics"stroke='green'></Line>
                    
            </LC>
        </div>
    );
};

export default LineChart;