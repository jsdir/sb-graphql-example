/* @flow */

import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import CharacterView from '../components/CharacterView'

import type { OperationComponent } from 'react-apollo'

type Props = {
  data: CharacterQuery
}

export const ShowCharacter = (props: Props) => (
  <div>
    {props.data.character
      ? <CharacterView character={props.data.character} />
      : <span>loading</span>}
  </div>
)

const withData: OperationComponent<Response, Props> = graphql(gql`
  query Character($id: String!) {
    character(id: $id) {
      ...CharacterViewCharacter
    }
  }
  ${CharacterView.fragments.character}
`, {
  options: ({ match: { params: { id } } }) => ({
    variables: { id },
  })
})(ShowCharacter)

export default withData
