import { LEAST_COMMENTS, LEAST_UPVOTES, MOST_COMMENTS, MOST_UPVOTES } from '@/constants'

export interface IUser {
  image: string
  name: string
  username: string
}

export interface ISuggestion {
  id: string
  title: string
  category: string
  upvotes: number
  isUpvoted: boolean
  status: string
  description: string
  comments?: IComment[]
}

export interface IComment {
  id: string
  content: string
  user: IUser
  replies?: IReply[]
}

export interface IReply {
  id: string
  content: string
  user: IUser
  replyingTo: string
}

export interface IStatus {
  status: ISuggestion['status']
  name: string
  label: string
  color: string
  amount: number
}

export type SortBy =
  | typeof MOST_UPVOTES
  | typeof LEAST_UPVOTES
  | typeof MOST_COMMENTS
  | typeof LEAST_COMMENTS

export type FilterType = 'all' | 'enhancement' | 'feature' | 'bug' | 'ui' | 'ux'

export type InputSuggestion = Pick<ISuggestion, 'category' | 'title' | 'description'>

export interface ICategory {
  id: number
  name: string
  label: string
}

export type FeedbackReturnType = Promise<ISuggestion | undefined>
export type SuggestionsReturnType = Promise<ISuggestion[] | undefined>
export type BoardColumnsReturnType = Promise<IBoardColumn[] | undefined>

export interface IBoard {
  name: string
  columns: IBoardColumn[]
}
export interface IBoardColumn {
  id: string
  name: string
  description: string
  color: string
  group: string
  items: ISuggestion[]
}
