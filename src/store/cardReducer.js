import {createStore} from 'redux';

export const defaultState = {
    cards: [
        {
            value: '💩',
            id: 0,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🤡',
            id: 1,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🦠',
            id: 2,
            isShow: false,
            isFinish: false,
        },
        {
            value: '👽',
            id: 3,
            isShow: false,
            isFinish: false,
        },
        {
            value: '👻',
            id: 4,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🥶',
            id: 5,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🤙🏻',
            id: 6,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🙏🏻',
            id: 7,
            isShow: false,
            isFinish: false,
        },
        {
            value: '💩',
            id: 8,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🤡',
            id: 9,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🦠',
            id: 10,
            isShow: false,
            isFinish: false,
        },
        {
            value: '👽',
            id: 11,
            isShow: false,
            isFinish: false,
        },
        {
            value: '👻',
            id: 12,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🥶',
            id: 13,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🤙🏻',
            id: 14,
            isShow: false,
            isFinish: false,
        },
        {
            value: '🙏🏻',
            id: 15,
            isShow: false,
            isFinish: false,
        },
    ],
    count: 0,
    selectedCards: []
}

export const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'tapOnCard':
            let count = state.count + 1;
            let cards = state.cards;
            let selectedCards = state.selectedCards
            const currentCard = state.cards.find(card => card.id === action.id);
            switch (count) {
                case 1:
                    cards = cards.map(card => currentCard.id === card.id ? {...card, isShow: true} : card);
                    selectedCards = [...selectedCards, currentCard]
                    break;
                case 2:
                    cards = cards.map(card => currentCard.id === card.id ? {...card, isShow: !card.isShow} : card);
                    if (selectedCards[0].id === currentCard.id) {
                        selectedCards = []
                        count = 0
                    } else {
                        cards = cards.map(card => currentCard.id === card.id ? {...card, isShow: true} : card);
                        selectedCards = [...selectedCards, currentCard]
                    }
                    break;
                case 3:
                    if (selectedCards.some(el => el.id === currentCard.id)) {
                        selectedCards = []
                        count = 0
                        cards = cards.map(card => ({...card, isShow: false}))

                    } else {
                        cards = cards.map(card => {
                            if (selectedCards.some(el => el.id === card.id)) {
                                return {
                                    ...card,
                                    isShow: false,
                                    isFinish: selectedCards[0].value === selectedCards[1].value ? true : false
                                }
                            }
                            if (card.id === currentCard.id)
                                return {
                                    ...card,
                                    isShow: true
                                }
                            return card;
                        });
                        count = 1;
                        selectedCards = [currentCard];
                    }
                    break;
            }
            return {
                ...state,
                cards,
                count,
                selectedCards
            };
        default:
            return state;
    }
};

export const store = createStore(cardReducer)