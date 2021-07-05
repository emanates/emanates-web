export const state = () => ({
    currentTheme: "auto",
    currentExactTheme: "light"
})

export const mutations = {
    setCurrentTheme(state, newValue) {
        state.currentTheme = newValue;
    },
    setCurrentExactTheme(state, newValue) {
        state.currentExactTheme = newValue;
    }
}