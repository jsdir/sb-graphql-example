/* @flow */

import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'

import { episodeNames } from '../utils/episode'

const renderEpisode = (episode: ?Episode) => episode ? (
  <li key={episode}>
    <Link to={`/episode/${episode.toLowerCase()}`}>
      {episodeNames[episode]}
    </Link>
  </li>
) : null

const CharacterView = (props: { character: CharacterViewCharacterFragment }) => (
  <div>
    <Link to={`/character/${props.character.id}`}>
      {props.character.name}
    </Link>
    {props.character.appearsIn &&
      <div>
        <h3>Appeared In:</h3>
        <ul>
          {props.character.appearsIn.map(renderEpisode)}
        </ul>
      </div>
    }
  </div>
)

CharacterView.fragments = {
  character: gql`
    fragment CharacterViewCharacter on Character {
      id
      name
      appearsIn
      ... on Droid {
        primaryFunction
      }
      ... on Human {
        homePlanet
      }
    }
  `
}

export default CharacterView
