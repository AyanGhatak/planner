var ns = 'planner';

var addClass = (cls) => {
  return ns + '-' + cls;
}

var events = [{
    name: 'ABC',
    start: '18:00',
    end: '19:00'
  },{
    name: 'DEF',
    start: '13:30',
    end: '14:30'
  }];

export default  {
  head: {
    className: addClass('nav-bar'),
    content: 'WEEKPLAN ULTIMATE'
  },
  body: [{
    head: {
      className: addClass('head'),
      content: 'Week'
    },
    body: {
      className: addClass('detail'),
      content: [
        {
          name: 'MONDAY',
          lists: events
        },{
          name: 'TUESDAY',
          lists: events
        },{
          name: 'WEDNESDAY',
          lists: events
        },{
          name: 'THURSDAY',
          lists: events
        },{
          name: 'FRIDAY',
          lists: events
        },{
          name: 'SATURDAY',
          lists: events
        },{
          name: 'SUNDAY',
          lists: events
        },{
          name: 'PENDING',
          lists: events
        }
      ],
      visible: true
    },
    group: {
      className: addClass('section')
    }
  },
  {
    head: {
      className: addClass('head'),
      content: 'Roles and Goals'
    },
    body: {
      className: addClass('detail'),
      content: [{
        name: 'SELF',
        lists: [{
          name: 'Use WeekPlan for atleast a week'
        },{
          name: 'Throw away junk food'
        }]
      }],
      visible: true
    },
    group: {
      className: addClass('section')
    }
  },
  {
    head: {
      className: addClass('head'),
      content: 'Parking Lot'
    },
    body: {
      className: addClass('detail'),
      content: [{
        name: 'GIFT IDEAS',
        lists: []
      },{
        name: 'BOOKS TO READ',
        lists: []
      },{
        name: 'BUCKET LIST',
        lists: []
      }],
      visible: true
    },
    group: {
      className: addClass('section')
    }
  }]
};
