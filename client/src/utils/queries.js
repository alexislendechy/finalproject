import { gql } from "@apollo/client";

export const GET_PET_PROFILES = gql`
  query getPetProfiles {
    getPetProfiles {
      _id
      petName
      petBreed
      petAge
      petSize
      petGender
      petDescription
      petImage
    }
  }
`;

export const GET_WALKER_PROFILES = gql`
  query getWalkerProfiles {
    walkerProfiles {
      _id
      walkerName
      walkerEmail
      walkerPhone
      walkerAddress
      walkerCity
      walkerState
      walkerZip
      walkerCountry
      walkerWebsite
      walkerDescription
      walkerImage
    }
  }
`;

export const GET_OWNER_PROFILES = gql`
  query getOwnerProfiles {
    ownerProfiles {
      _id
      ownerName
      ownerEmail
      ownerPhone
      ownerAddress
      ownerCity
      ownerState
      ownerZip
      ownerCountry
      ownerWebsite
      ownerDescription
      ownerImage
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      role
      address
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($petId: ID!) {
    checkout(petId: $petId) {
      session
    }
  }
`;

export const QUERY_WALKERS = gql`
  query getWalkers($city: String) {
    walkers(city: $city) {
      _id
      walkerName
      walkerEmail
      walkerPhone
      walkerAddress
      walkerCity
      walkerState
      walkerZip
      walkerCountry
      walkerWebsite
      walkerDescription
      walkerImage
    }
  }
`;
