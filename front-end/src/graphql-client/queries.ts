import { gql } from '@apollo/client';

const getRooms = gql`
query getAllRooms {
  rooms {
  nameRoom
  roomCode
  categoryRoom
  priceRoom
  statusRoom
  lineId
  id
  }
}
`

export { getRooms }