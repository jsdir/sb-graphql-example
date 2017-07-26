/* @flow */

import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import CharacterView from '../components/CharacterView'
import { episodeNames } from '../utils/episode'

import type { OperationComponent } from 'react-apollo'

type Props = {
  match: {
    params: {
      episode: Episode
    }
  },
  data: EpisodeHeroQuery,
}

export const ShowEpisode = (props: Props): React$Element<any> => (
  <div>
    <h3>{episodeNames[props.match.params.episode.toUpperCase()]}</h3>
    <h3>Episode Hero</h3>
    {props.data.hero
      ? <CharacterView character={props.data.hero} />
      : <span>loading</span>}
  </div>
)

const withData: OperationComponent<Response, Props> = graphql(gql`
  query EpisodeHero($episode: Episode!) {
    hero(episode: $episode) {
      ...CharacterViewCharacter
    }
  }
  ${CharacterView.fragments.character}
`, {
  options: ({ match: { params: { episode } } }) => ({
    variables: { episode: episode.toUpperCase() },
  })
})(ShowEpisode)

export default withData
