interface Config {
  GRAPHQL_URL: string;
}

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL || "http://localhost:3000/graphql";

console.log('ENV URL:', import.meta.env.VITE_GRAPHQL_URL);

const config: Record<string, Config> = {
  development: {
    GRAPHQL_URL,
  },
  production: {
    GRAPHQL_URL,
  }
};

export default config[import.meta.env.MODE || "development"];
