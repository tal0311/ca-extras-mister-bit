const INITIAL_STATE = {
  contacts: null,
  filterBy: null,
}

export function contactReducer(state = INITIAL_STATE, action) {
  console.log(action)
  switch (action.type) {
    case 'SET_CONTACTS':
      return {
        ...state,
        contacts: action.contacts,
      }

    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.CONTACT],
      }

    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (CONTACT) => CONTACT._id !== action.CONTACTId
        ),
      }

    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((CONTACT) =>
          CONTACT._id === action.CONTACT._id ? action.CONTACT : CONTACT
        ),
      }
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: { ...action.filterBy },
      }

    default:
      return state
  }
}
