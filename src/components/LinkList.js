import React, { Component } from 'react';
import Link from './Link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

class LinkList extends Component {
  render() {
    // return "hardcoded" data

    // const linksToRender = [
    //   {
    //     id: '1',
    //     description: 'Prisma turns your database into a GraphQL API 😎',
    //     url: 'https://www.prismagraphql.com',
    //   },
    //   {
    //     id: '2',
    //     description: 'The best GraphQL client',
    //     url: 'https://www.apollographql.com/docs/react/',
    //   },
    // ]

    // return (
    //   <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
    // )

    return (
      
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          console.log(loading);
          console.log(error);
          console.log(data);
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>


          const linksToRender = data.feed.links

          return (
            <div>
              {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList


// GraphQL sample

// {
//   feed {
//     links {
//       id
//       createdAt
//       description
//       url
//     }
//   }
// }
