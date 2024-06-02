export const formatDate = (date: Date): string => {

    const newDate = new Date(date);

    const day = newDate.getDay();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    const formatNewDate = `${ day < 10 ? '0' + day : day }/${ month < 10 ? '0' + month : month}/${ year }`

    return formatNewDate;

}