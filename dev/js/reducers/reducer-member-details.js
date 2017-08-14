const initialState = [
        {
    username: "robconery",    
    name: "Rob Conery",
    avatar: "https://avatars3.githubusercontent.com/u/78586?v=3",
    location: "Seattle, USA"
    },
        {
    username: "hesmaili",
    name: "Hamed Esmaili",
    avatar: "https://avatars2.githubusercontent.com/u/10959759?v=3",
    location: "Abu Dhabi, UAE"
    },
        {
    username: "justin",
    name: "Justin Williams",
    avatar: "https://avatars0.githubusercontent.com/u/1384?v=3",
    location: "Melbourne, Australlia"
    },
        {
    username: "shawn",
    name: "Shawn Allison",
    avatar: "https://avatars3.githubusercontent.com/u/10295?v=3",
    location: "Los Angeles, USA"
    },
        {
    username: "paul",
    name: "Paul Sadaus",
    avatar: "https://avatars2.githubusercontent.com/u/184?v=3",
    location: "St. Petersburgh, UK"
    },
    {
    username: "alisha",
    name: "Alisha Ukani",
    avatar: "https://avatars0.githubusercontent.com/u/1406727?v=3",
    location: "Boston, Manchester"
    },
    {
    username: "thomas",
    name: "Thomas Meeks",
    avatar: "https://avatars3.githubusercontent.com/u/3412?v=3",
    location: "Orlando, Florida"
    },
    {
    username: "monica",
    name: "Monica Reed",
    avatar: "https://avatars1.githubusercontent.com/u/126998?v=3",
    location: "Santo Domingo"
    },
    {
    username: "david",
    name: "David Leel",
    avatar: "https://avatars2.githubusercontent.com/u/293?v=3",
    location: "Lisbon, Portugal"
    }
]

export default function (state = initialState, action) {

    switch (action.type) {
        case 'REMOVE_MEMBER':
            var newState = state;
            var index = newState.findIndex(x => x.username === action.username);
            newState.splice(index, 1);
            return Object.assign([], state, newState);            
            break;
        default:
            return state;
            break;
    }
}
