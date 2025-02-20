import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
    }
  }
`;

export const GET_TASKS_BY_PROJECT = gql`
  query GetTasksByProject($project_id: String!) {
    tasks(project_id: $project_id) {
      id
      name
    }
  }
`;
