export interface Sessions {
  date: string,
  title: string,
  participants: number,
  trainer: string,
  progress: number
}

export const SESSIONS = [
  {
    date: '23 дек, 9:00',
    title: 'Страхование с заботой о клиенте',
    participants: 12,
    trainer: '',
    progress: 95
  },
  {
    date: '14 ноя, 9:30',
    title: 'Главные правила продаж',
    participants: 10,
    trainer: '',
    progress: 91
  },
  {
    date: '19 окт, 14:30',
    title: 'Первичное обучение КС',
    participants: 8,
    trainer: '',
    progress: 86
  },
  {
    date: '10 окт, 16:00',
    title: 'Вторичное обучение КС',
    participants: 18,
    trainer: '',
    progress: 82
  },
  {
    date: '5 окт, 15:00',
    title: 'Вклады: теория и практика',
    participants: 6,
    trainer: '',
    progress: 79
  },
  {
    date: '27 сен, 11:00',
    title: 'Очное обучение менеджеров',
    participants: 20,
    trainer: '',
    progress: 73
  },
]
