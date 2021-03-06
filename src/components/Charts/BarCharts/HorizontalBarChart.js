import React from 'react';
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  box-sizing: border-box;
  height: 48vh;
  margin: 8px;
  padding: auto 8px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 599px) {
    margin: 8px 0;
    padding: 8px 0;
  }
`;

const Title = styled.div`
  padding: 8px;
  font-size: 1.4rem;

  @media (max-width: 1169px) {
    font-size: 1rem;
  }
`;

const Chart = ({ data, color, children }) => (
  <ChartContainer>
    <Title>{children}</Title>
    <ResponsiveContainer width="100%" height="85%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 15,
          left: 8,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="key"
          height={70}
          interval={0}
          angle={-75}
          textAnchor="end"
          tick={{ fontSize: 12 }}
        />
        <YAxis />
        <Tooltip formatter={(value) => [`Počet: ${value}`]} />
        <Brush dataKey="key" startIndex={data.length - 31} height={20} stroke={color} />
        <Bar dataKey="data" fill={color} label={{ position: 'top', fontSize: '0.8vw' }} />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default Chart;
