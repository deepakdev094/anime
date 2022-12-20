import moment from "moment"

export const dataFormate = (date?: string, format?: string) => {
    if (date) {
        return moment(date).format(format)
    }
    return date
}

export const ApiDataExtrace = (response: any) => {
    const data = response.map((data: any) => {
        return {
            image: data.images.jpg.image_url,
            rank: data.rank,
            rating: data.rating,
            title: data.title,
            release_date: dataFormate(data.aired.from, "ddd MMM DD YYYY"),
            lastest_date: dataFormate(data.aired.to, "ddd MMM DD YYYY"),
            year: dataFormate(data.aired.from, "YYYY"),
        }
    })
    return data
}