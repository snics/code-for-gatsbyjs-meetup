import React from 'react';
import { rhythm } from '../utils/typography';

class Meetups extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <hr/>
        <h3>Meetups</h3>

        {data.childrenMeetupEvent.map((data) => {
          const { time, name, local_date, local_time, status, link, venue } = data;
          return (
            <div key={time}>
              <h4
                style={{
                  marginBottom: rhythm(1 / 4),
                  textTransform: `none`
                }}
              >
                <a href={link}
                   target='_blank' // eslint-disable-line
                   style={{ boxShadow: `none` }}
                >{name}
                </a>
              </h4>
              <small>
                {venue.name}: {venue.address_1}, {venue.city}
              </small>
              <br/>
              <small>Date: {local_date}, {local_time}</small>
              <br/>
              <small>Status: {status}</small>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Meetups;
