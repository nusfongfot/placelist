import cardItem from '../data/example_data.json';

const service = {
  getData: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = cardItem.slice(from, to)
      resolve({
        count: cardItem.length,
        data: data
      })
    })
  }
}

export default service