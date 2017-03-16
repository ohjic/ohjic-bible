/**
 * Created by ksb on 17. 2. 5.
 */
const TEST = "test/TEST";

const initialState = {
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case TEST:
            return {
                ...state
            };
        default:
            return state;
    }
}

export function test() {
    return {
        type: TEST
    }
}
