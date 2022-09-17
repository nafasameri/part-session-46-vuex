import axios from "axios"

const value = {
    namespaced: true,
    state: {
        value: 'fgh',
        shoppinglist: {
            "Food,666666": ["Carrot", "Some Milk", "Carrot", "Some Milk"],
            "Daily Use,764598": ["Carrot", "Some Milk", "Carrot", "Some Milk", "Carrot", "Some Milk"],
            "Drink,093578": ["Carrot", "Some Milk", "Carrot", "Some Milk", "Carrot", "Some Milk", "Carrot", "Some Milk",],
        }
    },
    getters: {
        getColor: (payload) => {
            return `#${payload.split(',')[1]}`;
        },
        activeIndexes: (state) => (payload) => {
            let indexes = [];
            state.history.forEach((number, index) => {
                if (number === payload) {
                    indexes.push(index)
                }
            });
            return indexes
        }
    },
    mutations: {
        ADDITION(state, item, payload) {
            state.shoppinglist.forEach((number, index) => {
                if (index === item) {
                    number.push(payload);
                    console.log(number);
                }
            });
            console.log(state.shoppinglist);

            // state.shoppinglist.push(payload);
        },
        CHANGE_VALUE(state, payload) {
            state.value = payload
            state.shoppinglist.push(payload)
        }
    },
    actions: {
        addition(context, item, value) {
            context.commit('ADDITION', item, value);
        },
        async randomNumber(context) {
            const value = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
            context.commit('CHANGE_VALUE', value.data)
        }
    },
}

export default value