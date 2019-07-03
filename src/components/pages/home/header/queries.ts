import gql from "graphql-tag";

/**
 * Get general settings
 */
export const getGeneralSettings = gql`
  query GET_GENERAL_SETTINGS {
    generalSettings {
      description
      title
    }
  }
`;
