const axios = require('axios');
const {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList} = require('graphql')

// LaunchType
const LaunchType = new GraphQLObjectType({
  name:'Launch',
  fields:() => ({
    flight_number: {type: GraphQLInt},
    mission_name: {type: GraphQLString},
    launch_year: {type: GraphQLString},
    launch_date_local: {type: GraphQLString},
    launch_success: {type: GraphQLBoolean},
    rocket: {type: RocketType}
  })
})


// RocketType
const RocketType = new GraphQLObjectType({
  name:'Rocket',
  fields:() => ({
    rocket_id: {type: GraphQLString},
    rocket_name: {type: GraphQLString},
    rocket_type: {type: GraphQLString},
  })
})

// RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: { // Get list of launches - Doesn't take any arguments
      type: new GraphQLList(LaunchType), // Returns a list of LaunchTypes
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v3/launches').then(res => res.data)
      } // Can get everything from LaunchType
    },
    launch: { // Get a single launch
      type: LaunchType, // Returns a LaunchType
      args: { // Takes in flight_number as argument
        flight_number: {type: GraphQLInt}
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`).then(res => res.data)
      } // Can get everything from RocketType
    },
    rockets: { // Get list of rockets - Doesn't take any arguments
      type: new GraphQLList(RocketType), // Returns a list of RocketTypes
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v3/launches').then(res => res.data)
      } // Can get everything from LaunchType
    },
    rocket: { // Get a single rocket
      type: RocketType, // Returns a RocketType
      args: { // Takes in flight_number as argument
        id: {type: GraphQLInt}
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.id}`).then(res => res.data)
      } // Can get everything from RocketType
    },
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
