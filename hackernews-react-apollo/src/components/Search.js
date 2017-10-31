import React, { Component } from 'react';
import { gql, withApollo } from 'react-apollo';
import Link from './Link';
import { ALL_LINKS_QUERY } from './LinkList';

class Search extends Component {
   state = {
     links: [],
     searchText: ''
   }

   _updateCacheAfterVote = (store, createVote, linkId) => {
    const data = store.readQuery({ query: ALL_LINKS_SEARCH_QUERY })

    const votedLink = data.allLinks.find(link => link.id === linkId)

    votedLink.votes = createVote.link.votes
    store.writeQuery({ query: ALL_LINKS_SEARCH_QUERY, data })
  }

   render() {
     return (
       <div>
         <div>
           Search
           <input 
            type="text"
            onChange={(e) => this.setState({ searchText: e.target.value })}
           />
           <button
             onClick={() => this._executeSearch()}
             >
             OK
          </button>
         </div>
         {this.state.links.map((link, index) => <Link key={link.id} updateStoreAfterVote={this._updateCacheAfterVote} link={link} index={index}/>)}
       </div>
     )
   }

   _executeSearch = async () => {
    const { searchText } = this.state
    const result = await this.props.client.query({
      query: ALL_LINKS_SEARCH_QUERY,
      variables: { searchText }
    })
    const links = result.data.allLinks
    this.setState({ links })
   }
}

const ALL_LINKS_SEARCH_QUERY = gql`
query AllLinksSearchQuery($searchText: String!) {
  allLinks(filter: {
    OR: [{
      url_contains: $searchText
    }, {
      description_contains: $searchText
    }]
  }) {
    id
    url
    description
    createdAt
    postedBy {
      id
      name
    }
    votes {
      id
      user {
        id
      }
    }
  }
}
`

export default withApollo(Search)