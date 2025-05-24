export const fomaster = (number) => {
    return new Intl.NumberFormat("VI-VN", {
        style: "currency",
        currency: "VND"
    }).format(number)
}