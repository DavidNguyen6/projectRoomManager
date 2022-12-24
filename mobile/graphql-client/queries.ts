import { gql } from '@apollo/client';

const getAllDataFromBE = gql`
query getAllDataFromBE {
  rooms {
    nameRoom
    roomCode
    categoryRoom
    priceRoom
    statusRoom
    id
    line {
      id
      lineName
    }
  }

  bills {
    electricNumberNew
    electricNumberOld
    date
    id
    totalPrice
    waterNumberNew
    waterNumberOld
    room {
      nameRoom
      priceRoom
      roomCode
      statusRoom
      categoryRoom
      line {
        lineName
      }
    }
    customer {
      identityNumber
      password
      phone
      startContract
      username
      address
    }
  }
}`

export { getAllDataFromBE }