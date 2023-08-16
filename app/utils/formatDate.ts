export function formatDate(inputDate: string) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  const [year, month, day] = inputDate.split('-')
  const formattedDate = `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year} г.`
  return formattedDate
}
