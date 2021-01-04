import gql from 'graphql-tag';

const GET_LAUNCHES = gql`
  {
    launchesPast {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      launch_success
      links {
        wikipedia
      }
      rocket {
        rocket_name
        rocket_type
        first_stage {
          cores {
            core {
              reuse_count
            }        
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

export default {
  get() {
    return GET_LAUNCHES;
  },
};
