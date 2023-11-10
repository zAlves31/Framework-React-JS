export const dateFormatDbToView = data => {
    // EX: 2023-09-30T00:00:00 para 30/09/2023
    data = data.substr(0, 10);//
    data = data.split("-");

    return `${data[2]}/${data[1]}/${data[0]}`;
}