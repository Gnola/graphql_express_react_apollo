import React, { Component } from 'react';
import { useQuery, gql} from "@apollo/client";
import { Link } from 'react-router-dom';
import classNames from 'classnames';


const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

function Launch({flight_number}) {
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number }
  });
  // let { flight_number } = props.match.params;
  // flight_number = parseInt(flight_number)

  return (
    <>
    {
      loading ? <h4>Loading...</h4>
      :
      error ? <h4>Error...</h4>
      :
      <h1>Test</h1>
    }
    </>
  )

}

export default Launch;
