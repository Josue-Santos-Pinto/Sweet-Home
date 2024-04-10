export const formatDate = (date: Date) => {
    const months = ['jan','fev','mar','mai','abr','jun','jul','ago','set','out','nov','dez']
    const day = date.getDate()
    const month = months[date.getMonth()]

    return `${day} de ${month}`
}