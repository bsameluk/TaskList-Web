interface Config {
  GRAPHQL_URL: string;
}

const GRAPHQL_URL = process.env.VITE_GRAPHQL_URL || "https://ec2-13-50-16-237.eu-north-1.compute.amazonaws.com/graphql";

const config: Record<string, Config> = {
  development: {
    GRAPHQL_URL,
  },
  production: {
    GRAPHQL_URL,
  }
};

export default config[import.meta.env.MODE || "development"];
