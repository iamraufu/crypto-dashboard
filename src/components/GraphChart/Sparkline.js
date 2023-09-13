import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Sparkline = ({ sparkData, strokeColor }) => {
      return (
            <Sparklines data={sparkData}>
                  <SparklinesLine style={{ stroke: strokeColor, strokeWidth: "2", fill: "none", width:"50px" }} />
            </Sparklines>
      );
};

export default Sparkline;