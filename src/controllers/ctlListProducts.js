module.exports = function (req, res) {
  res.json(
    [
      {
        id: 1,
        name: 'label 1',
        price: 25.5,
        description: 'description',
        image: '',
      },
      {
        id: 2,
        name: 'label 2',
        price: 32.5,
        description: 'description',
        image: '',
      },
      {
        id: 3,
        name: 'label 3',
        price: 25.5,
        description: 'description',
        image: '',
      }
    ]
  )    
}