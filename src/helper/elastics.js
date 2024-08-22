import { Client as Client7 } from 'es7';
import config from 'config';
import { singularize } from './helperfunction.js';


const elasticConfig = config.get(
  process.env.NODE_ENV === 'dev' ? 'elasticDev' : 'elastic'
);

const client = new Client7({
  cloud: {
    id: elasticConfig.cloudID,
  },
  auth: {
    // apiKey: elasticConfig.apiKey
    username: elasticConfig.username,
    password: elasticConfig.password,
  },
});

client
  .ping()
  .then(response => console.log('Fazter is connected to Elasticsearch!'))
  .catch(error => console.error('Elasticsearch is not connected.'));

const search = async (query) => {
  const { body } = await client.search({
    index: 'fazter',
    body: {
      size: 200,
      query: {
        bool: {
          should: [
            {
              multi_match: {
                query: query.trim().toLowerCase(),
                fields: ['title^2', 'subcategory^3', 'category'],
                type: 'best_fields',
                operator: "and",
                tie_breaker: 0.3,
              },
            },
          ],
          minimum_should_match: 1,
        },
      },
    },
  });


  if (body.hits.hits.length > 0) {
    return body?.hits?.hits;
  }

  const body3 = await client.search({
    index: 'fazter',
    body: {
      size: 200,
      query: {
        bool: {
          should: [
            {
              multi_match: {
                query: query.trim().toLowerCase(),
                fields: ['title^2', 'subcategory^3', 'category'],
                type: 'best_fields',
                minimum_should_match: 2,
                tie_breaker: 0.3,
              },
            },
          ],
          minimum_should_match: 1,
        },
      },
    },
  });
  if (body3.body.hits.hits.length > 0) {
    return body3?.body?.hits?.hits;
  }


  const body4 = await client.search({
    index: 'fazter',
    body: {
      size: 200,
      query: {
        bool: {
          should: [
            {
              multi_match: {
                query: singularize(query.trim().toLowerCase()),
                fields: ['title^2', 'subcategory^3', 'category'],
                type: 'best_fields',
                minimum_should_match: 2,
                tie_breaker: 0.3,
              },
            },
          ],
          minimum_should_match: 1,
        },
      },
    },
  });
  if (body4.body.hits.hits.length > 0) {
    return body4?.body?.hits?.hits;
  }

  const body2 = await client.search({
    index: 'fazter',
    body: {
      size: 200,
      query: {
        bool: {

          should: [
            {
              multi_match: {
                query: query.trim().toLowerCase(),
                fields: ['title^2', 'subcategory^3', 'category'],
                type: 'best_fields',
                tie_breaker: 0.3,
              },
            },
            {
              multi_match: {
                query: query.trim().toLowerCase(),
                fields: ['title^2', 'subcategory^3', 'category'],
                type: 'phrase',
              },
            },

            {
              fuzzy: {
                title: {
                  value: query.trim().toLowerCase(),
                  fuzziness: 'AUTO',
                },
              },
            },
          ],
          minimum_should_match: 1,
        },
      },
    },
  });

  return [...body?.hits?.hits, ...body2?.body?.hits?.hits]
};

export { client as default, search as elasticSearch };
