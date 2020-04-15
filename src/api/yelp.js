import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer DA_GkMq-FNE7NI8PfynztseLGJCFYJoAn0YLiVLTklF-9_3_vj5CmmlTPy3QdxsgUFOYv1sxkF9iLnpCnXqikr9S6vxPBgFe7ervQsupcUr5ePDeB1s8B_CiXhSUXnYx'
  }
});