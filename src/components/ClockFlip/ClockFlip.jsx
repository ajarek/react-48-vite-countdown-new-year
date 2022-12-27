import React, { useEffect, useState } from 'react'
import FlipClock from 'x-react-flipclock'
import './ClockFlip.css'

export default function ClockFlip() {
  return (
    <div className='clock-flip'>
      <h2>left until New Years:</h2>
      <FlipClock
        type='countdown'
        count_to='2023-01-01 00:00:00'
        units={[
          {
            sep: '',
            type: 'years',
            title: 'year',
        },
          {
            sep: '',
            type: 'months',
            title: 'month',
        },
        
          {
            sep: '',
            type: 'days',
            title: 'day',
          },
          {
            sep: '',
            type: 'hours',
            title: 'hour',
          },
          {
            sep: '',
            type: 'minutes',
            title: 'minute',
          },
          {
            sep: '',
            type: 'seconds',
            title: 'second',
          },
        ]}
      />
    </div>
  )
}
