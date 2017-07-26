/* @flow */

import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import CharacterView from '../components/CharacterView'

import type { OperationComponent } from 'react-apollo'

type Props = {
  data: HeroQuery
}

export const Home = (props: Props) => (
  <div>
    <h3>The Series Hero</h3>
    {!props.data.hero
      ? <span>loading</span>
      : <CharacterView character={props.data.hero} />}
  </div>
)

const withData: OperationComponent<Response, Props> = graphql(gql`
  query Hero {
    hero(episode: NEWHOPE) {
      ...CharacterViewCharacter
    }
  }
  ${CharacterView.fragments.character}
`)(Home)

export default withData
