import './assets/styles/timelinezz.css';

import React, { PureComponent } from 'react';

interface IProps {
   data: Array<{
      date: string;
      label: string;
      color?: string;
   }>
   order?: 'asc' | 'desc';
}

export default class Timelinezz extends PureComponent<IProps, {}> {
   public render(): React.ReactNode {
      const { data, order } = this.props;

      return (
         <div className={`timelinezz ${order === 'desc' ? '--desc' : ''}`}>
            {data.map((event, index) => (
               <div className='timelinezz__item' key={`event-${index}`}>
                  <div className='date'>{event.date}</div>
                  <div className='event' style={{ color: event.color }}>{event.label}</div>
               </div>
            ))}
         </div>
      );
   }
}
