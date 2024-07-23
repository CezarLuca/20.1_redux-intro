import { combineReducers, createStore } from "redux";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: "",
};

function accountReducer(state = initialState, action) {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
            };
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload,
            };
        case "account/requestLoan":
            return {
                // LATER
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };
        case "account/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };
        default:
            return state;
    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt,
            };
        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

// const store = createStore(accountReducer);
const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log("Hey Redux, what's the state?");
// console.log(store.getState());

// store.dispatch({ type: "account/withdraw", payload: 100 });
// console.log(store.getState());

// store.dispatch({
//     type: "account/requestLoan",
//     payload: { amount: 1000, purpose: "Buy a new car" },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

function deposit(amount) {
    return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
    return { type: "account/requestLoan", payload: { amount, purpose } };
}

function payLoan() {
    return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(100));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a new car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
    return {
        type: "customer/create",
        payload: { fullName, nationalID, createdAt: new Date().toISOString() },
    };
}

function updateName(fullName) {
    return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("Cezar Cezarescu", "123456789"));
console.log(store.getState());
store.dispatch(updateName("Cezar Cezar"));
console.log(store.getState());
store.dispatch(deposit(500));
console.log(store.getState());
