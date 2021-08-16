export const deleteBand = (id) => {
    return {
        type: "DELETE_BAND",
        id
    }
}

export const addBand = (band) => {
    return {
        type: "ADD_BAND",
        band
    }
}
