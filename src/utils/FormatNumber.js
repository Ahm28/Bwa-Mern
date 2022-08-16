export default (number) => {
    const formatingNumber = new Intl.NumberFormat("id-ID");
    return formatingNumber.format(number)
}