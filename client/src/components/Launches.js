import React, { Component } from 'react';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import { useQuery, gql} from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  console.log(data);

  return (
    <>
      <MissionKey />
      <h1 className="display-4 my-3">Launches</h1>
      {
        loading ? <h4>Loading...</h4>
        :
        error ? <h4>Error...</h4>
        :
        data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))
      }
    </>
  )
}

export default Launches;
