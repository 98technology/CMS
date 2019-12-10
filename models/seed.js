const Room = require('./Room')

Room.create([
  
  {
    name: 'Room 1',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 2',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 3',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 4',
    floor: '8',
    capacity: 24,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 5',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 6',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 7',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 8',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 9',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 10',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 11',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 12',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 13',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  },
  {
    name: 'Room 14',
    floor: '8',
    capacity: 18,
    avaialbility: ['Thrusday','Friday']
  },
  {
    name: 'Room 15',
    floor: '8',
    capacity: 18,
    avaialbility: ['Monday','Tuesday','Wednesday']
  }
])
  .then((rooms) => {
    console.log(`Created ${rooms.length} rooms.`)
  })
  .catch((error) => {
    console.error(error)
  })