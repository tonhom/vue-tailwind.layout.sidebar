import { reactive } from "vue"

const state = reactive({
    fixed: false
})

const methods = {
    setFixed(val) {
        state.fixed = val
    }
}

export default {
    state, methods
}